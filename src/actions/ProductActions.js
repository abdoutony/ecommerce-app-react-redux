import { products, featured, newArrival } from "../data";
export const fetchProducts = () => {
  return (dispatch) => {
    dispatch({
      type: "FETCH_PRODUCTS",
      payload: { products, featured, newArrival },
    });
  };
};
