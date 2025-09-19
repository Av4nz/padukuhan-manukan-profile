import fs from "fs";
import path from "path";
import matter from "gray-matter";

const kegiatanDir = path.join(process.cwd(), "contents/kegiatan");

export function getAllKegiatan() {
  const files = fs.readdirSync(kegiatanDir);

  const kegiatan = files.map((filename) => {
    const filePath = path.join(kegiatanDir, filename);
    const fileContents = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContents);

    return {
      slug: filename.replace(/\.md$/, ""),
      title: data.title,
      date: data.date,
      image: data.image,
      description: content,
    };
  });

  return kegiatan.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getLatestKegiatan(limit = 4) {
  return getAllKegiatan().slice(0, limit);
}
