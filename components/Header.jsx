import {
  Container,
  Row,
  Col,
  Link,
  Navigation,
  Icon,
  Flex,
} from "@vandebron/windmolen";
import { useRouter } from "next/router";
import RouterLink from "next/link";
import Logo from "./Logo";

const links = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about" },
];

export default function Header() {
  const router = useRouter();

  return (
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
                const { url } = links[linkId];

                return router.push(url);
              }}
              selected={0}
              links={links}
              style={{
                marginRight: 25,
              }}
            />

            <div>
              <Link style={{ marginRight: 15 }}>
                <Icon name="github" />
              </Link>
              <Link>
                <Icon name="twitter" />
              </Link>
            </div>
          </Flex>
        </Col>
      </Row>
    </Container>
  );
}