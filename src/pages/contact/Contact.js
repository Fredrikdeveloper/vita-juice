import React from 'react'
import PagesText from "../../components/allText/PagesText"
import "../contact/Contact.css"


const Contact = () => {
  const lose = () => {
    alert("Данное время нельзя связаться с администрацией")
  }
  return (
    <div>
      <PagesText info="СВЯЗАТЬСЯ С НАМИ" animation="fade-left" />
      <div className='container'>
        <form className='contact-form'>
          <label>Полное имя*</label>
          <input className='form-control input-val' />
          <label>Адрес электронной почты*</label>
          <input type='email' className='form-control input-val' />
          <label>Номер телефона</label>
          <input type='number' className='form-control input-val' />
          <label>Ваше сообщение</label>
          <textarea placeholder='Оставьте свое сообщение:' className='input-comment'></textarea>
          <div className='checkbox-menu'>
            <input type='checkbox' />
            <h5>Я прочитал и согласен с вашей Политикой конфиденциальности.</h5>
          </div>
          <button onClick={lose}>отправить</button>
        </form>
      </div>
    </div>
  )
}

export default Contact