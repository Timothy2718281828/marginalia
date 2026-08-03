---
title: "Exercise 2 — Cartesian Products"
description: Geometric interpretation of Cartesian products of line segments, lines, circles, and disks.
sidebar:
  label: "Ex 2"
difficulty: easy
status: done
tags:
  - cartesian product
  - geometry
  - sets
---

## Problem

Give the geometric interpretation of the following Cartesian products:

(a) two line segments;
(b) two lines;
(c) a line and a circle;
(d) a line and a disk;
(e) two circles;
(f) a circle and a disk.

## Solution

Let $I = [0,1]$, $\mathbb{R}$ be the real line, $S^1 = \{ (x,y) \in \mathbb{R}^2 : x^2 + y^2 = 1 \}$ be the unit circle, and $D^2 = \{ (x,y) \in \mathbb{R}^2 : x^2 + y^2 \le 1 \}$ be the closed unit disk.

| Product | Notation | Geometric interpretation |
|---|---|---|
| (a) $I \times I$ | Two segments | **Rectangle** (including interior) |
| (b) $\mathbb{R} \times \mathbb{R}$ | Two lines | **Plane** $\mathbb{R}^2$ |
| (c) $\mathbb{R} \times S^1$ | Line $\times$ circle | **Infinite cylinder** (without caps) |
| (d) $\mathbb{R} \times D^2$ | Line $\times$ disk | **Solid infinite cylinder** |
| (e) $S^1 \times S^1$ | Circle $\times$ circle | **Torus** (surface of a doughnut) |
| (f) $S^1 \times D^2$ | Circle $\times$ disk | **Solid torus** (filled doughnut) |

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

## Remarks

The general principle: the Cartesian product $X \times Y$ of two sets that are "geometric objects" of dimensions $p$ and $q$ respectively yields an object of dimension $p + q$ — provided one interprets "dimension" appropriately.

- (a) $1 + 1 = 2$ (rectangle)
- (c) $1 + 1 = 2$ (cylinder surface, a 2-manifold)
- (d) $1 + 2 = 3$ (solid cylinder)
- (e) $1 + 1 = 2$ (torus surface)
- (f) $1 + 2 = 3$ (solid torus)
