import { Card, Button } from "react-bootstrap";

export const ProductItem = (props) => {
  const { imageLink } = props;
  return (
    <div className="card">
      <img className="img-fluid" alt="100%x280" src={imageLink} />
      <div className="card-body">
        <h4 className="card-title">Special title treatment</h4>
        <p className="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
      </div>
    </div>
  );
};
