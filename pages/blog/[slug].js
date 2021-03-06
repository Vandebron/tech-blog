import fs from "fs";
import Head from "next/head";
import Markdown from "../../components/Markdown";

import {
  Container,
  Row,
  Col,
  Image,
  H2,
  Text,
  Paragraph,
  H1,
  Link,
} from "@vandebron/windmolen";
import { composePostMetaData } from "../../utils";

export default function BlogPosts({ post }) {
  const {
    title,
    description,
    coverImage,
    author,
    formattedDate,
    imageSource,
  } = post.meta;

  const image = require(`../../public/${coverImage}`);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="Description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content={`https://www.vandebron.tech/${coverImage}`}
          key="ogimage"
        />
      </Head>

      <Container>
        <Row>
          <Col col={12}>
            <H2>{title}</H2>
          </Col>
          <Col col={12}>
            <Paragraph>
              <Text>{`By ${author} on ${formattedDate}`}</Text>
            </Paragraph>
          </Col>
        </Row>

        <Row>
          <Col col={12}>
            <Paragraph>
              <Image
                aspectRatio="2:1"
                src={image}
                srcSet={image.srcSet}
                alt={title}
              />

              {imageSource && <Link href={imageSource}>Image source</Link>}
            </Paragraph>
          </Col>
        </Row>

        <Row style={{ marginBottom: 60 }}>
          <Col col={12}>
            <Markdown>{post.content}</Markdown>
          </Col>
        </Row>
      </Container>
    </>
  );
}

const DIRECTORY = "/public/posts/";

// This function gets called at build time and generates the list of blog posts
export async function getStaticPaths() {
  const files = fs.readdirSync(`${process.cwd()}${DIRECTORY}`);

  // Get the paths we want to pre-render based on posts
  const paths = files.map((filename) => {
    return {
      params: { slug: filename.replace(".md", "") },
    };
  });

  // We'll pre-render only these paths at build time.
  return { paths, fallback: false }; // redirect other routes to a 404
}

export function getStaticProps({ params }) {
  const post = composePostMetaData(DIRECTORY, `${params.slug}.md`);

  return {
    props: {
      post,
    },
  };
}
