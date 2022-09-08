import React from 'react'
import FormLogin from '../login/FormLogin'

const Login = () => {
  const isLogged = localStorage.getItem('token')
  return (
    <div className={`login`} >
      <span className={` ${isLogged? 'hide': ''}`}>
       <FormLogin />
      </span>
      <div className={` ${isLogged? '': 'hide'}`}>
          <h3>Welcome! you are already loged in.</h3>
      </div>
    </div>
  )
}

export default Login