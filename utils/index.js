import fs from "fs";
import matter from "gray-matter";

export function composePostMetaData(fileName) {
  const markdownWithMetadata = fs
    .readFileSync(`${process.cwd()}/public/posts/${fileName}`)
    .toString();

  const { data, content } = matter(markdownWithMetadata);

  // Convert post date to format: Month day, Year
  const formattedDate = data?.createdAt?.toLocaleDateString("nl-NL", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return {
    content,
    meta: {
      slug: `blog/${fileName.replace(".md", "")}`,
      title: data.title,
      description: data.description,
      formattedDate: formattedDate || "",
      date: data.createdAt.toString(),
      coverImage: data.coverImage,
      author: data.author,
    },
  };
}
