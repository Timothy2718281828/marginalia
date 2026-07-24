// scripts/test-tikz.ts — standalone test for TikZ compilation
import { execSync } from "node:child_process";
import { readFileSync, writeFileSync, mkdirSync, rmSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { tmpdir } from "node:os";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

const TIKZ_TEMPLATE = readFileSync(
  join(ROOT, "src", "lib", "template.tex"),
  "utf-8"
);

// This TikZ code has literal backslashes (written in a .ts file, no shell escaping)
const tikzCode = `\\begin{tikzpicture}
  \\node (A) at (0,1) {\$A\$};
  \\node (B) at (2,1) {\$B\$};
  \\draw[->] (A) -- node[above] {\$f\$} (B);
\\end{tikzpicture}`;

const fullDoc = TIKZ_TEMPLATE.replace("%s", tikzCode.trim());

// Write & check bytes
const workDir = join(tmpdir(), "tikz-standalone-test");
mkdirSync(workDir, { recursive: true });
const texPath = join(workDir, "fig.tex");
writeFileSync(texPath, fullDoc, "utf-8");

// Hex inspection
const buf = readFileSync(texPath);
const beginIdx = buf.indexOf(Buffer.from("begin{tikzpicture}"));
if (beginIdx > 0) {
  const prev = buf[beginIdx - 1];
  console.log("Byte before 'begin{tikzpicture}': 0x" + prev.toString(16));
  if (prev === 0x5c) console.log("OK: backslash is correct");
  else if (prev === 0x08) console.log("BUG: backspace found!");
  else console.log("UNEXPECTED:", prev);
}

// Try compile
try {
  execSync("pdflatex -interaction=nonstopmode -halt-on-error fig.tex", {
    cwd: workDir,
    timeout: 30000,
    stdio: "pipe",
  });
  execSync("pdflatex -interaction=nonstopmode -halt-on-error fig.tex", {
    cwd: workDir,
    timeout: 30000,
    stdio: "pipe",
  });
  execSync("pdftocairo -svg fig.pdf fig.svg", {
    cwd: workDir,
    timeout: 15000,
    stdio: "pipe",
  });
  const svg = readFileSync(join(workDir, "fig.svg"), "utf-8");
  console.log("SUCCESS! SVG length:", svg.length);
} catch (err: any) {
  console.log("FAILED:", err.message);
  const stderr = err.stderr?.toString() || "";
  console.log(stderr.slice(-600));
}

// Cleanup
try { rmSync(workDir, { recursive: true, force: true }); } catch {}
