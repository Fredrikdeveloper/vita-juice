import React, {  useState, useEffect } from "react";
import PagesText from "../../components/allText/PagesText";
import "./Salate.css";

import { useCart } from "react-use-cart";
import ResponsiveModal from "../../components/errorModal/ErrorModal";
import { GetFunc } from "../../module/api";

const Salates = () => {
  const { addItem, getItem, removeItem } = useCart();
  const [filterProduct, setFilterProduct] = useState([])


  useEffect(() => {
    GetFunc("/products").then(data => {
      const res = data.filter(smuzi => smuzi.category === "salate")
      setFilterProduct(res)
    })
  }, [])

  return (
    <div>
      <PagesText info="салаты" animation="fade-right" />
      <div id="salate" className="all-card-styles">
        {filterProduct.map((el) => {
          return (
            <div key={el.id} className="product-card" data-aos="fade-up" data-aos-duration="1000">
              <div className="product-card-img">
                <img src={el.url} alt="" />
              </div>
              <div className="product-card-body">
                <h3>{el.name}</h3>
                <p>{el.description}</p>
                <h4>{el.price}₽</h4>
                <div className="product-button">
                <ResponsiveModal className="modal-button-link" elId={el.id} />
                </div>
                 <div className="product-button">
                  {!getItem(el.id) ? (
                    <button className="add-zakaz" onClick={() => addItem(el)}>
                      добавить в корзину
                    </button>
                  ) : (
                    <button
                      className="delete-zakaz"
                      onClick={() => removeItem(el.id)}
                    >
                      удалить из корзину
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Salates;
