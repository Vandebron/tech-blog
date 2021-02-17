import fs from "fs";
import {
  Container,
  Block,
  Row,
  Col,
  H1,
  H2,
  H3,
  H4,
  Paragraph,
  Image,
  Button,
  BoxShadow,
  Table,
} from "@vandebron/windmolen";
import Head from "next/head";

import Logo from "../../components/Logo";
import ChallengeDetail from "../../components/ChallengeDetail";

import { composePostMetaData } from "../../utils";

const REGISTER_LINK = "https://forms.gle/rigzes89tJA2dWcu7";

const SCHEDULE = [
  {
    description: "Opening & hacking 🚀",
    activities: [
      { time: "09:00 - 10:00", description: "Opening ceremony" },
      { time: "10:00 - 11:30", description: "Team formation (optional)" },
      { time: "16:30 - 17:30", description: "Day closing 🍻" },
    ],
  },
  {
    description: "Full day of hacking 🚀",
    activities: [
      { time: "09:30 - 10:00", description: "Day start ☕ (optional)" },
      { time: "12:00 - 12:30", description: "Lunch & energizer" },
      { time: "16:30 - 18:00", description: "Inspiration sessions 🎤" },
    ],
  },
  {
    description: "Finishing up & presentations 🏆",
    activities: [
      { time: "09:30 - 10:00", description: "Day start ☕" },
      { time: "12:00 - 12:30", description: "Lunch & energizer" },
      {
        time: "16:30 - 17:30",
        description: "Presentations, prizes & closing 🍻",
      },
    ],
  },
];

export default function GreentechHackathon({ challenges }) {
  return (
    <>
      <Head>
        <title>GreenTech Hackathon 2021 - vandebron.tech</title>
        <meta name="Description" content="Vandebron GreenTech Hackathon" />
        <meta
          property="og:title"
          content="Vandebron GreenTech Hackathon - 31 March, 1-2 April 2021"
        />
        <meta
          property="og:description"
          content="Climate change is on of the many pressing challenges our society is facing currently. At Vandebron we want continue trying to find ways to tackle this immense challenge. That’s why we’re organizing a 3-day GreenTech hackathon from March 31st to April 2nd."
        />
        <meta
          property="og:image"
          content={`https://www.vandebron.tech/images/greentech-hackathon/hero.jpg`}
          key="ogimage"
        />
      </Head>

      <div className="home">
        <div className="hero">
          <div className="hero-overlay">
            <Container>
              <Row
                as="header"
                alignItems="center"
                justifyContent="between"
                style={{
                  paddingTop: 30,
                  paddingBottom: 30,
                  marginBottom: 30,
                }}
              >
                <Col col={12} sm={12} smAuto={false} mdAuto lgAuto>
                  <Logo inverted />
                </Col>
              </Row>

              <Row alignItems="center" justifyContent="start">
                <Col
                  col={12}
                  sm={12}
                  md={8}
                  lg={8}
                  alignItems="start"
                  style={{
                    textAlign: "left",
                  }}
                >
                  <H4
                    style={{
                      color: "white",
                    }}
                  >
                    31 MARCH, 1-2 APRIL
                  </H4>
                  <H1
                    style={{
                      color: "white",
                      textShadow: "2px 2px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    GreenTech Hackathon 2021
                  </H1>
                  <Button
                    as="a"
                    href={REGISTER_LINK}
                    style={{ background: "green", borderColor: "green" }}
                  >
                    REGISTER
                  </Button>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <Container>
          <Row
            alignItems="center"
            style={{
              paddingTop: 60,
              paddingBottom: 60,
            }}
          >
            <Col
              col={12}
              sm={12}
              md={12}
              lg={6}
              alignItems="start"
              style={{
                textAlign: "left",
              }}
            >
              <H3>Why this hackathon?</H3>
              <Paragraph>
                Climate change is on of the many pressing challenges our society
                is facing currently. At Vandebron we want continue trying to
                find ways to tackle this immense challenge. That’s why we’re
                organizing a 3-day GreenTech hackathon from March 31st to April
                2nd.
              </Paragraph>
              <Paragraph>
                During the hackathon we will focus on solutions in fields such
                as wildlife protection, renewable energy, and other digital
                solutions. Eager to contribute? This is your chance: we're
                calling all ambitious people, from developers to marketing
                specialists and from social media experts to designers, to join
                us! During three days, in a hybrid format (online and
                in-person), you'll get the chance to work on challenges from our
                partners and have access to all their technology and knowledge.
              </Paragraph>
              <Paragraph>
                We'd love to have you on board, registration is now open via the
                button below (deadline Friday March 19th).
              </Paragraph>
              <Paragraph>
                <Button as="a" href={REGISTER_LINK}>
                  REGISTER
                </Button>
              </Paragraph>
            </Col>
            <Col
              col={12}
              sm={12}
              md={12}
              lg={6}
              alignItems="start"
              style={{
                textAlign: "left",
              }}
            >
              {challenges.map(({ meta }) => (
                <BoxShadow className="image-stack">
                  <Image
                    src={meta.hero}
                    alt={meta.company}
                    aspectRatio="16:9"
                  />
                </BoxShadow>
              ))}
            </Col>
          </Row>
          <Row
            alignItems="center"
            justifyContent="center"
            style={{
              paddingTop: 60,
            }}
          >
            <H3>The Challenges</H3>
          </Row>
          <Row
            alignItems="center"
            style={{
              paddingBottom: 60,
            }}
          >
            {challenges.map((challenge) => (
              <Col
                col={12}
                sm={12}
                md={6}
                lg={4}
                alignItems="center"
                justifyContent="center"
                style={{
                  textAlign: "left",
                  marginBottom: 30,
                }}
              >
                <ChallengeDetail
                  {...challenge.meta}
                  content={challenge.content}
                  registerLink={REGISTER_LINK}
                />
              </Col>
            ))}
          </Row>
          <Row
            alignItems="center"
            justifyContent="center"
            style={{
              paddingTop: 60,
            }}
          >
            <H3>Schedule</H3>
          </Row>
          <Row
            alignItems="flex-start"
            style={{
              paddingBottom: 60,
            }}
          >
            {SCHEDULE.map(({ description, activities }, i) => (
              <Col
                col={12}
                sm={12}
                md={6}
                lg={4}
                alignItems="center"
                justifyContent="center"
                style={{
                  textAlign: "left",
                  marginBottom: 30,
                }}
              >
                <Block
                  withShadow
                  small
                  style={{ padding: 30, minHeight: 300, width: "100%" }}
                >
                  <H4>{`Day ${i + 1}`}</H4>
                  <Paragraph fontSize="body-small">{description}</Paragraph>
                  <br />
                  <Table style={{ width: "100%", fontSize: 16 }}>
                    <Table.Tbody style={{ borderTop: "1px solid #eaeaea" }}>
                      {activities.map(({ time, description: activity }, i) => (
                        <Table.Row>
                          <Table.Cell style={{ paddingLeft: 0 }}>
                            {time}
                          </Table.Cell>
                          <Table.Cell style={{ paddingRight: 0 }}>
                            {activity}
                          </Table.Cell>
                        </Table.Row>
                      ))}
                    </Table.Tbody>
                  </Table>
                </Block>
              </Col>
            ))}
          </Row>
          <Row
            alignItems="center"
            style={{
              paddingTop: 60,
            }}
          >
            <H3>Other partners</H3>
          </Row>
          <Row
            alignItems="center"
            style={{
              paddingBottom: 60,
            }}
          >
            <Col col={4} sm={4} md={2} lg={2} alignItems="start">
              <a href="https://klimaatroute.nl" target="_blank">
                <Image src="/images/greentech-hackathon/logo-klimaatroute.jpg" />
              </a>
            </Col>
            <Col col={4} sm={4} md={2} lg={2} alignItems="start">
              <a href="https://felyx.com" target="_blank">
                <Image src="/images/greentech-hackathon/logo-felyx.jpg" />
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export function getStaticProps() {
  const directory = "/public/greentech-hackathon/";
  const files = fs.readdirSync(`${process.cwd()}${directory}`);

  const challenges = files.map((fileName) =>
    composePostMetaData(directory, fileName)
  );

  return {
    props: {
      challenges: challenges,
    },
  };
}
