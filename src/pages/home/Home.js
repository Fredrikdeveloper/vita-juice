import React from "react";
import Header from "../../components/header/Header";
import Section from "../../components/section/Section";
import SectionMap from "../../components/sectionMap/SectionMap";
import OrderCard from "../../components/orderCard/OrderCard";
import Card from "../../components/slickCard/Card";
import HomePageText from "../../components/allHomeText/HomePageText";
import "./Home.css";

const HomePage = () => {
  return (
    <div>
      <Header />
      <HomePageText info="наша продукция" animation="fade-right" />
      <Section />
      <HomePageText info="Хиты продаж" animation="fade-left" />
      <Card />
      <HomePageText info="Доставка и оплата" animation="fade-right" />
      <SectionMap />
      <HomePageText info="Наша система лояльности" animation="fade-left" />
      <OrderCard />
    </div>
  );
};

export default HomePage;
