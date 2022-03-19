import { Container, Col, Row, Button, Image } from "react-bootstrap";

import "./hero.css";
import imagehero from "../../multimedia/images/herobg.png";
export const HeroSection = () => {
  return (
    <Container fluid className="heroSection">
      <Container>
        <Row className="d-flex align-items-center">
          <Col md="7">
            <h1>Welcome to ecommerce website</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </p>
            <Button variant="warning">Browse all products</Button>
          </Col>
          <Col md="5">
            <Image src={imagehero} width="400" alt="hero image" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
