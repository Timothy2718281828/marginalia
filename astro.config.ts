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
      defaultLocale: "zh-CN",
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
                  label: "第一章 · 实数",
                  collapsed: true,
                  items: [
                    { label: "习题 1.1.1", link: "/zorich-analysis/ch01-real-numbers/ex-1-1-1" },
                  ],
                },
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
                {
                  label: "第一章 · 概率空间",
                  collapsed: true,
                  items: [],
                },
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
