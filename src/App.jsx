import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './components/Routes/Home'
import { Route, Routes } from 'react-router-dom'
import ProductDetail from './components/Routes/ProductDetail'
import Login from './components/Routes/Login'
import Purchases from './components/Routes/Purchases'
import Header from './components/shared/Header'
import axios from 'axios'
import Cart from './components/shared/Cart'
import ProtectedRoutes from './components/Routes/ProtectedRoutes'
import { useDispatch } from 'react-redux'
import { getAllProducts } from './store/slices/products.slice'




function App() {
  const [count, setCount] = useState(0)

  // useEffect(() => {
  //   const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users'

  //   const obj = {
  //     firstName: 'Osvaldo',
  //     lastName: 'Gonzalez',
  //     email: 'gonzalezcampososvaldo@gmail.com',
  //     password: '123456789',
  //     role: 'admin'
  //   }

  //   axios.post(URL, obj)
  //     .then(res => console.log(res.data))
  //     .catch(err => console.log(err))

  // }, [])

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])
  

  return (
    <div className='app'>
    <Header/>
    <Routes>
      <Route path ='/' element={<Home/>} />
      <Route path ='/Login' element={<Login/>} />
      <Route path ='/Purchases' element={<Purchases/>} />
      <Route element={<ProtectedRoutes />}>
        <Route path ='/product/:id' element={<ProductDetail/>} />
        <Route path='/cart' element={<Cart/>}/>
      </Route>
    </Routes>
    </div>
  )
}

export default App
