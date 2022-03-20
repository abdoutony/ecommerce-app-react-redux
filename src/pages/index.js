import { NavigationMenu } from "../components/navbar";
import { HeroSection } from "../components/hero/index";
import Featured from "../components/featuredProducts";
import { About } from "../components/about";
import { Banner } from "../components/banner";
//import { NewsLetter } from "../components/newsLetter";
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
      <Featured featured={props.featured} />
      <Banner />
      <NewArrival newArrival={props.newArrival} />

      <Footer />
    </>
  );
};
const mapStateToProps = (state) => {
  const { products, featured, newArrival } = state.ProductReducer;
  return { products, featured, newArrival };
};
export default connect(mapStateToProps, {
  fetchProducts,
})(MainPage);
