import { Card, Button } from "react-bootstrap";

export const ProductItemTwo = (props) => {
  const { imageLink } = props;
  return (
    <div className="card">
      <img className="img-fluid" alt="100%x280" src={imageLink} />
      <div className="card-body">
        <h5>Product name</h5>
        <p className="card-text">5000 da</p>
      </div>
    </div>
  );
};
