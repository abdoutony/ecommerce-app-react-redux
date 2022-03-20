import { products, featured, newArrival, categories } from "../data";
export const fetchProducts = () => {
  return (dispatch) => {
    dispatch({
      type: "FETCH_PRODUCTS",
      payload: { products, featured, newArrival },
    });
  };
};

export const fetchCategories = () => {
  return (dispatch) => {
    dispatch({ type: "FETCH_CATEGORIES", payload: { categories } });
  };
};
