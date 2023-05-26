import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { CartProvider } from "react-use-cart";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./Context";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";

Aos.init({
  duration: 2500,
})

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartProvider>
    <BrowserRouter>
      <ContextProvider>
        <App />
      </ContextProvider>
    </BrowserRouter>
  </CartProvider>
);
