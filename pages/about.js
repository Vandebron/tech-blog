import Head from "next/head";
import { Container, H2, Paragraph } from "@vandebron/windmolen";

export default function About() {
  return (
    <>
      <Head>
        <title>About Vandebron.tech</title>
      </Head>
      <Container>
        <H2>About Vandebron</H2>
        <Paragraph>This is a page about the green tech innovator</Paragraph>
      </Container>
    </>
  );
}
