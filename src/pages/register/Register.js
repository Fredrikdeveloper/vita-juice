import {useContext} from 'react'
import { Context } from '../../Context'
import "../register/Registration.css"
const Register = () => {
       const {email, setEmail, username, setUsername, password, setPassword, Register} = useContext(Context)
  return (
    <div className='sign-menu'>
    <div class="login-box">
  <h2>Регистрироваться</h2>
  <form>
    <div class="user-box">
     <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
      <label>Имя</label>
    </div>
    <div class="user-box">
    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
      <label>Электронная почта</label>
    </div>
    <div class="user-box">
    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      <label>Парол</label>
    </div>
    <a onClick={Register} href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Зарегистрироваться
    </a>
  </form>
</div>
    </div>
  )
}

export default Register