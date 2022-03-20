import { Container, Col, Row, Button } from "react-bootstrap";
import { imagesMockList } from "../../data/imagesNewArrival";
import { ProductItemTwo } from "../utils/ProductItemtwo";
import { GetNewArrival } from "../../services/product.service";
import "./newArrival.css";
import { useState, useEffect } from "react";
export const NewArrival = (props) => {
  const list = imagesMockList;
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
                <Col key={index} className="mb-4" md="2">
                  <ProductItemTwo element={el} />
                </Col>
              );
            })}
        </Row>
      </Container>
    </Container>
  );
};
