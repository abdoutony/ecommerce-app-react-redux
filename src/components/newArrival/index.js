import { Container, Col, Row, Button } from "react-bootstrap";
import { imagesMockList } from "../../data/imagesNewArrival";
import { ProductItemTwo } from "../utils/ProductItemtwo";
import "./newArrival.css";
export const NewArrival = () => {
  const list = imagesMockList;
  return (
    <Container fluid className="newArrivalContainer mt-5">
      <Container>
        <Row className="d-flex justify-content-center">
          <h1 className="text-center">New Arrival</h1>
        </Row>
        <Row className="mt-5 ">
          {list.map((el, index) => {
            return (
              <Col key={index} className="mb-4" md="2">
                <ProductItemTwo imageLink={list[index].url} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </Container>
  );
};
