import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/index";
import ProductCategoryPage from "./pages/products/categories";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/products">
          <Route path="" element={<ProductCategoryPage />} />
          <Route path=":category">
            <Route path="" element={<ProductCategoryPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
