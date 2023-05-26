import React, { useContext } from 'react'
import { Context } from '../../Context'
import { useState, useEffect } from 'react'
import "../adminPanel/Admin.css"
import { DeleteDataFunc, GetFunc, PathcFunc, PostFunc } from '../../module/api'
import { useNavigate } from 'react-router-dom'
import PagesText from "../../components/allText/PagesText"
import axios from 'axios'
const AdminPrivat = () => {
  const navigate = useNavigate()
  const { select, setSelect, name, setName, price, setPrice, desc, setDesc, imgUrl, setImgUrl } = useContext(Context)
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [getProductId, setGetProductId] = useState(1)
  const [productObj, setProductObj] = useState({})
  const [showContant, setShowContant] = useState(true)
 
  const { API } = useContext(Context)

  const productObject = {
    url: imgUrl,
    name: name,
    category: select == "" ? "default" : select,
    price: price,
    description: desc,
  }
 
  const PostData = () => {
    PostFunc("/products", productObject).then(() => window.location.reload()).catch(error => console.error("Наш \n\t", error))
  }

  const Delete = (id) => {
    DeleteDataFunc(`/products/${id}`).then(() => {
      window.location.reload()
    })
  }

  const Data = (id) => {
    axios.get(`${API}/products/${id}`).then((data) => {
      setProductObj(data.data);
    })
  }

  const Patch = (id) => {

    axios.patch(`${API}/products/${id}`, productObj).then(() => window.location.reload()).catch((error) => console.log('Error: ', error));
  }
  useEffect(() => {
    GetFunc(`/productsCategory`).then(data => {
      setCategories(data);
    })

    GetFunc(`/products`).then(data => {
      setProducts(data);
    })
    if (!localStorage.getItem("juiceToken")) {
      navigate("/")
    }

  }, [])

  return (
    <div className='admin-panel'>
      <PagesText info="админ Панель" animation="fade-right" />
      <div className='log-out-btn-menu'>
        <button className='btn btn-danger' onClick={() => {
          localStorage.removeItem("juiceToken")
          window.location.reload()
        }}>Выйти</button>
      </div>
      <div className="container">
        <form className='admin-form' onSubmit={(e) => e.preventDefault()} >
          <label className="label">
            <p>Выбрать категории</p>
            <select className='admin-select' onChange={(e) => setSelect(e.target.value)}>
              <option value="default">Выбрать</option>
              {
                categories.map((category) => {
                  return (
                    <option value={category.category} key={category.id}>{category.name}</option>
                  )
                })
              }
            </select>
          </label>

          <label className="label">
            <p className={"text"}>Название продук</p>
            <input className='form-control admin-input' onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder='Название продук' />
          </label>

          <label className="label">
            <p className={"text"}>Описания продук</p>
            <input className='form-control admin-input' onChange={(e) => setDesc(e.target.value)} value={desc} type="text" placeholder='Описания продук' />
          </label>

          <label className="label">
            <p className={"text"}>Цена продук</p>
            <input className='form-control admin-input' onChange={(e) => setPrice(e.target.value)} value={price} type="number" placeholder='Цена продук' />
          </label>

          <label className="label">
            <p className={"text"}>URL картинка</p>
            <input className='form-control admin-input' onChange={(e) => setImgUrl(e.target.value)} value={imgUrl} type="url" placeholder='URL картинка' />
          </label>

          <button className='btn btn-success' onClick={() => PostData()}>добавить</button>
        </form>

        <table className='table table-dark table-striped text-center admin-table admin-table-style'>
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Category</th>
              <th scope="col">Update</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              products.map((product, index) => {
                return (
                  <tr key={product.id}>
                    <td scope='row'>{index + 1}</td>
                    <td >{product.name}</td>
                    <td >{product.price}₽</td>
                    <td >{product.category}</td>
                    <td>
                      <i class="fa-solid fa-arrows-rotate" onClick={() => {
                        setGetProductId(product.id)
                        Data(product.id)
                      }}></i>
                    </td>
                    <td >
                      <i class="fa-regular fa-trash-can" data-product-id={product.id} onClick={(e) => Delete(e.target.dataset.productId)}></i>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        <div className='admin-form'>
        <label className="label">
            <p className={"text"}>Выбрать категории</p>
            <input className='form-control admin-input' onChange={(e) => setProductObj({ ...productObj, category: e.target.value })} value={productObj.category} placeholder='Выбрать категории' />
          </label>
          <label className="label">
            <p className={"text"}>Название продук</p>
            <input className='form-control admin-input' type="text" onChange={(e) => setProductObj({ ...productObj, name: e.target.value })} value={productObj.name} placeholder='Название продук' />
          </label>

          <label className="label">
            <p className={"text"}>Описания продук</p>
            <input className='form-control admin-input' type="text" onChange={(e) => setProductObj({ ...productObj, description: e.target.value })} value={productObj.description} placeholder='Описания продук' />
          </label>

          <label className="label">
            <p className={"text"}>Цена продук</p>
            <input className='form-control admin-input' type="text" onChange={(e) => setProductObj({ ...productObj, price: e.target.value })} value={productObj.price} placeholder='Цена продук' />
          </label>

          <label className="label">
            <p className={"text"}>URL картинка</p>
            <input className='form-control admin-input' type="url" onChange={(e) => setProductObj({ ...productObj, url: e.target.value })} value={productObj.url} placeholder='URL картинка' />
          </label>

          <button className='btn btn-danger' onClick={() => Patch(productObj.id)}>Сохранить</button>
        </div>
        <div className='admin-documentation'>
        {showContant && <button className='btn btn-warning' onClick={() => setShowContant(false) }>скрыть документацию</button>}
       {!showContant &&  <button className='btn btn-success' onClick={() => setShowContant(true) }>показать документацию</button>}
          {showContant && <div>
             <h1>Документация</h1>
             <ol>
             <li>
               - не превышайте цену продуктов от 999₽
              </li>
              <li>
               - добавить картины для продуктов только из нейросет Lexica
              </li>
              <li>
               - не превышайте цену продуктов от 999₽
              </li>
             </ol>
            </div>}
        </div>
      </div>

    </div>
  )
}

export default AdminPrivat