import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Container, Row, Col } from "react-bootstrap";
import "@splidejs/splide/dist/css/splide.min.css";
import ProductCardOne from "../utils/ProductCardOne";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "./featured.css";
const Featured = (props) => {
  return (
    <Container fluid className="pt-5">
      <Container>
        <Row>
          <Col className="d-flex justify-content-center">
            <h1>Our featured Products</h1>
          </Col>
        </Row>

        <Splide
          className="mt-5 d-none d-md-block"
          renderControls={() => (
            <div class="splide__arrows">
              <button
                class="splide__arrow splide__arrow--prev bg-none"
                style={{ transform: "scale(-1,1)" }}
              >
                <ArrowBackIosIcon className="icon-left" />
                <ArrowBackIosIcon />
              </button>
              <button class="splide__arrow splide__arrow--next bg-none">
                <ArrowForwardIosIcon className="icon-right" />
                <ArrowForwardIosIcon />
              </button>
            </div>
          )}
          options={{
            type: "loop",
            perPage: 3,
            perMove: 1,
            arrows: 2,
          }}
        >
          {props.featured.map((el, index) => {
            return (
              <SplideSlide key={index}>
                <ProductCardOne element={el} fullWidth={false} />
              </SplideSlide>
            );
          })}
        </Splide>

        <Splide
          className="mt-5 d-block d-sm-block d-md-none d-lg-none"
          renderControls={() => (
            <div class="splide__arrows">
              <button
                class="splide__arrow splide__arrow--prev bg-none"
                style={{ transform: "scale(-1,1)" }}
              >
                <ArrowBackIosIcon className="icon-left" />
                <ArrowBackIosIcon />
              </button>
              <button class="splide__arrow splide__arrow--next bg-none">
                <ArrowForwardIosIcon className="icon-right" />
                <ArrowForwardIosIcon />
              </button>
            </div>
          )}
          options={{
            type: "loop",
            perPage: 1,
            perMove: 1,
            arrows: 2,
          }}
        >
          {props.featured.map((el, index) => {
            return (
              <SplideSlide key={index}>
                <ProductCardOne element={el} fullWidth={true} />
              </SplideSlide>
            );
          })}
        </Splide>
      </Container>
    </Container>
  );
};

export default Featured;
