import Head from "next/head";
import { Container, H2 } from "@vandebron/windmolen";
import Markdown from "../components/Markdown";

const ABOUT = `
![About Vandebron](images/technology-white-2.png)

### Our mission is clear

#### 100% renewable energy as soon as possible  

To provide truly sustainable, renewable energy, produced locally in the Netherlands and void from dubious compensation systems from shady origins. With this roaring mission Vandebron introduced itself to the energy market in 2014. A refreshing message which was welcomed with open arms. Today, over 200.000 households have chosen Vandebron as their energy supplier.

Since then, the energy market has changed. Simply producing and selling renewable energy proves to be no longer sufficient. With the growing share of sustainable energy on the grid, it is becoming increasingly important that customers can have access to sustainable energy 100% of the time. Even when the sun is not shining, or the wind is not blowing.

In this evolving energy market, the role of Vandebron shifts as well. No longer are we the rebel of the market; more and more are we becoming the guide. We are the first Dutch energy supplier evolving into an energy tech company, who will lead in smart innovations the energy transition so desperately needs.

100% renewable energy 100% of the time. That is the future.
`;

export default function About() {
  return (
    <>
      <Head>
        <title>About vandebron.tech</title>
        <meta
          name="Description"
          content="Vandebron Technology. Leading the renewable energy transition with innovative solutions."
        />
      </Head>
      <Container medium>
        <H2>About Vandebron</H2>
        <Markdown>{ABOUT}</Markdown>
      </Container>
    </>
  );
}
