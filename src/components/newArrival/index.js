import { Container, Col, Row } from "react-bootstrap";
import { NewArrivalItem } from "./NewArrivalItem";
import { NewArrivalItemSmallScreen } from "./NewArrivalItemSmallScreen";
import "./newArrival.css";
export const NewArrival = (props) => {
  return (
    <Container fluid className="newArrivalContainer mt-5">
      <Container>
        <Row className="d-flex justify-content-center">
          <h1 className="text-center">New Arrival</h1>
        </Row>
        <Row className="mt-5 ">
          {props.newArrival &&
            props.newArrival.map((el, index) => {
              return (
                <>
                  <Col
                    key={index}
                    className="mb-4 d-none d-md-block d-lg-block"
                    md="2"
                  >
                    <NewArrivalItem element={el} />
                  </Col>
                  <Col
                    key={index}
                    className="mb-4 d-block d-md-none d-lg-none"
                    sm="12"
                  >
                    <NewArrivalItemSmallScreen element={el} />
                  </Col>
                </>
              );
            })}
        </Row>
      </Container>
    </Container>
  );
};
