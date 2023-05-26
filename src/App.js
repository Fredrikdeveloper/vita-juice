import React from "react";
import HomePage from "./pages/home/Home";
import Basket from "./pages/basket/Basket";
import Contact from "./pages/contact/Contact";
import AdminPrivat from "./pages/adminPanel/Admin";
import Franchise from "./pages/franchise/Franchise";
import Salates from "./pages/Salates/Salate";
import Smuzi from "./pages/Smuzi/Smuzi";
import Lassi from "./pages/Lassi/Lassi";
import Food from "./pages/naturalFood/Food";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import About from "./pages/aboutUs/About";
import Store from "./pages/store/Store";
import PageNotFound from "./pages/pageError/PageNotFound";
import AdminLogin from "./pages/adminPanel/AdminLogin";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/salates" element={<Salates />} />
        <Route path="/smuzi" element={<Smuzi />} />
        <Route path="/food" element={<Food />} />
        <Route path="/lassi" element={<Lassi />} />
        <Route path="/franchise" element={<Franchise />} />
        <Route path="/adminPrivat" element={<AdminPrivat />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/store" element={<Store />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
