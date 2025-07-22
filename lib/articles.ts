// lib/articles.ts
import fs from "fs";
import path from "path";

export const getArticleBySlug = (slug: string) => {
  const filePath = path.join(process.cwd(), "data/article", `${slug}.json`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(fileContent);
};
