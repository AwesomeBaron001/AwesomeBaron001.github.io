export interface CSDNPost {
  title: string;
  link: string;
  pubDate: string;
}

function formatDate(dateStr: string): string {
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return "";
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  } catch {
    return "";
  }
}

export async function fetchCSDNPosts(limit = 5): Promise<CSDNPost[]> {
  try {
    const res = await fetch("https://blog.csdn.net/m0_46464899/rss/list", {
      headers: { "User-Agent": "Mozilla/5.0" },
      // next.js static export: fetched once at build time
      cache: "no-store",
    });
    if (!res.ok) return [];

    const xml = await res.text();
    const items = xml.match(/<item>([\s\S]*?)<\/item>/g) ?? [];

    return items
      .slice(0, limit)
      .map((item) => {
        const title = (
          item.match(/<title><!\[CDATA\[([\s\S]*?)\]\]><\/title>/)?.[1] ??
          item.match(/<title>([\s\S]*?)<\/title>/)?.[1] ??
          ""
        ).trim();

        const link = (
          item.match(/<link>\s*(https?:\/\/[^\s<]+)\s*<\/link>/)?.[1] ??
          item.match(/<guid[^>]*>\s*(https?:\/\/[^\s<]+)\s*<\/guid>/)?.[1] ??
          ""
        ).trim();

        const pubDate = formatDate(
          (item.match(/<pubDate>([\s\S]*?)<\/pubDate>/)?.[1] ?? "").trim()
        );

        return { title, link, pubDate };
      })
      .filter((p) => p.title && p.link);
  } catch {
    return [];
  }
}
