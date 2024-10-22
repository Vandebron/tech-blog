import {
  Container,
  Row,
  Col,
  Link,
  Navigation,
  Icon,
  Flex,
  Span,
} from "@vandebron/windmolen";
import { useRouter } from "next/router";
import RouterLink from "next/link";
import Logo from "./Logo";

const links = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about" },
  { name: "vandebron.nl", url: "https://vandebron.nl", external: true },
];

export default function Header() {
  const router = useRouter();
  const selected = links.findIndex(({ url }) => router.pathname === url);

  return (
    <>
      <Container
        as="header"
        style={{
          paddingTop: 30,
          paddingBottom: 30,
          marginBottom: 30,
        }}
      >
        <Row alignItems="center" justifyContent="between">
          <Col col={12} sm={12} smAuto={false} mdAuto lgAuto>
            <RouterLink href="/">
              <div>
                <Logo />
              </div>
            </RouterLink>
          </Col>
          <Col col={12} sm={12} smAuto={false} mdAuto lgAuto>
            <Flex smJustifyContent="between">
              <Navigation
                onSelectLink={(linkId) => {
                  const { url, external } = links[linkId];

                  return external
                    ? window.open(url, "_blank")
                    : router.push(url);
                }}
                selected={selected >= 0 ? selected : 0}
                links={links}
                style={{
                  marginRight: 25,
                }}
              />

              <div>
                <Link
                  href="https://github.com/vandebron/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ marginRight: 10 }}
                >
                  <Icon name="github" />
                  <span className="visually-hidden">Vandebron on Github</span>
                </Link>
                <Link
                  href="https://dev.to/vandebron/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ marginRight: 10 }}
                >
                  <Icon name="devto" />
                  <span className="visually-hidden">Vandebron on Dev.to</span>
                </Link>
                <Link
                  href="https://medium.com/vandebron/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon name="medium" />
                  <span className="visually-hidden">Vandebron on Medium</span>
                </Link>
              </div>
            </Flex>
          </Col>
        </Row>
      </Container>
    </>
  );
}
