const initialState = {
  products: []
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "FETCH_PRODUCTS":
      return {
        ...state,
        products: payload.data
      };

    default:
      return state;
  }
};
