export const GetProductsToShowByCategory = (props) => {
  return props.products.filter((el) => el.category === props.category);
};
