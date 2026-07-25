// KaTeX global macros — synced with your LaTeX preamble
// Every command here works in every page without redefining.

export const katexMacros: Record<string, string> = {
  // ── Number systems ──
  "\\R": "\\mathbb{R}",
  "\\Q": "\\mathbb{Q}",
  "\\Z": "\\mathbb{Z}",
  "\\N": "\\mathbb{N}",
  "\\C": "\\mathbb{C}",

  // ── Topology ──
  "\\T":   "\\mathcal{T}",
  "\\B":   "\\mathcal{B}",
  "\\Sub": "\\mathcal{S}",
  "\\pow": "\\mathcal{P}",

  // ── Closure / interior (with argument) ──
  "\\cl#1":   "\\overline{#1}",
  "\\inter#1":"{#1}^\\circ",

  // ── Delimiters (auto-scaling) ──
  "\\abs#1": "\\left\\lvert#1\\right\\rvert",
  "\\lrp#1": "\\left(#1\\right)",
  "\\lrb#1": "\\left[#1\\right]",
  "\\lrc#1": "\\left\\{#1\\right\\}",

  // ── DeclareMathOperators ──
  "\\Int":  "\\operatorname{Int}",
  "\\Cl":   "\\operatorname{Cl}",
  "\\Bd":   "\\operatorname{Bd}",
  "\\diam": "\\operatorname{diam}",
  "\\id":   "\\operatorname{id}",

  // ── Paired delimiters ──
  "\\norm#1":  "\\lVert#1\\rVert",
  "\\inner#1": "\\langle#1\\rangle",

  // ── Analysis shortcuts ──
  "\\limn": "\\lim_{n\\to\\infty}",
  "\\limx": "\\lim_{x\\to 0}",

  // ── Probability ──
  "\\E":    "\\mathbb{E}",
  "\\Var":  "\\operatorname{Var}",
  "\\Cov":  "\\operatorname{Cov}",
  "\\indep":"\\mathrel{\\perp\\!\\!\\perp}",
  "\\iid":  "\\stackrel{\\text{iid}}{\\sim}",

  // ── Add your own below ──
};
