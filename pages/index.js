import {
  Container,
  BlogCard,
  Row,
  Col,
  H4,
  Paragraph,
  BoxShadow,
  Image,
} from "@vandebron/windmolen";
import fs from "fs";
import RouterLink from "next/link";
import Head from "next/head";
import { composePostMetaData } from "../utils";
import ProjectCard from "../components/ProjectCard";

export default function Home({ posts }) {
  const firstPost = posts[0].meta;

  return (
    <>
      <Head>
        <title>Vandebron.tech</title>
      </Head>
      <Container style={{ marginBottom: 60 }}>
        <Row alignItems="center" style={{ marginBottom: 60 }}>
          <Col col={12} sm={12} md={6} lg={6}>
            <H4>Vandebron Engineering & Data</H4>
            <Paragraph>
              Leading the renewable energy transition with innovative solutions
            </Paragraph>
          </Col>
          <Col col={12} sm={12} md={6} lg={6}>
            <BoxShadow style={{ width: "100% " }}>
              <Image
                aspectRatio="2:1"
                src="https://images.ctfassets.net/l0vbdd13d5ww/5tuHsOqIglGsi1qBh0ueVH/e6df4475e1f7e2e44895ba1243acba79/DJI_0030.jpg"
              />
            </BoxShadow>
          </Col>
        </Row>

        <Row justifyContent="between">
          <Col col={12} sm={12} md={7} lg={7}>
            <Paragraph>
              <H4>Latest posts</H4>
            </Paragraph>

            <RouterLink href={firstPost.slug}>
              <div>
                <BlogCard
                  key={firstPost.slug}
                  image={firstPost.coverImage}
                  title={firstPost.title}
                  imageProps={{ aspectRatio: "2:1" }}
                  description={firstPost.description}
                  date={new Date(firstPost.date)}
                />
              </div>
            </RouterLink>

            <Row>
              {posts.map((post) => {
                const {
                  title,
                  description,
                  date,
                  coverImage,
                  slug,
                } = post.meta;

                return (
                  <RouterLink href={slug}>
                    <Col col={12} sm={12} md={6} lg={6}>
                      <>
                        <BlogCard
                          key={slug}
                          image={coverImage}
                          title={title}
                          description={description}
                          date={new Date(date)}
                        />
                      </>
                    </Col>
                  </RouterLink>
                );
              })}
            </Row>
          </Col>

          <Col colr={12} sm={12} md={4} lg={4}>
            <H4 style={{ marginBottom: 20 }}>Open source</H4>

            <ProjectCard title="Project 1" icon="external-link" />
            <ProjectCard title="Code examples" icon="github" />
            <ProjectCard title="Test it" icon="github" />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export function getStaticProps() {
  const files = fs.readdirSync(`${process.cwd()}/assets/posts`);

  const posts = files.map((fileName) => composePostMetaData(fileName));

  return {
    props: {
      posts,
    },
  };
}
