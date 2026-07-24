import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { remarkTikZ } from "./src/lib/remark-tikz";

export default defineConfig({
  site: "https://150.158.54.129",
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
        { label: "Marginalia", link: "/math/" },
        {
          label: "分析",
          collapsed: false,
          items: [
            {
              label: "Zorich · 数学分析",
              collapsed: true,
              items: [
                { label: "概述", link: "/math/zorich-analysis/" },
                {
                  label: "第一章 · 实数",
                  collapsed: true,
                  items: [
                    { label: "§1 实数公理与确界", link: "/math/zorich-analysis/ch01-real-numbers/s01-axioms" },
                    {
                      label: "习题集", collapsed: true, items: [
                        { label: "习题 1.1.1", link: "/math/zorich-analysis/ch01-real-numbers/ex-1.1.1" },
                      ],
                    },
                  ],
                },
              ],
            },
            { label: "Folland · 实分析", link: "/math/folland-real-analysis/" },
            { label: "Bollobás · 线性分析", link: "/math/bollobas-linear-analysis/" },
            { label: "Stein-Shakarchi · 复分析", link: "/math/stein-shakarchi-complex-analysis/" },
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
                { label: "概述", link: "/math/shiryaev-probability/" },
                {
                  label: "第一章 · 概率空间",
                  collapsed: true,
                  items: [
                    { label: "§1 概率模型的公理化", link: "/math/shiryaev-probability/ch01-probability-space/s01-axioms" },
                  ],
                },
              ],
            },
            { label: "Williams · 概率与鞅", link: "/math/williams-probability/" },
            { label: "Wasserman · 统计学", link: "/math/wasserman-statistics/" },
            { label: "van der Vaart · 渐近统计", link: "/math/van-der-vaart-asymptotics/" },
            { label: "Le Gall · 布朗运动", link: "/math/le-gall-brownian-motion/" },
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
                { label: "概述", link: "/math/munkres-topology/" },
                {
                  label: "第一章 · 集合论与逻辑",
                  collapsed: true,
                  items: [
                    { label: "§1 基本概念", link: "/math/munkres-topology/ch01-set-theory/s01-fundamentals" },
                  ],
                },
              ],
            },
            { label: "Halmos · 朴素集合论", link: "/math/halmos-set-theory/" },
          ],
        },
      ],
      customCss: [
        "./src/styles/custom.css",
        "katex/dist/katex.min.css",
      ],
      components: {
        Head: "./src/components/Head.astro",
        Footer: "./src/components/Footer.astro",
      },
    }),
  ],
  markdown: {
    remarkPlugins: [remarkMath, remarkTikZ],
    rehypePlugins: [rehypeKatex],
  },
});
