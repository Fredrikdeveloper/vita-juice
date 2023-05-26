import React, { useEffect, useState } from "react";
import { useCart } from "react-use-cart";
import Slider from "react-slick";
import { GetFunc } from "../../module/api";
import ResponsiveModal from "../errorModal/ErrorModal";
import "../slickCard/Card.css"
const Card = () => {

  const { addItem, removeItem, getItem } = useCart()

  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
        }
      },
    ]
  };
  const [filterProduct, setFilterProduct] = useState([])
  useEffect(() => {
    GetFunc("/products").then(data => {
      const res = data.slice(0, 3)
      setFilterProduct(res)
    })
  }, [])
  return (
    <div className="container slick-body">
      <Slider {...settings}>
        {filterProduct.map((el) => {
          return (
            <div data-aos-duration="1000" data-aos="fade-down" key={el.id} className="product-card">
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
      </Slider>

    </div>
  )
}

export default Card