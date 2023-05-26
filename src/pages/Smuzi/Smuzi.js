import React, { useEffect, useState } from "react";
import ResponsiveModal from "../../components/errorModal/ErrorModal";
import { useCart } from "react-use-cart";
import { GetFunc } from "../../module/api";
import PagesText from "../../components/allText/PagesText"

const Smuzi = () => {
  const { addItem, getItem, removeItem } = useCart();

  const [filterProduct, setFilterProduct] = useState([])

  useEffect(() => {
    GetFunc("/products").then(data => {
      const res = data.filter(smuzi => smuzi.category === "smuzi")
      setFilterProduct(res)
    })
  }, [])

  return (
    <div>
      <PagesText info="смузи" animation="fade-left" />
      <div id="smuzi" className="all-card-styles">

        {
          filterProduct.map((item) => {
            return (
              <div key={item.id} className="product-card" data-aos="fade-up" data-aos-duration="1000">

                <div className="product-card-img">
                  <img src={item.url} alt="" />
                </div>
                <div className="product-card-body">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <h4>{item.price}₽</h4>
                  <div className="product-button">
                    <ResponsiveModal elId={item.id} />
                  </div>
                  <div className="product-button">
                    {!getItem(item.id) ? (
                      <button className="add-zakaz" onClick={() => addItem(item)}>
                        добавить в корзину
                      </button>
                    ) : (
                      <button
                        className="delete-zakaz"
                        onClick={() => removeItem(item.id)}
                      >
                       удалить из корзину
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )
          })
        }
        {/* {filterProduct.map((el) => {
          return (

            <div key={item.id} className="product-card" data-aos="fade-up" data-aos-duration="1000">
              
              <div className="product-card-img">
                <img src={item.url} alt="" />
              </div>
              <div className="product-card-body">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <h4>{item.price}₽</h4>
                <div className="product-button">
                  <ResponsiveModal elId={item.id} />
                </div>
                <div className="product-button">
                  {!getItem(item.id) ? (
                    <button className="add-zakaz" onClick={() => addItem(el)}>
                      Add to Card
                    </button>
                  ) : (
                    <button
                      className="delete-zakaz"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove Item
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })} */}
      </div>
    </div>
  )
}

export default Smuzi