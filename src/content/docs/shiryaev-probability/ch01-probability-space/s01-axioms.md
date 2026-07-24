---
title: "§1 概率模型的公理化"
description: Kolmogorov公理体系 — 样本空间、σ-代数、概率测度
---

## §1 概率模型的公理化

Kolmogorov 在 1933 年提出的公理体系将概率论建立在测度论之上。

### 公理体系

一个**概率空间** $(\Omega, \mathcal{F}, P)$ 由三要素构成：

1. **样本空间** $\Omega$：所有可能结果的集合
2. **事件 $\sigma$-代数** $\mathcal{F}$：$\Omega$ 的子集族，满足可数并的封闭性
3. **概率测度** $P: \mathcal{F} \to [0, 1]$：满足 $P(\Omega) = 1$ 和可数可加性

### 关键性质

- $P(\emptyset) = 0$
- 有限可加性
- 次可加性：$P(\bigcup A_n) \leq \sum P(A_n)$
- 连续性：$A_n \uparrow A \implies P(A_n) \to P(A)$
