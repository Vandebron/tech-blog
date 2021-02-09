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
  const otherPosts = posts.slice(1);

  return (
    <>
      <Head>
        <title>vandebron.tech</title>
        <meta
          name="Description"
          content="Vandebron Engineering & Data. Leading the renewable energy transition with innovative solutions."
        />
        <meta property="og:title" content="vandebron.tech" />
        <meta
          property="og:description"
          content="Vandebron Engineering & Data. Leading the renewable energy transition with innovative solutions."
        />
        <meta
          property="og:image"
          content={`https://www.vandebron.tech/images/hero.jpg`}
          key="ogimage"
        />
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
                src="images/hero.jpg"
                alt="Solar panels"
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
              <div style={{ cursor: "pointer" }}>
                <BlogCard
                  key={firstPost.slug}
                  title={firstPost.title}
                  image={firstPost.coverImage}
                  imageProps={{
                    aspectRatio: "2:1",
                    alt: firstPost.title,
                  }}
                  description={firstPost.description}
                  date={new Date(firstPost.date)}
                />
              </div>
            </RouterLink>

            <Row>
              {otherPosts.map((post) => {
                const {
                  title,
                  description,
                  date,
                  coverImage,
                  slug,
                } = post.meta;

                return (
                  <RouterLink key={slug} href={slug}>
                    <Col col={12} sm={12} md={6} lg={6}>
                      <div style={{ cursor: "pointer" }}>
                        <BlogCard
                          key={slug}
                          image={coverImage}
                          title={title}
                          description={description}
                          date={new Date(date)}
                          imageProps={{ alt: title }}
                        />
                      </div>
                    </Col>
                  </RouterLink>
                );
              })}
            </Row>
          </Col>

          <Col colr={12} sm={12} md={4} lg={4}>
            <H4 style={{ marginBottom: 20 }}>Links</H4>

            <ProjectCard
              title="Vandebron on Github"
              href="https://github.com/vandebron"
              icon="github"
            />
            <ProjectCard
              title="Windmolen"
              href="https://windmolen.netlify.app/"
              icon="external-link"
            />
            <ProjectCard
              title="Work with us"
              href="https://werkenbij.vandebron.nl/"
              icon="friend"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export function getStaticProps() {
  const directory = "/public/posts/";
  const files = fs.readdirSync(`${process.cwd()}${directory}`);

  const posts = files
    .map((fileName) => composePostMetaData(directory, fileName))
    .sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date));

  return {
    props: {
      posts,
    },
  };
}
