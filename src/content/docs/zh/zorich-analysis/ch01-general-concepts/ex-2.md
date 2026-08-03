---
title: "习题 2 — 笛卡尔积的几何解释"
description: 给出线段、直线、圆周、圆面的笛卡尔积的几何解释
sidebar:
  label: "习题 2"
difficulty: easy
status: done
tags:
  - 笛卡尔积
  - 几何
  - 集合
---

## 题目

给出以下集合的笛卡尔积的几何解释:

(a) 两线段;
(b) 两直线;
(c) 直线与圆周;
(d) 直线与圆面;
(e) 两圆周;
(f) 圆周与圆面.

## 解答

记 $I = [0,1]$, $\mathbb{R}$ 为实直线, $S^1 = \{ (x,y) \in \mathbb{R}^2 : x^2 + y^2 = 1 \}$ 为单位圆周, $D^2 = \{ (x,y) \in \mathbb{R}^2 : x^2 + y^2 \le 1 \}$ 为闭单位圆面.

| 乘积 | 记号 | 几何解释 |
|---|---|---|
| (a) $I \times I$ | 两线段 | **矩形** (含内部) |
| (b) $\mathbb{R} \times \mathbb{R}$ | 两直线 | **平面** $\mathbb{R}^2$ |
| (c) $\mathbb{R} \times S^1$ | 直线 $\times$ 圆周 | **无限长圆柱面** (无上下底) |
| (d) $\mathbb{R} \times D^2$ | 直线 $\times$ 圆面 | **无限长实心圆柱体** |
| (e) $S^1 \times S^1$ | 圆周 $\times$ 圆周 | **环面** (甜甜圈表面) |
| (f) $S^1 \times D^2$ | 圆周 $\times$ 圆面 | **实心环体** (填满的甜甜圈) |

```tikz
\begin{tikzpicture}[scale=1]
  % (a) Rectangle
  \draw[->] (0,0) -- (2.6,0) node[right] {$[0,1]$};
  \draw[->] (0,0) -- (0,2.6) node[above] {$[0,1]$};
  \fill[blue!15] (0.3,0.3) rectangle (2.3,2.3);
  \draw[thick] (0.3,0.3) rectangle (2.3,2.3);
  \node at (1.3,-0.5) {(a) $I \times I$};
\end{tikzpicture}
\qquad
\begin{tikzpicture}[scale=1]
  % (c) Cylinder
  \draw (0,0) ellipse (0.85 and 0.35);
  \draw (-0.85,0) -- (-0.85,2.8);
  \draw (0.85,0) -- (0.85,2.8);
  \draw (0,2.8) ellipse (0.85 and 0.35);
  \draw[dashed] (0.85,2.8) arc (0:180:0.85 and 0.35);
  \draw (0.85,2.8) arc (0:-180:0.85 and 0.35);
  \node at (0,-0.6) {(c) $\mathbb{R} \times S^1$};
\end{tikzpicture}
\qquad
\begin{tikzpicture}[xscale=2]
  % (e) Torus -- classic double-distance trick
  \draw[double distance=12mm] (0:1) arc (0:180:1);
  \draw[double distance=12mm] (180:1) arc (180:360:1);
  \draw[thick,white] (.48,0)--(1.1,0);
  \draw[thick,white] (-.48,0)--(-1.1,0);
  \draw[line width=.35,looseness=.3,name path=mer] (0,-1.4cm) to[out=0,in=0] (0,-.2cm);
  \draw[line width=.35,dashed,looseness=.3] (0,-1.4cm) to[out=180,in=180] (0,-.2cm);
  \draw[line width=.35,looseness=1.3,name path=lon] (1.1cm,0) to[out=-90,in=-90] (-1.1cm,0);
  \draw[line width=.35,dashed,looseness=1.3] (1.1cm,0) to[out=90,in=90] (-1.1cm,0);
  \fill[name intersections={of=mer and lon,by=v}] (v) ellipse (.2mm and .3mm);
  \node at (0,-0.8) {(e) $S^1 \times S^1$};
\end{tikzpicture}
```

## 评注

一般规律: 若 $X$ 是 $p$ 维几何对象, $Y$ 是 $q$ 维几何对象, 则 $X \times Y$ 的维数为 $p + q$.

- (a) $1 + 1 = 2$ (矩形)
- (c) $1 + 1 = 2$ (圆柱面, 二维流形)
- (d) $1 + 2 = 3$ (实心圆柱)
- (e) $1 + 1 = 2$ (环面, 二维流形)
- (f) $1 + 2 = 3$ (实心环体)
