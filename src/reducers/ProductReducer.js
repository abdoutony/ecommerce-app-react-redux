const initialState = {
  products: [],
  featured: [],
  newArrival: [],
  categories: [],
};

const ProductReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "FETCH_PRODUCTS":
      return {
        ...state,
        products: payload.products,
        featured: payload.featured,
        newArrival: payload.newArrival,
      };
    case "FETCH_CATEGORIES":
      return {
        ...state,
        categories: payload.categories,
      };

    default:
      return state;
  }
};

export default ProductReducer;
