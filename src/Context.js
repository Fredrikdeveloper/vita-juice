import React, { useState } from "react";
import { createContext } from "react";
import Products from "./Data";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
const Context = createContext();

const reg = "http://localhost:8080/api/sign-up/"
const login = "http://localhost:8080/api/sign-in/"
const ContextProvider = ({ children }) => {
  
  // register
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
         const Register = () => {
                axios.post(reg, {
                       email: email,
                       username: username,
                       password: password
                })
                .then(res => {
                       if(res.status === 201){
                              navigate("/Login")
                       }
                })
                .catch(err => {
                       console.log(err);
                })
         }
  // Login
  const [emailLogin, setEmailLogin] = useState("")
  const [passwordLogin, setPasswordLogin] = useState("")
  const Login = () => {
         axios.post(login, {
                email: email,
                password: password
         })
         .then(res => {
                if(res.status === 200){
                       navigate("/")
                } 
         })
         .catch(err => {
                console.log(err);
         })
  }

  
  // basket delete
  const del = (e) => {
    window.location.reload();
  };
  

  // admin panel
  const API = "http://localhost:9000"

  const [select, setSelect] = useState("")
  const [name, setName] = useState("")
  const [price, setPrice] = useState(0)
  const [desc, setDesc] = useState("")
  const [imgUrl, setImgUrl] = useState("")


  return (
    <Context.Provider value={{ Login,setPasswordLogin,passwordLogin,setEmailLogin,emailLogin,email, setEmail, username, setUsername, password, setPassword, Register ,Products, del, API, select, setSelect, name, setName, price, setPrice, desc, setDesc, imgUrl, setImgUrl }}>
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
