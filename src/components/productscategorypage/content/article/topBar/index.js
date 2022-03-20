import { Container, Row, Col, Dropdown } from "react-bootstrap";
import "./style.css";
export const TopBar = (props) => {
  return (
    <Container className="topBarContainer">
      <Row>
        <Col md="3"></Col>
        <Col md="6" className="d-flex align-items-center">
          There are {props.productsNumber} products
        </Col>
        <Col md="3" className="d-flex justify-content-end">
          <Dropdown>
            <Dropdown.Toggle variant="default" id="dropdown-basic">
              Sort By:
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Newest</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Oldest</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Price Low to high</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Price High to low</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
    </Container>
  );
};
