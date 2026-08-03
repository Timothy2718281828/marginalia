---
title: "Exercise 1 — Russell's Paradox"
description: Prove that the set of all sets leads to a contradiction.
sidebar:
  label: "Ex 1"
difficulty: medium
status: done
tags:
  - set theory
  - Russell's paradox
---

## Problem

Prove that "the set of all sets" is a contradictory notion — no set can have all sets as its elements.

## Solution

Suppose, for contradiction, that $K$ is the set of all sets. Define the property

$$
P(M) \;:\Longleftrightarrow\; M \notin M,
$$

i.e. $P(M)$ holds precisely when $M$ does **not** contain itself as an element.

Now apply the axiom of separation to $K$ with property $P$: the collection

$$
S = \{\, M \in K \mid P(M) \,\} = \{\, M \in K \mid M \notin M \,\}
$$

is a set. Since $K$ contains all sets, $S \in K$. We ask whether $P(S)$ holds.

- If $P(S)$ holds, then $S \notin S$ by definition of $P$. But if $S \notin S$, then $S$ satisfies the defining condition of $S$, so $S \in S$. Contradiction.
- If $\neg P(S)$ holds, then $S \in S$. But then $S$ fails the defining condition of $S$, so $S \notin S$. Contradiction.

Both $P(S)$ and $\neg P(S)$ lead to contradictions. The only way out is that the original assumption — the existence of a set of all sets — is false. $\square$

## Remarks

This is **Russell's paradox** (1901), which struck at the heart of Cantor's naive set theory. In Cantor's original formulation, any well-defined property determined a set — the principle of *unrestricted comprehension*. Russell showed this leads directly to inconsistency.

The resolution was the development of **axiomatic set theory**, which carefully restricts which collections count as sets:

- **Zermelo-Fraenkel (ZF)** and **ZFC** (ZF + Axiom of Choice) replace unrestricted comprehension with the *axiom of separation*: given a set $A$ and a property $P$, $\{x \in A : P(x)\}$ is a set. Crucially, you cannot form $\{x : P(x)\}$ without a pre-existing container set. The set of all sets simply does not exist.
- **von Neumann-Bernays-Gödel (NBG)** takes a different route: it distinguishes *sets* from *classes*. Every set is a class, but some classes (like the class of all sets) are "too large" to be sets. The paradox is avoided because the Russell class $S = \{x : x \notin x\}$ is a proper class, not a set.
- **New Foundations (NF)**, proposed by Quine, uses a stratified comprehension principle that allows the set of all sets to exist without contradiction.

### The Axiom of Choice and Banach-Tarski

ZFC is the dominant foundation today, but the **Axiom of Choice** (AC) within it has been controversial. One striking consequence is the **Banach-Tarski paradox** (1924): a solid ball in $\R^3$ can be decomposed into finitely many pieces which, after rigid motions (rotations and translations), can be reassembled into *two* solid balls, each identical to the original.

**Sketch of the proof.** The key insight is that the free group $F_2$ on two generators admits a paradoxical decomposition: $F_2 = A_1 \cup A_2 \cup A_3 \cup B_1 \cup B_2$ (disjoint) with elements $a,b$ such that $F_2 = aA_1 \cup A_2 \cup A_3 = bB_1 \cup B_2$. Now let $G = \mathrm{SO}(3)$ contain a free subgroup isomorphic to $F_2$ (choose two independent rotations). The orbits of $G$ acting on the sphere $S^2$ partition it into uncountably many $G$-orbits. Use the Axiom of Choice to select one point from each orbit, forming a set $M$. The decomposition of $F_2$ lifts to a paradoxical decomposition of the sphere (minus a countable set of fixed points of rotations). The same idea extends to the solid ball by radial scaling.

The result is not a true paradox in the logical sense — it is a *theorem* of ZFC. What it reveals is that AC implies the existence of **non-measurable sets**: the "pieces" of the decomposition cannot be assigned a volume in the usual sense. One cannot physically duplicate a gold ball, because physical matter is made of finitely many measurable pieces (atoms). The Banach-Tarski construction requires infinitely complicated, non-measurable sets that have no physical counterpart.
