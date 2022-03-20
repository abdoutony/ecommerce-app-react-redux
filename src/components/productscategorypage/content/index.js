import { Container, Col, Row } from "react-bootstrap";
import ProductCategoryArticle from "./article";
import { ProductCategorySide } from "./side";
export const ProductsCategoryContent = (props) => {
  return (
    <Container>
      <Row>
        <Col md="3">
          <ProductCategorySide />
        </Col>
        <Col md="9">
          <ProductCategoryArticle category={props.category} />
        </Col>
      </Row>
    </Container>
  );
};
