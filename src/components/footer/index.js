import { Container, Row, Col } from "react-bootstrap";
import "./footer.css";
export const Footer = () => {
  return (
    <Container fluid className="footerContainer text-white mt-5">
      <Container>
        <Row>
          <Col md="4">
            <Col>
              <h3>
                Ecomm<span className="text-warning">Plateform</span>
              </h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <p>
                <span className="ml-3 mr-3">
                  <a href="#" className="text-white" target="_blank">
                    <i className="fab fa-facebook"></i>
                  </a>
                </span>
                <span className="ml-3 mr-3">
                  <a href="#" className="text-white" target="_blank">
                    <i className="fab fa-twitter"></i>
                  </a>
                </span>
                <span className="ml-3 mr-3">
                  <a href="#" className="text-white" target="_blank">
                    <i className="fab fa-instagram"></i>
                  </a>
                </span>
              </p>
            </Col>
          </Col>
          <Col md="8"></Col>
        </Row>
      </Container>
    </Container>
  );
};
