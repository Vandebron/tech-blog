import Head from "next/head";
import { Container, H2 } from "@vandebron/windmolen";
import Markdown from "../components/Markdown";

const ABOUT = `
![About Vandebron](images/hero.jpg)

#### Vandebron is a greentech innovator leading the renewable energy transition with innovative solutions through engineering and data.

With more than 250 local sustainable energy sources spread throughout the Netherlands and with more than 200,000 connected households, we are well on the way to achieve our mission. At Vandebron we do things different. It is not just about dreams: we really want to bring change. We want to bring change by making the world more sustainable and we are all working hard to achieve that. We believe that in order to be able to provide good, green and sustainable energy, we need an energetic team of 150 colleagues with a clear opinion and positive vibes. We say it the way it is and we trust each other. With our pro-activity mindset we get to work and tackle problems. And we also enjoy working hard together very much. We ensure an ambitious working atmosphere, a delicious organic lunch, fresh coffee, lots of freedom and responsibility, parties on our roof terrace and a great enthusiastic team to work together with to achieve our mission!
`;

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
        <Markdown>{ABOUT}</Markdown>
      </Container>
    </>
  );
}
