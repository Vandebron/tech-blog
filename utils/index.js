import fs from "fs";
import matter from "gray-matter";

export function composePostMetaData(directory, fileName) {
  const markdownWithMetadata = fs
    .readFileSync(`${process.cwd()}${directory}${fileName}`)
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
      ...data,
      slug: `blog/${fileName.replace(".md", "")}`,
      formattedDate: formattedDate || "",
      date: data?.createdAt?.toString() || "",
      createdAt: data?.createdAt?.toString() || ""
    },
  };
}
