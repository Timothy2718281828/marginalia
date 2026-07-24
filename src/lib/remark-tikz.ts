import type { Root, Code } from "mdast";
import { visit } from "unist-util-visit";
import { compileTikZ } from "./tikz-compiler";

/**
 * Remark plugin: transforms ```tikz code blocks into inline SVGs.
 *
 * During dev/build, each ```tikz block is compiled via pdflatex → pdftocairo -svg
 * and replaced with an HTML node containing the SVG markup.
 */
export function remarkTikZ() {
  return (tree: Root) => {
    const nodes: { node: Code; index: number; parent: any }[] = [];

    visit(tree, "code", (node: Code, index, parent) => {
      if (node.lang === "tikz" && index !== undefined && parent) {
        nodes.push({ node, index, parent });
      }
    });

    // Replace tikz code blocks (reverse order to preserve indices)
    for (const { node, parent } of nodes.reverse()) {
      const idx = parent.children.indexOf(node);
      if (idx === -1) continue;

      const code = node.value;
      const result = compileTikZ(code);

      if (result.error || !result.svg) {
        // Fallback: show raw code block with error
        const errorHtml = {
          type: "html" as const,
          value: `<div class="tikz-block tikz-error">
<div class="tikz-error-banner">⚠ TikZ 编译失败 — 显示源代码</div>
<pre><code>${escapeHtml(code)}</code></pre>
<details><summary>错误信息</summary><pre>${escapeHtml(result.error || "Unknown error")}</pre></details>
</div>`,
        };
        parent.children.splice(idx, 1, errorHtml);
        continue;
      }

      // Extract the <svg> element and wrap it
      const svgTag = extractSvg(result.svg);
      const cacheNote = result.cached ? "" : "<!-- compiled fresh -->";
      const html = {
        type: "html" as const,
        value: `${cacheNote}
<figure class="tikz-figure">
<div class="tikz-svg-wrapper">${svgTag}</div>
</figure>`,
      };

      parent.children.splice(idx, 1, html);
    }
  };
}

function extractSvg(fullSvg: string): string {
  // pdftocairo produces a full SVG with <?xml> and <!DOCTYPE> — we only want the <svg> element
  const match = fullSvg.match(/<svg[\s\S]*?<\/svg>/i);
  return match ? match[0] : fullSvg;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
