import { Fragment } from "react";
import {BrowserRouter as Routes,Route } from "react-router-dom";
import CategoryProducts from "./app/Pages/Products/CategoryProducts";
import Contact from "./app/Pages/Contact";
import Home from "./app/Pages/HomePage/Home";
import PageNotFound from "./app/Pages/PageNotFound";
import AllProducts from "./app/Pages/Products/AllProducts";
import SingleProductDetails from "./app/Pages/Products/ProductDetails/SingleProductDetails";
import Cart from "./app/Pages/Cart";
import { BrowserRouter as Router } from "react-router-dom/cjs/react-router-dom.min";
function App() {
  return (
    <Fragment>
      <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="category/:categoryName" element={<CategoryProducts />} />
        <Route exact path="products" element={<AllProducts />} />
        <Route exact path="product/:productId" element={<SingleProductDetails />} />
        <Route exact path="contact" element={<Contact />} />
        <Route exact path="cart" element={<Cart />} />
        <Route exact path="*" element={<PageNotFound />} />
      </Routes>
      </Router>
    </Fragment>
  );
}

export default App;

