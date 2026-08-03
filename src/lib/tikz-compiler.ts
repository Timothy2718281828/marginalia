import { execSync } from "node:child_process";
import { createHash } from "node:crypto";
import { readFileSync, writeFileSync, mkdirSync, existsSync, rmSync } from "node:fs";
import { join, resolve, dirname } from "node:path";
import { tmpdir } from "node:os";
import { fileURLToPath } from "node:url";

const CACHE_DIR = resolve(".tikz-cache");

// Read LaTeX template from external file (avoids JS string escaping issues)
const __dirname = dirname(fileURLToPath(import.meta.url));
const TEMPLATE_PATH = join(__dirname, "template.tex");
const TIKZ_TEMPLATE = readFileSync(TEMPLATE_PATH, "utf-8");

export interface TikZResult {
  svg: string;
  cached: boolean;
  error?: string;
}

function hashCode(code: string): string {
  return createHash("sha256").update(code).digest("hex").slice(0, 16);
}

/**
 * Compile a TikZ code snippet to SVG.
 * Uses pdflatex → pdftocairo -svg pipeline with file-system cache.
 */
export function compileTikZ(code: string): TikZResult {
  const key = hashCode(code);
  const cachePath = join(CACHE_DIR, `${key}.svg`);

  // 1. Check cache
  if (existsSync(cachePath)) {
    try {
      const svg = readFileSync(cachePath, "utf-8");
      return { svg, cached: true };
    } catch {
      // cache corrupted — recompile
    }
  }

  // 2. Ensure cache directory
  if (!existsSync(CACHE_DIR)) {
    mkdirSync(CACHE_DIR, { recursive: true });
  }

  // 3. Build full LaTeX document
  const fullDoc = TIKZ_TEMPLATE.replace("%s", code.trim());

  // 4. Write to temp directory & compile
  const workDir = join(tmpdir(), `tikz-${key}`);
  mkdirSync(workDir, { recursive: true });

  const texPath = join(workDir, "fig.tex");
  writeFileSync(texPath, fullDoc, "utf-8");

  try {
    // Compile: pdflatex (twice for positioning)
    execSync(`pdflatex -interaction=nonstopmode -halt-on-error fig.tex`, {
      cwd: workDir,
      timeout: 30000,
      stdio: "pipe",
    });
    execSync(`pdflatex -interaction=nonstopmode -halt-on-error fig.tex`, {
      cwd: workDir,
      timeout: 30000,
      stdio: "pipe",
    });

    // Convert PDF → SVG
    execSync(`pdftocairo -svg fig.pdf fig.svg`, {
      cwd: workDir,
      timeout: 15000,
      stdio: "pipe",
    });

    const svgContent = readFileSync(join(workDir, "fig.svg"), "utf-8");

    // 5. Cache result
    writeFileSync(cachePath, svgContent, "utf-8");

    // 6. Clean up work dir
    try {
      rmSync(workDir, { recursive: true, force: true });
    } catch {
      // best effort
    }

    return { svg: svgContent, cached: false };
  } catch (err: any) {
    const stdout = err.stdout?.toString() || "";
    const stderr = err.stderr?.toString() || err.message || "Unknown error";
    console.error(`[tikz] Compilation failed for ${key}:\n${stderr}\n${stdout}`);

    // Clean up on failure
    try {
      rmSync(workDir, { recursive: true, force: true });
    } catch {
      // best effort
    }

    return { svg: "", cached: false, error: `${stderr}\n${stdout}` };
  }
}
