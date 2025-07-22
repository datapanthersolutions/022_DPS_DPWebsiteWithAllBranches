
// app/article/[slug]/page.tsx
import fs from "fs/promises";
import path from "path";
import ReadArticle from "@/components/readArticle";

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), "data/article");
  const files = await fs.readdir(dir);

  return files.map(file => ({
    slug: file.replace(".json", ""),
  }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params; // ✅ Await params directly
  const filePath = path.join(process.cwd(), "data/article", `${resolvedParams.slug}.json`);
  const fileContent = await fs.readFile(filePath, "utf-8");
  const data = JSON.parse(fileContent);

  return <ReadArticle data={data} />;
}