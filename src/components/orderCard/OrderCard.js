import React from "react";
import "../orderCard/OrderCard.css";
import orderIcon1 from "../../images/order-icon1.svg";
import orderIcon2 from "../../images/order-icon2.svg";
import orderIcon3 from "../../images/order-icon3.svg";

const OrderCard = () => {
  return (
    <div className="container order-body">
      <div className="order-card-texts">
        <h3>С картой вы получаете:</h3>
        <div className="icon-cards">
        <div className="icons-and-text" data-aos="fade-up" data-aos-duration="1500">
          <img src={orderIcon1} alt="" />
          <p>Всегда рядом в вашем телефоне</p>
        </div>
        <div className="icons-and-text" data-aos="fade-left" data-aos-duration="1500">
          <img src={orderIcon2} alt="" />
          <p>Участвуй в акциях и получай подарки</p>
        </div>
        <div className="icons-and-text" data-aos="fade-up" data-aos-duration="1500">
          <img src={orderIcon3} alt="" />
          <p>Каждый 5-й напиток бесплатно</p>
        </div>
        </div>
    
        <button className="final-order"><a href="https://www.thevitajuice.com/">получить</a></button>
      </div>
    </div>
  );
};

export default OrderCard;
