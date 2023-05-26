import React from "react";
import { Link } from "react-router-dom";
import "../footer/Footer.css";

const Footer = () => {
  return (
    <footer>
      <h2>правовая информация</h2>
      <div className="footer-line1">
        <ul>
          <li>Все права пренадлежат</li>
          <li>ООО «Компания Вита Джус»</li>
          <li>ИНН 12456789/ОГРН123456789833</li>
        </ul>
        <ul>
          <li>Публичная оферта</li>
          <li>Политика конфиденциальности</li>
        </ul>
        <ul>
          <li>Пользовательское соглашение</li>
          <li>Бонусная программа</li>
        </ul>
      </div>
      <div className="footer-line2">
        <div className="footer-text">
          <h2>присоединяйтесь к vita juice</h2>
        </div>
        <div className="footer-icons">
          <Link to="https://vk.com"><i class="fa-brands fa-vk"></i></Link>
          <Link to="https://instagram.com"><i class="fa-brands fa-square-instagram"></i></Link>
          <Link to="https://facebook.com"><i class="fa-brands fa-square-facebook"></i></Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
