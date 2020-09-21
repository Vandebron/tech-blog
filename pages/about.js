import Head from "next/head";
import { Container, H2, Paragraph } from "@vandebron/windmolen";

export default function About() {
  return (
    <>
      <Head>
        <title>About vandebron.tech</title>
        <meta
          name="Description"
          content="Vandebron Engineering & Data. eading the renewable energy transition with innovative solutions."
        />
      </Head>
      <Container>
        <H2>About Vandebron</H2>
        <Paragraph>This is a page about the green tech innovator</Paragraph>
      </Container>
    </>
  );
}
