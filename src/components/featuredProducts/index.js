import { Container, Col, Row, Image, Button, Card } from "react-bootstrap";
import { ProductItem } from "../utils/ProductItem";
import { imagesMockList } from "../../data/images";
export const FeaturedProducts = () => {
  const images = imagesMockList;
  return (
    <Container fluid className="pt-5">
      <Container>
        <Row>
          <Col className="d-flex justify-content-center">
            <h1>Our featured Products</h1>
          </Col>
        </Row>

        <Col className="text-right">
          <a
            class="btn btn-primary mb-3 mr-1"
            href="#carouselExampleIndicators2"
            role="button"
            data-slide="prev"
          >
            <i class="fa fa-arrow-left"></i>
          </a>
          <a
            class="btn btn-primary mb-3 "
            href="#carouselExampleIndicators2"
            role="button"
            data-slide="next"
          >
            <i class="fa fa-arrow-right"></i>
          </a>
        </Col>

        <Row>
          <Col md="12">
            <div
              id="carouselExampleIndicators2"
              class="carousel slide"
              data-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="row">
                    <div class="col-md-4 mb-3">
                      <ProductItem imageLink={images[0].url} />
                    </div>
                    <div class="col-md-4 mb-3">
                      <ProductItem imageLink={images[1].url} />
                    </div>
                    <div class="col-md-4 mb-3">
                      <ProductItem imageLink={images[2].url} />
                    </div>
                  </div>
                </div>

                <div class="carousel-item">
                  <div class="row">
                    <div class="col-md-4 mb-3">
                      <ProductItem imageLink={images[3].url} />
                    </div>
                    <div class="col-md-4 mb-3">
                      <ProductItem imageLink={images[3].url} />
                    </div>
                    <div class="col-md-4 mb-3">
                      <ProductItem imageLink={images[3].url} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
