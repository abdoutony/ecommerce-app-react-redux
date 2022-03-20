import { Card, Button } from "react-bootstrap";

export const ProductItemTwo = (props) => {
  const { element } = props;
  return (
    <div className="card">
      <img
        className="img-fluid"
        alt="100%x280"
        style={{ maxHeight: "100px" }}
        src={element.image}
      />
      <div className="card-body">
        <h5>{element.category}</h5>
        <p className="card-text">{element.price}$</p>
      </div>
    </div>
  );
};
