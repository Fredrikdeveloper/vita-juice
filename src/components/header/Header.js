import React from 'react'
import "../header/Header.css"
import Slider from "react-slick";
import test2 from "../../images/test2.jpg"
import test3 from "../../images/test3.jpg"
import test4 from "../../images/test4.jpg"

const Header = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className='header-body'>
        <Slider {...settings}>
            <div className='header-img'><img className='head-img' src={test2} alt="" /></div>
            <div className='header-img'><img className='head-img' src={test3} alt="" /></div>
            <div className='header-img'><img className='head-img' src={test4} alt="" /></div>
        </Slider>
    </div>
  )
}

export default Header