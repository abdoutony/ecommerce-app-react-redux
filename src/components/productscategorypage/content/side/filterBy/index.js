import { Container, Row, Col } from "react-bootstrap";
import { Button } from "@mui/material";
import "./style.css";
const FilterBy = () => {
  return (
    <Container className="filterByContainer mt-5">
      <div className="filterByHeader text-blue">Filter By</div>
      <div className="filterByContent">
        <Button variant="contained" color="warning">
          Clear all
        </Button>
      </div>
      <div className="filterBySize">
        <h6 className="text-blue">Size:</h6>
        <div className="filterByInput">
          <input type="checkbox" name="size" />
          <label style={{ marginLeft: "10px" }}>S</label>
        </div>
        <div className="filterByInput">
          <input type="checkbox" name="size" />
          <label style={{ marginLeft: "10px" }}>M</label>
        </div>
        <div className="filterByInput">
          <input type="checkbox" name="size" />
          <label style={{ marginLeft: "10px" }}>L</label>
        </div>
      </div>
      <hr style={{ margin: "15px" }} />
      <div className="filterByColor">
        <h6 className="text-blue">Color:</h6>
        <div className="filterByInput">
          <input
            type="checkbox"
            className="inputColor"
            name="color"
            value="#00f"
          />
          <label style={{ marginLeft: "10px" }}>Red</label>
        </div>

        <div className="filterByInput">
          <input
            type="checkbox"
            className="inputColor"
            name="color"
            value="#00f"
          />
          <label style={{ marginLeft: "10px" }}>Green</label>
        </div>
        <div className="filterByInput">
          <input
            type="checkbox"
            className="inputColor"
            name="color"
            value="#00f"
          />
          <label style={{ marginLeft: "10px" }}>Blue</label>
        </div>
      </div>
    </Container>
  );
};

export default FilterBy;
