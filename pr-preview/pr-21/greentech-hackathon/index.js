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
import {
  FAQ,
  SCHEDULE,
  REGISTER_LINK_HACKATHON,
  REGISTER_LINK_EVENT,
} from "../../public/greentech-hackathon/config/config";

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
                    href={REGISTER_LINK_HACKATHON}
                    style={{
                      background: "green",
                      borderColor: "green",
                      marginRight: 20,
                      marginBottom: 20,
                    }}
                  >
                    REGISTER HACKATHON
                  </Button>
                  <Button
                    as="a"
                    href={REGISTER_LINK_EVENT}
                    variant="button-alternate"
                  >
                    REGISTER EVENT
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
                Climate change is one of the many pressing challenges our
                society is currently facing. At Vandebron we want to continue
                trying to find ways to tackle this immense challenge. That’s why
                we’re organizing a 3-day GreenTech hackathon from March 31st to
                April 2nd.
              </Paragraph>
              <Paragraph>
                During this free online event, we're trying to find
                technological solutions to problems in wildlife conservation and
                renewable energy. And you can join us! In these three days, you
                get the opportunity to work on challenges from our partners,
                access their technology and knowledge, and you'll get the chance
                to win unique prizes. Besides, on April 1st (no joke) different
                speakers will share their expertise and experiences with you.
              </Paragraph>
              <Paragraph>
                We'd love to have you on board, registration for both the
                hackathon and speaker event are now open via the button below
                (deadline Wednesday March 24th).
              </Paragraph>
              <Paragraph>
                <Button
                  as="a"
                  href={REGISTER_LINK_HACKATHON}
                  style={{ marginRight: 20, marginBottom: 20 }}
                >
                  REGISTER HACKATHON
                </Button>
                <Button as="a" href={REGISTER_LINK_EVENT}>
                  REGISTER EVENT
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
                  registerLink={REGISTER_LINK_HACKATHON}
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
            justifyContent="center"
            style={{
              paddingTop: 60,
            }}
          >
            <H3>Frequently Asked Questions</H3>
          </Row>
          <Row
            alignItems="flex-start"
            style={{
              paddingBottom: 60,
            }}
          >
            {FAQ.map(({ title, description }, i) => (
              <Col col={12} alignItems="start">
                <H4>{title}</H4>
                <Paragraph>{description}</Paragraph>
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
            <H3>Other partners</H3>
          </Row>
          <Row
            alignItems="center"
            justifyContent="center"
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
              <a href="https://evexperience.nl/" target="_blank">
                <Image src="/images/greentech-hackathon/logo-ev-experience.jpg" />
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

  const challenges = files
    .filter((file) => file.endsWith(".md"))
    .map((fileName) => composePostMetaData(directory, fileName));

  return {
    props: {
      challenges: challenges,
    },
  };
}
