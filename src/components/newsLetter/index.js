import { Container, Col, Row, Button } from "react-bootstrap";

export const NewsLetter = () => {
  return (
    <Container fluid className="newLetterContainer">
      <Container>
        <Row>
          <Col className="d-flex justify-container-fluid">
            <h1>Recive our latest offers</h1>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
