import React from "react";
import "../franchise/Franchise.css";
import franchiseImg from "../../images/fr-img.webp";
import PagesText from "../../components/allText/PagesText"
const Franchise = () => {
  return (
    <div>
      <PagesText info="Франшиза" animation="fade-left" />
      <div className="franchise-body">
        <div className="franchise-image" data-aos="fade-right" data-aos-duration="1500">
          <img className="img-fluid" src={franchiseImg} alt="" />
        </div>
        <div className="franchise-text">
          <p data-aos="fade-left" data-aos-duration="1500" className="franchise-text-paragraf">
            Конечно, идея продавать свежевыжатые соки в торговых центрах не нова.
            В России <br /> их любят и пьют. Аудитория у этого продукта широкая –
            от мам с детьми до <br /> брутальных молодых людей. Каждый из нас
            видел в ТРЦ довольно много торговых <br /> точек с соками, но почти
            всегда это no name бренды с незамысловатым дизайном и <br /> без
            стандартов приготовления продукции. <br />
            <br />
            Мы по-новому взглянули на концепцию подачи самих соков: расширили{" "}
            <br /> ассортимент предлагаемых продуктов, разработали стандарты для
            сотрудников, <br /> фирменную упаковку и рекламные материалы,
            поддерживаем активность в <br /> социальных сетях. Мы превратили
            обычный остров с соками в полноценный бренд.
          </p>
          <div className="franchise-button">
            <button data-aos="fade-up"><a href="https://www.thevitajuice.com/">подробнее</a></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Franchise;
