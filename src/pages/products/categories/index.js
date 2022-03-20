import { NavigationMenu } from "../../../components/navbar";
import { TopBanner } from "../../../components/productscategorypage/topBanner/topBanner";
import { BreadCumbs } from "../../../components/productscategorypage/breadCumb";
import { ProductsCategoryContent } from "../../../components/productscategorypage/content";
import { buildBreadCumbsItems } from "../../../helper/buildBreadCumbsItems";
import {Footer} from "../../../components/footer/index";
const ProductCategoryPage = (props) => {
  const breadItems = buildBreadCumbsItems();

  return (
    <>
      <NavigationMenu />
      <TopBanner />
      <BreadCumbs breadItems={breadItems} />
      <ProductsCategoryContent category={breadItems[1].item} />
      <Footer />
    </>
  );
};

export default ProductCategoryPage;
