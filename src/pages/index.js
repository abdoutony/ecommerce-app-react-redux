import { NavigationMenu } from "../components/navbar";
import { HeroSection } from "../components/hero/index";
import Featured from "../components/featuredProducts/featured";
import { About } from "../components/about";
import { Banner } from "../components/banner";
import { NewsLetter } from "../components/newsLetter";
import { NewArrival } from "../components/newArrival";
import { Footer } from "../components/footer";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/ProductActions";
import { useEffect } from "react";
//import { GetFeatured } from "../services/product.service";
const MainPage = (props) => {
  useEffect(() => {
    props.fetchProducts();
  }, []);
  return (
    <>
      <NavigationMenu />
      <HeroSection />
      <About />
      <Featured products={props.products} />
      <Banner />
      <NewArrival />
      <NewsLetter />
      <Footer />
    </>
  );
};
const mapStateToProps = (state) => {
  const { products } = state.ProductReducer;
  return { products };
};
export default connect(mapStateToProps, {
  fetchProducts
})(MainPage);
