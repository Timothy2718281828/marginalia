import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { remarkTikZ } from "./src/lib/remark-tikz";
import { katexMacros } from "./src/lib/macros";

export default defineConfig({
  site: "https://marginmath.cc",
  base: "/math",
  integrations: [
    starlight({
      title: "Marginalia",
      description: "数学经典教材习题解答与学习笔记",
      defaultLocale: "root",
      pagefind: {},
      locales: {
        root: { label: "English", lang: "en" },
        zh: { label: "简体中文", lang: "zh-CN" },
        "zh-hant": { label: "繁體中文", lang: "zh-TW" },
      },
      social: [
        { icon: "github", label: "GitHub", href: "https://github.com/Timothy2718281828/marginalia" },
      ],
      sidebar: [
        { label: "Marginalia", link: "/" },
        {
          label: "分析",
          collapsed: false,
          items: [
            {
              label: "Zorich · 数学分析",
              collapsed: true,
              items: [
                { label: "概述", link: "/zorich-analysis/" },
                {
                  label: "第一章 · 通用数学概念与记号",
                  collapsed: true,
                  items: [
                    { label: "习题 1", link: "/zorich-analysis/ch01-general-concepts/ex-1" },
                    { label: "习题 2", link: "/zorich-analysis/ch01-general-concepts/ex-2" },
                  ],
                },
                { label: "第二章 · 实数", link: "/zorich-analysis/ch02-real-numbers/" },
                { label: "第三章 · 极限", link: "/zorich-analysis/ch03-limits/" },
                { label: "第四章 · 连续函数", link: "/zorich-analysis/ch04-continuous-functions/" },
                { label: "第五章 · 微分学", link: "/zorich-analysis/ch05-differential-calculus/" },
                { label: "第六章 · 积分学", link: "/zorich-analysis/ch06-integration/" },
                { label: "第七章 · 多元函数", link: "/zorich-analysis/ch07-multivariable/" },
                { label: "第八章 · 多元微分学", link: "/zorich-analysis/ch08-multivariable-calculus/" },
                { label: "第九章 · 连续映射（一般理论）", link: "/zorich-analysis/ch09-continuous-mappings/" },
                { label: "第十章 · 微分学（一般理论）", link: "/zorich-analysis/ch10-differential-calculus-general/" },
                { label: "第十一章 · 重积分", link: "/zorich-analysis/ch11-multiple-integrals/" },
                { label: "第十二章 · 曲面和微分形式", link: "/zorich-analysis/ch12-surfaces-differential-forms/" },
                { label: "第十三章 · 曲线积分与曲面积分", link: "/zorich-analysis/ch13-curve-surface-integrals/" },
                { label: "第十四章 · 向量分析与场论", link: "/zorich-analysis/ch14-vector-analysis/" },
                { label: "第十五章 · 微分形式在流形上的积分", link: "/zorich-analysis/ch15-manifolds/" },
                { label: "第十六章 · 一致收敛性与函数项级数", link: "/zorich-analysis/ch16-uniform-convergence/" },
                { label: "第十七章 · 含参变量的积分", link: "/zorich-analysis/ch17-parameter-integrals/" },
                { label: "第十八章 · 傅里叶级数与傅里叶变换", link: "/zorich-analysis/ch18-fourier/" },
                { label: "第十九章 · 渐近展开式", link: "/zorich-analysis/ch19-asymptotic/" },
              ],
            },
            { label: "Folland · 实分析", link: "/folland-real-analysis/" },
            { label: "Bollobás · 线性分析", link: "/bollobas-linear-analysis/" },
            { label: "Stein-Shakarchi · 复分析", link: "/stein-shakarchi-complex-analysis/" },
          ],
        },
        {
          label: "概率与统计",
          collapsed: true,
          items: [
            {
              label: "Shiryaev · 概率论",
              collapsed: true,
              items: [
                { label: "概述", link: "/shiryaev-probability/" },
                { label: "第一章 · 初等概率论", link: "/shiryaev-probability/ch01-elementary-probability/" },
                { label: "第二章 · 概率论的数学基础", link: "/shiryaev-probability/ch02-mathematical-foundations/" },
                { label: "第三章 · 概率测度的收敛性与CLT", link: "/shiryaev-probability/ch03-convergence-clt/" },
              ],
            },
            { label: "Williams · 概率与鞅", link: "/williams-probability/" },
            { label: "Wasserman · 统计学", link: "/wasserman-statistics/" },
            { label: "van der Vaart · 渐近统计", link: "/van-der-vaart-asymptotics/" },
            { label: "Le Gall · 布朗运动", link: "/le-gall-brownian-motion/" },
          ],
        },
        {
          label: "基础",
          collapsed: true,
          items: [
            {
              label: "Munkres · 拓扑学",
              collapsed: true,
              items: [
                { label: "概述", link: "/munkres-topology/" },
                {
                  label: "第一章 · 集合论与逻辑",
                  collapsed: true,
                  items: [],
                },
              ],
            },
            { label: "Halmos · 朴素集合论", link: "/halmos-set-theory/" },
          ],
        },
        {
          label: "杂题",
          collapsed: false,
          items: [
            { label: "杂题收集", link: "/misc/" },
          ],
        },
      ],
      customCss: [
        "./src/styles/custom.css",
        "katex/dist/katex.min.css",
      ],
      lastUpdated: true,
      editLink: {
        baseUrl: "https://github.com/Timothy2718281828/marginalia/edit/main/",
      },
      components: {
        Head: "./src/components/Head.astro",
        Footer: "./src/components/Footer.astro",
        PageTitle: "./src/components/PageTitle.astro",
      },
    }),
  ],
  markdown: {
    remarkPlugins: [remarkMath, remarkTikZ],
    rehypePlugins: [[rehypeKatex, { macros: katexMacros }]],
  },
});
