import { Container, Row, Col, Text } from "@vandebron/windmolen";
import RouterLink from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer
      style={{
        paddingTop: 30,
        paddingBottom: 30,
        backgroundColor: "#363639",
      }}
    >
      <Container>
        <Row alignItems="center" style={{ marginBottom: 15 }}>
          <Col>
            <RouterLink href="/">
              <div>
                <Logo inverted />
              </div>
            </RouterLink>
          </Col>
        </Row>
        <Row alignItems="center">
          <Col>
            <Text inverted>&copy; Vandebron</Text>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
