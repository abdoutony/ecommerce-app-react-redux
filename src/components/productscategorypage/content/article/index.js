import { TopBar } from "./topBar";
import { ProductsList } from "./productsList";
import { fetchProducts } from "../../../../actions/ProductActions";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
const ProductCategoryArticle = (props) => {
  useEffect(() => {
    props.fetchProducts();
  }, []);
  const [productsNumber, setProductsNumber] = useState(0);
  return (
    <>
      <TopBar productsNumber={productsNumber} />
      <ProductsList
        products={props.products}
        setProductsNumber={setProductsNumber}
        category={props.category}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  const { products } = state.ProductReducer;
  return { products };
};
export default connect(mapStateToProps, { fetchProducts })(
  ProductCategoryArticle
);
