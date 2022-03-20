import { Button } from "@mui/material";
export const NewArrivalItem = (props) => {
  const { element } = props;
  return (
    <Button
      href="https://github.com"
      className="col"
      style={{ width: "100%" }}
      target="_blank"
    >
      <div className="card col" style={{ width: "100%" }}>
        <img
          className="img-fluid"
          alt="100%x280"
          style={{ maxHeight: "100px" }}
          src={element.image}
        />
        <div className="card-body">
          <h5 className="text-blue text-lowercase">{element.category}</h5>
          <p className="card-text text-blue">{element.price}$</p>
        </div>
      </div>
    </Button>
  );
};
