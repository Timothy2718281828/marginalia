---
title: "§1 实数公理与确界原理"
description: 实数域的公理体系，上确界与下确界
---

## §1 实数公理与确界原理

本节建立了实数 $\mathbb{R}$ 的公理化描述。

### 实数公理体系

实数集 $\mathbb{R}$ 是一个满足以下公理的集合：

**(I) 加法公理**：$(\mathbb{R}, +)$ 构成 Abel 群。

**(II) 乘法公理**：$(\mathbb{R} \setminus \{0\}, \cdot)$ 构成 Abel 群。

**(III) 分配律**：$\forall a,b,c \in \mathbb{R},\ a(b+c)=ab+ac$。

**(IV) 序公理**：$\mathbb{R}$ 上有全序关系 $\leq$，且与代数结构相容。

**(V) 完备性公理**：若 $X \subset \mathbb{R}$ 有上界，则 $X$ 有最小上界（上确界）。

### 关键定义

**上确界**：
$$
s = \sup X \iff \begin{cases}
\forall x \in X,\ x \leq s & \text{(s 是上界)} \\
\forall s' < s,\ \exists x \in X,\ x > s' & \text{(s 是最小上界)}
\end{cases}
$$

### 相关习题

这些概念直接应用于习题 1.1.1–1.1.x。
