import { Container, Col, Row, Image } from "react-bootstrap";
import { Button } from "@mui/material";
import "./hero.css";
import imagehero from "../../multimedia/images/manmodelimg-removebg-preview.png";
export const HeroSection = () => {
  return (
    <Container fluid className="heroSection">
      <Container>
        <Row className="d-flex align-items-center">
          <Col md="7" sm="12" style={{ padding: "20px" }}>
            <h1>
              Welcome to ecommerce <span className="text-orange">website</span>
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </p>
            <Button
              variant="contained"
              href="/products"
              className="text-white"
              color="warning"
            >
              Browse all products
            </Button>
          </Col>
          <Col md="5" className="d-none d-md-block">
            <Image src={imagehero} width="500" alt="hero image" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
