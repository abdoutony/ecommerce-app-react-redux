const initialState = {
  products: [],
  featured: [],
  newArrival: [],
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

    default:
      return state;
  }
};

export default ProductReducer;
