import { Container, Col, Row, Image } from "react-bootstrap";
import { Button } from "@mui/material";
import "./banner.css";
import bannerImg from "../../multimedia/images/manmodelimg-removebg-preview.png";
export const Banner = () => {
  return (
    <Container fluid className="mt-5 bannerContainer">
      <Container className="innerContainer">
        <Row>
          <Col
            md="7"
            sm="12"
            className="text-white d-flex align-items-center justify-content-center"
          >
            <Col>
              <span>Don't miss the chance</span>
              <h2>Sales 50% off</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <Button variant="contained" color="warning">
                See all the offers
              </Button>
            </Col>
          </Col>
          <Col md="5" className="d-none d-md-block">
            <Image src={bannerImg} width="400" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
