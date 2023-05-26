import "../store/Store.css"
import { GetFunc } from "../../module/api";
import React, { useState, useEffect } from 'react';
import { useCart } from 'react-use-cart';
import ResponsiveModal from "../../components/errorModal/ErrorModal";
import PagesText from "../../components/allText/PagesText";
const Store = () => {
  const [products, setProducts] = useState([]);
  const [filterPrice, setFilterPrice] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const { addItem, getItem, removeItem } = useCart();

  useEffect(() => {
         GetFunc("/products").then((res) => {
  setProducts(res)
})
  }, []);

  const [searchQuery, setSearchQuery] = useState('');

const filteredProducts = products.filter(
  (product) => 
    product.price >= filterPrice && 
    product.price < 1000 &&
    (product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
     product.description.toLowerCase().includes(searchQuery.toLowerCase()))
);
  const handlePriceFilterChange = (event) => {
    const newFilterPrice = event.target.value;
    if (newFilterPrice === '1000') {
      setFilterPrice(Number(newFilterPrice) - 1);
    } else {
      setFilterPrice(newFilterPrice);
    }
    setCurrentPage(1);
  };
  
  const handleSearchQueryChange = (event) => {
    const newSearchQuery = event.target.value;
    setSearchQuery(newSearchQuery);
    setCurrentPage(1);
  };
  

  const productsPerPage = 8;
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = Math.min(startIndex + productsPerPage, filteredProducts.length);
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  return (
    <div>
      <PagesText info="все продукты" animation="fade-left" />
      <div className="inputs-menu">
      <div>
      <input
        class="slider"
        type="range"
        min="0"
        max="1000"
        value={filterPrice}
        onChange={handlePriceFilterChange}
      />
    </div>
    <div>
      <input
        className="search-menu"
        type="text"
        placeholder="искать..."
        value={searchQuery}
        onChange={handleSearchQueryChange}
      />
    </div>
      </div>
      <div className="price-menu">цена товаров:<span> {filterPrice}₽</span></div>
      { currentProducts.length === 0 ? <div className="korzinka_null">Нет таких продуктов</div> : null}
    <div className="all-card-styles">
    { currentProducts.map((el) => (
        <div key={el.id} className="product-card">
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
    ))} 
    </div>

      {Array.from({ length: totalPages }, (_, index) => (
        <button className="pagination-buttons" key={index} onClick={() => setCurrentPage(index + 1)}>          {index + 1}
         </button>
         ))}
  </div>
  );
};

export default Store