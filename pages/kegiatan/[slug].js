import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

export async function getStaticPaths() {
  const files = fs.readdirSync("contents/kegiatan");
  const paths = files.map((filename) => ({
    params: { slug: filename.replace(".md", "") },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const filePath = path.join("contents/kegiatan", `${params.slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);
  const processedContent = await remark().use(html).process(content);
  return {
    props: {
      frontmatter: {
        ...data,
        date: new Date(data.date).toLocaleDateString("id-ID", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }),
      },
      content: processedContent.toString(),
    },
  };
}

export default function Kegiatan({ frontmatter, content }) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{frontmatter.title}</h1>
      <p className="text-sm text-gray-600">{frontmatter.date}</p>
      <Image
        src={frontmatter.image}
        alt={frontmatter.title}
        width={800}
        height={400}
        className="my-4"
      />
      <div className="prose max-w-none">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
}
