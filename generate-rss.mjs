import fs from 'fs';
import path from 'path';
import MarkdownIt from 'markdown-it';
import composePostMetaData from "./utils/index.mjs";

const md = new MarkdownIt();
md.set({ html: true });

const blogPostsRssXml = () => {
    const directory = "/public/posts/";
    const files = fs.readdirSync(`${process.cwd()}${directory}`);

    let latestPostDate = '';
    let rssItemsXml = '';

    const posts = files
        .map((fileName) => composePostMetaData(directory, fileName))
        .sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date))

    posts.forEach(({ content, meta }) => {
        const { title, description, date, slug, coverImage } = meta;
        const blogDomain = 'https://vandebron.tech';

        const postDate = new Date(date).toISOString();

        const postHref = `${blogDomain}/${slug}`;

        if (!latestPostDate || postDate > Date.parse(latestPostDate)) {
            latestPostDate = postDate;
        }

        rssItemsXml += `
      <item>
        <title><![CDATA[${title}]]></title>
        <link>${postHref}</link>
        <pubDate>${postDate}</pubDate>
        <guid isPermaLink="false">${postHref}</guid>
        <description>
        <![CDATA[${description}]]>
        </description>
        <content:encoded>
        <![CDATA[${md.render(content)}]]>
        </content:encoded>
        <media:content
            url="${blogDomain}/${coverImage}"
        />
    </item>`;
    });
    return {
        rssItemsXml,
        latestPostDate,
    };
};

const getRssXml = () => {
    const { rssItemsXml, latestPostDate } = blogPostsRssXml();

    return `<?xml version="1.0" ?>
<rss 
    xmlns:dc="http://purl.org/dc/elements/1.1/" 
    xmlns:content="http://purl.org/rss/1.0/modules/content/" 
    xmlns:atom="http://www.w3.org/2005/Atom" 
    xmlns:media="http://search.yahoo.com/mrss/" 
    version="2.0"
>
    <channel>
        <title><![CDATA[Vandebron Engineering & Data]]></title>
        <link>https://vandebron.tech</link>
        <description>
          <![CDATA[Leading the renewable energy transition with innovative solutions]]>
        </description>
        <language>en</language>
        <lastBuildDate>${latestPostDate}</lastBuildDate>
        ${rssItemsXml}
    </channel>
  </rss>`;
};

async function generateRSS() {
    const processedXml = getRssXml();

    const staticOutputPath = path.join(process.cwd(), 'public');

    let filePath = `${staticOutputPath}/rss.xml`;
    fs.writeFile(filePath, processedXml, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`File ${filePath} written successfully`);
        }
    });
}

// kick it all off
generateRSS();