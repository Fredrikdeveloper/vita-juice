import React from 'react'
import "../section/Section.css"
import girl from "../../images/girl.jpg"
import drinkOne from "../../images/drink-1.png"
import drinkTwo from "../../images/drink-2.png"
import drinkThree from "../../images/drink-3.png"
import drinkFour from "../../images/drink-4.png"
import drinkFive from "../../images/drink-5.png"
import drinkSix from "../../images/drink-6.png"
import drinkSeven from "../../images/drink-7.png"
import drinkEight from "../../images/drink-8.png"

const Section = () => {
  return (
    <div className='Section-body'>
      <div className='section-img-menu' data-aos="fade-left"  data-aos-duration="1000">
        <img src={girl} alt="" />
      </div>
      <div className='images-group' data-aos="fade-right"  data-aos-duration="1000">
        <div className='section-card'>
          <div className='section-card-img'>
           <img className='img-fluid' src={drinkOne} alt=""  />
          </div>
          <div className='section-card-body'>
             <a href="/smuzi#smuzi" >соки</a>
          </div>
        </div>
        <div className='section-card'>
          <div className='section-card-img'>
          <img className='img-fluid' src={drinkTwo} alt="" />
          </div>
          <div className='section-card-body'>
           <a href="/smuzi#smuzi" >миксы</a>
          </div>
        </div>
        <div className='section-card'>
          <div className='section-card-img'>
          <img className='img-fluid' src={drinkThree} alt="" />
          </div>
          <div className='section-card-body'>
          <a href="/smuzi#smuzi" >смузи</a>
          </div>
        </div>
        <div className='section-card'>
          <div className='section-card-img'>
          <img className='img-fluid' src={drinkFour} alt="" />
          </div>
          <div className='section-card-body'>
             <a href="/smuzi#smuzi" >детоксы</a>
          </div>
        </div>
        <div className='section-card'>
          <div className='section-card-img'>
          <img className='img-fluid' src={drinkFive} alt="" />
          </div>
          <div className='section-card-body'>
             <a href="/lassi#lassi" >ласси</a>
          </div>
        </div>
        <div className='section-card'>
          <div className='section-card-img'>
          <img className='img-fluid' src={drinkSix} alt="" />
          </div>
          <div className='section-card-body'>
          <a href="/lassi#lassi" >боулы</a>
          </div>
        </div>
        <div className='section-card'>
          <div className='section-card-img'>
          <img className='img-fluid' src={drinkSeven} alt="" />
          </div>
          <div className='section-card-body'>
          <a href="/salates#salate" >салаты</a>
          </div>
        </div>
        <div className='section-card'>
          <div className='section-card-img'>
          <img className='img-fluid' src={drinkEight} alt="" />
          </div>
          <div className='section-card-body'>
          <a href="/food#naturalfood" >здоровая еда</a>
          </div>
        </div>
      </div>    
    </div>
  )
}

export default Section