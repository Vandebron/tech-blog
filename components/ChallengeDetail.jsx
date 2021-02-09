import { useState } from "react";
import { H4, Paragraph, Button, Card, Link } from "@vandebron/windmolen";

// Import the Modal and Bootstrap
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import Markdown from "./Markdown";

export default function ChallengeDetail({
  logo,
  hero,
  title,
  company,
  content,
  registerLink,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ width: "100% " }}>
      <Card image={logo} style={{ width: "100%" }} imageAsBackground>
        <H4>{company}</H4>
        <Paragraph>{title}</Paragraph>
        <Button onClick={() => setIsOpen(true)}>Read more</Button>
      </Card>
      <Modal show={isOpen} onHide={() => setIsOpen(false)} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>{`Challenge: ${title}`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-hero">
            <img src={hero} />
          </div>

          <Markdown>{content}</Markdown>
        </Modal.Body>
        <Modal.Footer>
          <Button as="a" href={registerLink}>
            REGISTER
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
