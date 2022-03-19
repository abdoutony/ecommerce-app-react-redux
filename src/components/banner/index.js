import { Container, Col, Row, Button, Image } from "react-bootstrap";
import "./banner.css";
import bannerImg from "../../multimedia/images/manmodelimg-removebg-preview.png";
export const Banner = () => {
  return (
    <Container fluid className="mt-5 bannerContainer">
      <Container className="innerContainer">
        <Row>
          <Col
            md="7"
            className="text-white d-flex align-items-center justify-content-center"
          >
            <Col>
              <span>Don't miss the chance</span>
              <h2>Sales 50% off</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <Button variant="warning">See all the offers</Button>
            </Col>
          </Col>
          <Col md="5">
            <Image src={bannerImg} />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
