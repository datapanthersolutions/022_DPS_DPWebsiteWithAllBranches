// app/blog/[slug]/page.tsx
import fs from "fs/promises";
import path from "path";
import ReadBlogPost from "@/components/ReadBlogPost";

export async function generateStaticParams() {
    const dir = path.join(process.cwd(), "data/blog");
    const files = await fs.readdir(dir);

    return files.map((file) => ({
        slug: file.replace(".json", ""),
    }));
}

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const resolvedParams = await params;
    const filePath = path.join(
        process.cwd(),
        "data/blog",
        `${resolvedParams.slug}.json`
    );
    const fileContent = await fs.readFile(filePath, "utf-8");
    const data = JSON.parse(fileContent);

    return <ReadBlogPost data={data} />;
}
