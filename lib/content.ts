import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";
import type { TrackId } from "./tracks";

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  track: TrackId;
}

export interface Post extends PostMeta {
  contentHtml: string;
}

export type ResourceType = "use-case" | "technical-doc";

export interface ResourceMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  track: TrackId;
  type: ResourceType;
  illustrative: boolean;
}

export interface Resource extends ResourceMeta {
  contentHtml: string;
}

const blogDir = path.join(process.cwd(), "content/blog");
const resourcesDir = path.join(process.cwd(), "content/resources");

function slugsIn(dir: string): string[] {
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

async function renderMarkdown(content: string): Promise<string> {
  const processed = await remark().use(remarkGfm).use(remarkHtml).process(content);
  return processed.toString();
}

export function getAllPosts(): PostMeta[] {
  return slugsIn(blogDir)
    .map((slug) => {
      const file = fs.readFileSync(path.join(blogDir, `${slug}.md`), "utf8");
      const { data } = matter(file);
      return {
        slug,
        title: data.title as string,
        date: data.date as string,
        excerpt: data.excerpt as string,
        tags: (data.tags as string[]) ?? [],
        track: data.track as TrackId,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const file = fs.readFileSync(path.join(blogDir, `${slug}.md`), "utf8");
  const { data, content } = matter(file);
  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    excerpt: data.excerpt as string,
    tags: (data.tags as string[]) ?? [],
    track: data.track as TrackId,
    contentHtml: await renderMarkdown(content),
  };
}

export function getAllResources(): ResourceMeta[] {
  return slugsIn(resourcesDir)
    .map((slug) => {
      const file = fs.readFileSync(path.join(resourcesDir, `${slug}.md`), "utf8");
      const { data } = matter(file);
      return {
        slug,
        title: data.title as string,
        date: data.date as string,
        excerpt: data.excerpt as string,
        tags: (data.tags as string[]) ?? [],
        track: data.track as TrackId,
        type: data.type as ResourceType,
        illustrative: Boolean(data.illustrative),
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getResourceBySlug(slug: string): Promise<Resource> {
  const file = fs.readFileSync(path.join(resourcesDir, `${slug}.md`), "utf8");
  const { data, content } = matter(file);
  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    excerpt: data.excerpt as string,
    tags: (data.tags as string[]) ?? [],
    track: data.track as TrackId,
    type: data.type as ResourceType,
    illustrative: Boolean(data.illustrative),
    contentHtml: await renderMarkdown(content),
  };
}
