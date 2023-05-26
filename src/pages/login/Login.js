import {useContext} from 'react'
import { Context } from '../../Context'
const Login = () => {
       const {Login,setPasswordLogin,passwordLogin,setEmailLogin,emailLogin} = useContext(Context)
  return (
    <div>
    <div className='sign-menu'>
    <div class="login-box">
  <h2>Войти</h2>
  <form>
    <div class="user-box">
    <input type="text" value={emailLogin} onChange={(e) => setEmailLogin(e.target.value)}/>
      <label>Электронная почта</label>
    </div>
    <div class="user-box">
    <input type="password" value={passwordLogin} onChange={(e) => setPasswordLogin(e.target.value)}/>
      <label>Парол</label>
    </div>
    <a onClick={Login} href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Войти
    </a>
  </form>
</div>
    </div>
    </div>
  )
}

export default Login