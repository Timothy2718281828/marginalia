---
title: "§1 基本概念"
description: 集合、子集、交并补、笛卡尔积 — 基本定义与性质
---

## §1 基本概念

本节回顾集合论最基础的术语和记号。

### 定义回顾

**集合与元素**：$x \in A$ 表示 $x$ 是集合 $A$ 的元素。

**子集**：$A \subset B \iff (\forall x)(x \in A \implies x \in B)$。

**幂集**：$\mathcal{P}(A) = \{B \mid B \subset A\}$。

### 运算

- **并**：$A \cup B = \{x \mid x \in A \lor x \in B\}$
- **交**：$A \cap B = \{x \mid x \in A \land x \in B\}$
- **差**：$A \setminus B = \{x \mid x \in A \land x \notin B\}$
- **笛卡尔积**：$A \times B = \{(a, b) \mid a \in A,\ b \in B\}$

### De Morgan 定律

$$
X \setminus (A \cup B) = (X \setminus A) \cap (X \setminus B)
$$
$$
X \setminus (A \cap B) = (X \setminus A) \cup (X \setminus B)
$$
