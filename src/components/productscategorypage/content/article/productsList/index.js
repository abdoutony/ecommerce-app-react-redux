import ProductCardOne from "../../../../utils/ProductCardOne";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect } from "react";
import { GetProductsToShowByCategory } from "../../../../../services/product.service";
export const ProductsList = (props) => {
  const productsToShow = GetProductsToShowByCategory(props);
  useEffect(() => {
    props.category
      ? props.setProductsNumber(productsToShow.length)
      : props.setProductsNumber(props.products.length);
  }, [props]);
  return (
    <Container fluid>
      <Row>
        {props.category
          ? productsToShow.map((el) => {
              return (
                <Col key={el.id} md="5">
                  <ProductCardOne element={el} fullWidth={true} />
                </Col>
              );
            })
          : props.products.map((el) => {
              return (
                <Col key={el.id} md="5">
                  <ProductCardOne element={el} fullWidth={true} />
                </Col>
              );
            })}
      </Row>
    </Container>
  );
};
