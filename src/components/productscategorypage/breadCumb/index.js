import { Container, Col, Row, Breadcrumb } from "react-bootstrap";
import "./style.css";
export const BreadCumbs = (props) => {
  const { breadItems } = props;

  return (
    <Container className="p-5">
      <Breadcrumb className="breadCumbContainer m-0 p-3">
        <Breadcrumb.Item href="/" className="breadCumbItem">
          Home
        </Breadcrumb.Item>
        {breadItems &&
          breadItems.map((el) => {
            return (
              <Breadcrumb.Item
                className="breadCumbItem "
                key={el.id}
                href={el.url}
              >
                {el.item}
              </Breadcrumb.Item>
            );
          })}
      </Breadcrumb>
    </Container>
  );
};
