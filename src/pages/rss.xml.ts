import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context: any) {
  const docs = await getCollection("docs");
  const sorted = docs
    .filter((d) => d.data.title)
    .sort((a, b) => {
      const da = a.data.updated || a.data.date || new Date(0);
      const db = b.data.updated || b.data.date || new Date(0);
      return +new Date(db) - +new Date(da);
    });

  return rss({
    title: "Marginalia",
    description: "数学经典教材习题解答与学习笔记",
    site: context.site || "https://150.158.54.129",
    items: sorted.map((d) => ({
      title: d.data.title,
      description: d.data.description || "",
      link: `/math/${d.id}/`,
      pubDate: d.data.updated || d.data.date || new Date(),
    })),
    customData: `<language>zh-CN</language>`,
  });
}
