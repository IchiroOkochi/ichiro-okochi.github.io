import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

const projectsDir = path.join(process.cwd(), "content/projects");

const getPosition = (message: string) => {
  const match = message.match(/(\d+):(\d+)/);
  return match ? `:${match[1]}:${match[2]}` : "";
};

const validateProjectMdx = async (fileName: string) => {
  const filePath = path.join(projectsDir, fileName);
  const source = await fs.readFile(filePath, "utf8");
  const { content } = matter(source);

  try {
    await compileMDX({
      source: content,
      options: {
        parseFrontmatter: false,
        mdxOptions: {
          rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: "append" }]]
        }
      }
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    const relativePath = path.relative(process.cwd(), filePath);
    const position = getPosition(message);
    throw new Error(`MDX validation failed: ${relativePath}${position}\n${message}`);
  }
};

const validateAll = async () => {
  const files = await fs.readdir(projectsDir);
  const mdxFiles = files.filter((file) => file.endsWith(".mdx"));

  for (const file of mdxFiles) {
    await validateProjectMdx(file);
  }

  console.log(`Validated ${mdxFiles.length} MDX project file(s).`);
};

validateAll().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});
