import { Container, Col, Row, Image, Button } from "react-bootstrap";
import heroImg from "../../multimedia/images/herobg.png";
export const About = () => {
  return (
    <Container className="mt-4 pt-4" fluid>
      <Container>
        <Row className="d-flex align-items-center">
          <Col md="6">
            <Image src={heroImg} width="400" />
          </Col>
          <Col md="6">
            <Col className="d-flex justify-content-start">
              <Col>
                <h1>About us</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries
                </p>
                <Button variant="warning">Visite our Blog</Button>
              </Col>
            </Col>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
