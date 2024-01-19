import path from "path";
import fs from "fs";
import matter from "gray-matter";
import {unified} from 'unified'
import rehypeStringify from 'rehype-stringify'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import toml from 'toml'

const postsDirectory = "src/content/blog";

interface PostData {
  slug: string;
  contentHtml: string;
  title?: string;
  date?: string;
  description?: string;
}

export async function getPostData(slug: string): Promise<PostData> {
  const fullPath = path.join(postsDirectory, `${slug}/index.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents, {
    engines: {
      toml: toml.parse.bind(toml),
    }
  });

  // Use remark to convert markdown into HTML string
  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the slug and contentHtml
  return {
    slug,
    contentHtml,
    ...matterResult.data,
  };
}

export function generateStaticParams() {
  return fs.readdirSync(postsDirectory, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => ({
      slug: dirent.name
    }));
}

export default async function Post({ params }: { params: { slug: string } }) {
  const {slug} = params;
  const data = await getPostData(slug);
  const { title, date } = data
  return (
    <div className='bg-black text-white'>
      <div className="container mx-auto -mt-20 pt-20 md:-mt-16 md:pt-16 pb-6">
        <h1 className="text-4xl">{title}</h1>
        <div>
          <span className="text-sm">{date}</span>
        </div>
        <article className="prose lg:prose-xl max-w-full prose-invert">
          <div dangerouslySetInnerHTML={{ __html: data.contentHtml }} />
        </article>
      </div>
    </div>
  );
}
