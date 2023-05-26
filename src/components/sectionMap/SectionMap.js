import React from "react";
import Map from "../map/Map";
import "../sectionMap/SectionMap.css";
import men from "../../images/men.png";
import cloud from "../../images/cloud.png";
import imgCircle from "../../images/circle-icon1.svg";
import imgCircle2 from "../../images/circle-icon2.svg";
import imgCircle3 from "../../images/circle-icon3.svg";
import imgCircle4 from "../../images/circle-icon4.svg";
import imgCircle5 from "../../images/circle-icon5.svg";

const SectionMap = () => {
  return (
    <div className="map-body ">
      <div className="map-menu">
        <h2 className="circle-all-white-text"  data-aos="fade-right" data-aos-duration="1500">Зона доставки</h2>
        <div className="circles">
          <div className="circle-card">
            <div data-aos-duration="1000" data-aos="fade-down" className="circle-menu">
              <span className="circle-yellow"></span>
            </div>
            <div className="circle-body">
              <h4>
                Минимальная сумма <br /> заказа 500 руб.
              </h4>
            </div>
          </div>
          <div className="circle-card">
            <div data-aos-duration="1000" data-aos="fade-down" className="circle-menu">
              <span className="circle-orange"></span>
            </div>
            <div className="circle-body">
              <h4>
              Средняя сумма <br /> заказа 1500 руб.
              </h4>
            </div>
          </div>
          <div className="circle-card">
            <div data-aos-duration="1000" data-aos="fade-down" className="circle-menu">
              <span className="circle-pink"></span>
            </div>
            <div className="circle-body">
              <h4>
              Максимальная сумма <br /> заказа 2000 руб.
              </h4>
            </div>
          </div>
        </div>
        <Map />
        <h2 className="circle-all-white-text" data-aos="fade-left" data-aos-duration="1500">варианты оплаты</h2>
        <div data-aos-duration="1000" data-aos="fade-up" className="circles">
          <div className="circle-card">
            <div className="circle-menu">
              <img src={imgCircle} alt="" />
            </div>
            <div className="circle-body">
              <h4>
                Минимальная сумма <br /> заказа 500 руб.
              </h4>
              <p>
                Оплата наличными <br /> c курьеру или при <br /> получении
                заказа
              </p>
            </div>
          </div>
          <div className="circle-card">
            <div className="circle-menu">
              <img src={imgCircle2} alt="" />
            </div>
            <div className="circle-body">
              <h4>
              Средняя сумма <br /> заказа 1500 руб.
              </h4>
              <p>
                Оплата банковской <br /> картой курьеру при <br /> получение
                заказа
              </p>
            </div>
          </div>
          <div className="circle-card">
            <div className="circle-menu">
              <img src={imgCircle3} alt="" />
            </div>
            <div className="circle-body">
              <h4>
              Максимальнаясумма <br /> заказа 2000 руб.
              </h4>
              <p>
                Безопасная и удобная <br /> оплата заказ на сайте.
              </p>
            </div>
          </div>
        </div>
        <h2 className="circle-all-white-text" data-aos="fade-right" data-aos-duration="1500">способы доставки</h2>
        <div data-aos-duration="1000" data-aos="fade-up" className="circles">
          <div className="circle-card">
            <div className="circle-menu">
              <img src={imgCircle4} alt="" />
            </div>
            <div className="circle-body">
              <h4>
                Минимальная сумма <br /> заказа 500 руб.
              </h4>
              <p>
                Вы оплачиваете только <br /> заказ, доставка — <br /> бесплатно
              </p>
            </div>
          </div>
          <div data-aos-duration="1000" data-aos="fade-up" className="circle-card">
            <div className="circle-menu">
              <img src={imgCircle5} alt="" />
            </div>
            <div className="circle-body">
              <h4>
                Минимальная сумма <br /> заказа 500 руб.
              </h4>
              <p>
                Можете сами забрать <br /> заказ, указав это при <br />{" "}
                оформлении заказа.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="map-img" data-aos="fade-left" data-aos-duration="1500">
        <img className="cloudes img-fluid" src={cloud} alt="" />
        <img className="men-img img-fluid" src={men} alt="" />
      </div>
    </div>
  );
};

export default SectionMap;
