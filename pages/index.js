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
        <title>vandebron.tech</title>
        <meta
          name="Description"
          content="Vandebron Engineering & Data. eading the renewable energy transition with innovative solutions."
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
              <Image aspectRatio="2:1" src="images/hero.jpg" alt="Solar panels" />
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
                          imageProps={{ alt: title }}
                        />
                      </>
                    </Col>
                  </RouterLink>
                );
              })}
            </Row>
          </Col>

          <Col colr={12} sm={12} md={4} lg={4}>
            <H4 style={{ marginBottom: 20 }}>Projects</H4>

            <ProjectCard title="Vandebron on Github" icon="github" />
            <ProjectCard title="Windmolen" icon="external-link" />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export function getStaticProps() {
  const files = fs.readdirSync(`${process.cwd()}/public/posts`);

  const posts = files.map((fileName) => composePostMetaData(fileName));

  return {
    props: {
      posts,
    },
  };
}
