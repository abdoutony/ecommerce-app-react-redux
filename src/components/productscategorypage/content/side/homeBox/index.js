import { Container } from "react-bootstrap";
import "./style.css";
import { connect } from "react-redux";
import { fetchCategories } from "../../../../../actions/ProductActions";
import { useEffect } from "react";
const HomeBox = (props) => {
  useEffect(() => {
    props.fetchCategories();
  }, []);
  return (
    <Container className="homeBoxContainer">
      <div className="homeBoxHeader text-blue">Home</div>
      <div className="homeBoxList">
        {props.categories &&
          props.categories.map((el, index) => {
            return (
              <div key={index} className="homeBoxItem d-flex">
                <div className="itemContent text-blue">{el}</div>
                <div className="itemCheckBox">
                  <input type="checkbox" />
                </div>
              </div>
            );
          })}
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => {
  const { categories } = state.ProductReducer;
  return { categories };
};

export default connect(mapStateToProps, { fetchCategories })(HomeBox);
