import React, { useContext } from "react";
import { Context } from "../../Context";
import { useCart } from "react-use-cart";
import axios from "axios";
import "../basket/Basket.css";
import PagesText from "../../components/allText/PagesText";
const Basket = () => {
  const { items, isEmpty, updateItemQuantity, removeItem } = useCart();
  const { del } = useContext(Context);

  let total = 0;

  const postTest = () => {
    axios.post(
      `https://api.telegram.org/bot6071102322:AAF5FduMpfsKctl9eyR7Q7WoqnsY0paiVdI/sendMessage?chat_id=346122699&text=${encodeURIComponent(
        `<b>Details:</b>
    
        <b>The operation was completed successfully!</b>
        <b>our couriers will contact you soon!</b>
        <b> Call Center: +998 99 722 35 62 </b>
        ${items
          .map((item) => {
            return `<b>${item.name}</b> ${item.quantity} x ${item.price} ₽ = ${item.quantity}`;
          })
          .join("")}  
          
          <b>Total:</b> ${total} ₽`
      )}&parse_mode=html`
    )
  };

  return (
    <div>
         <PagesText info="корзина" animation="fade-right" />
      {isEmpty ? <div className="korzinka_null">Корзина Пусто</div> : null}
      {items.map((item) => {
        const priceCount = item.quantity * item.price;
        total += priceCount;

        if (item.quantity >= 1) {
          return (
            <div className="basket-card" key={item.id}>
              <div className="basket-img">
                <img src={item.url} alt="" />
              </div>
              <div className="basket-text">
                <h1>{item.name}</h1>
              </div>
              <div className="basket-button">
                <button
                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <p>{item.quantity}</p>
                <button
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
              <div className="trash-bag">
                <i
                  onClick={() => removeItem(item.id)}
                  class="fa-regular fa-trash-can"
                ></i>
                <p>{priceCount} ₽</p>
              </div>
            </div>
          );
        } else {
          removeItem(item.id);
        }
      })}
      { !isEmpty ? (
        <>
          <div className="basket-price">
            <h2>сумма заказа:</h2>
            <h2>{total} ₽</h2>
            
          </div>
          <div className="circle-menu">
          <button 
        className="buy-button"
        onClick={() => {
          postTest() || 
           alert("Успешно куплено")
          ||
          del();
          localStorage.clear();
        }}
        type="button"
      >
        {" "}
        Купить
      </button>
          </div>
          <div className="delete-all-card-parent">
            <button
              className="delete-all-card"
              onClick={(e) => {
                del();
                localStorage.clear();
              }}
            >
              Удалить всё
            </button>
          </div>
        </>
      ) : (
        console.log("hato")
      )}
    </div>
  );
};

export default Basket;
