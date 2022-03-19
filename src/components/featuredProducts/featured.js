import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Container, Row, Col } from "react-bootstrap";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import image1 from "../../multimedia/images/manmodelimg.jpg";
import "@splidejs/splide/dist/css/splide.min.css";
import MultiActionAreaCard from "./MultiActionCard";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "./featured.css";
import { GetFeatured } from "../../services/product.service";
import { useState, useEffect } from "react";
const Featured = (props) => {
  const [featured, setFeatured] = useState(props.products);
  return (
    <Container fluid className="pt-5">
      <Container>
        <Row>
          <Col className="d-flex justify-content-center">
            <h1>Our featured Products</h1>
          </Col>
        </Row>
        {featured.map((el) => {
          return <h1>abdou</h1>;
        })}
        <Splide
          className="mt-5"
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
            arrows: 2
          }}
        >
          <SplideSlide>
            <MultiActionAreaCard />
          </SplideSlide>
          <SplideSlide>
            <MultiActionAreaCard />
          </SplideSlide>
          <SplideSlide>
            <MultiActionAreaCard />
          </SplideSlide>
        </Splide>
      </Container>
    </Container>
  );
};

export default Featured;
