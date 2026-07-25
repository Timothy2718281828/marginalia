# Marginalia

数学经典教材习题解答与学习笔记。

## 技术栈

- [Astro](https://astro.build) + [Starlight](https://starlight.astro.build)
- [KaTeX](https://katex.org) 数学公式渲染
- TikZ 图表支持（通过 `pdflatex` → `pdftocairo -svg` 编译管线）

## 本地运行

```bash
npm install
npm run dev
```

### TikZ 图表

Markdown 中的 ````tikz` 代码块会在构建时自动编译为 SVG。编译需要本机安装：

- LaTeX（含 `pdflatex`）
- Poppler（含 `pdftocairo`）

未安装时 TikZ 块会降级为源码展示，不影响其他内容。

## 构建部署

```bash
npm run build    # 输出到 dist/
npm run preview  # 预览构建结果
```

站点部署于 `/math` 路径下。
