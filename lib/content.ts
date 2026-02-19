import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { ProjectMeta } from "@/lib/types";

const projectsDir = path.join(process.cwd(), "content/projects");

type Frontmatter = Omit<ProjectMeta, "slug">;

export const getProjectSlugs = async () => {
  const files = await fs.readdir(projectsDir);
  return files.filter((file) => file.endsWith(".mdx")).map((file) => file.replace(/\.mdx$/, ""));
};

export const getProjects = async (): Promise<ProjectMeta[]> => {
  const slugs = await getProjectSlugs();
  const projects = await Promise.all(
    slugs.map(async (slug) => {
      const source = await fs.readFile(path.join(projectsDir, `${slug}.mdx`), "utf8");
      const { data } = matter(source);
      return { slug, ...(data as Frontmatter) };
    })
  );

  return projects.sort((a, b) => b.impact - a.impact);
};

export const getProjectBySlug = async (slug: string) => {
  const source = await fs.readFile(path.join(projectsDir, `${slug}.mdx`), "utf8");
  const { content, data } = matter(source);

  const { content: mdxContent } = await compileMDX({
    source: content,
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: "append" }]]
      }
    }
  });

  const headings = content
    .split("\n")
    .filter((line) => line.startsWith("## "))
    .map((line) => {
      const text = line.replace(/^##\s/, "").trim();
      const id = text.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-");
      return { text, id };
    });

  return {
    frontmatter: { slug, ...(data as Frontmatter) },
    content: mdxContent,
    headings
  };
};
