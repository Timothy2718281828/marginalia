# Marginalia

Exercise solutions and study notes for classic mathematics textbooks.

Built with [Astro](https://astro.build) + [Starlight](https://starlight.astro.build).

## Features

- **KaTeX** for mathematical typesetting
- **TikZ** diagram support — server-side compilation via `pdflatex` → `pdftocairo -svg`
- **Giscus** comments powered by GitHub Discussions
- Dark mode, RSS, search out of the box

## Getting Started

```bash
npm install
npm run dev
```

### TikZ Prerequisites

TikZ code blocks in Markdown are compiled to SVG at build time. This requires a local LaTeX installation:

- LaTeX distribution with `pdflatex`
- Poppler utilities (`pdftocairo`)

Without them, TikZ blocks fall back to displaying source code — everything else works fine.

### Build & Deploy

```bash
npm run build     # outputs to dist/
npm run deploy    # build + upload + publish
npm run preview   # preview the build locally
```

The site is served under the `/math` base path.

## Books Covered

| Subject | Book | Status |
|---|---|---|
| Analysis | Zorich — Mathematical Analysis | In progress |
| | Folland — Real Analysis | Planned |
| | Bollobás — Linear Analysis | Planned |
| | Stein & Shakarchi — Complex Analysis | Planned |
| Probability & Statistics | Shiryaev — Probability | In progress |
| | Williams — Probability with Martingales | Planned |
| | Wasserman — All of Statistics | Planned |
| | van der Vaart — Asymptotic Statistics | Planned |
| | Le Gall — Brownian Motion | Planned |
| Foundations | Munkres — Topology | In progress |
| | Halmos — Naive Set Theory | Planned |

## License

MIT
