import axios from "axios";

export const fetchProducts = () => {
  return (dispatch) => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        if (res.status === 200) {
          dispatch({ type: "FETCH_PRODUCTS", payload: res });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
