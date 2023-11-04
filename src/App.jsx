import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/home/Home'
import Order from './pages/order/Order'
import Cart from './pages/cart/Cart'
import NoPage from './pages/nopage/NoPage'
import Dashboard from './pages/admin/dashboard/Dashboard'
import MyState from './context/data/myState'
import Login from './pages/registration/Login'
import Signup from './pages/registration/SignUp'
import ProductInfo from './pages/productInfo/ProductINfo'
import AddProduct from './pages/admin/page/AddProduct'
import UpdateProduct from './pages/admin/page/UpdateProduct'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import AllProducts from './pages/allproducts/AllProducts'

const App = () => {
  return (
    <>
      <MyState>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/allproducts" element={<AllProducts /> } />

            <Route path="/order" element={
              <ProtectedRoute>
                <Order />
              </ProtectedRoute>
             } />

            <Route path="/cart" element={<Cart /> } />
            <Route path="/dashboard" element={
              <ProtectedRouteForAdmin>
                <Dashboard />
              </ProtectedRouteForAdmin>
             } />

            <Route path="/login" element={<Login /> } />
            <Route path="/signup" element={<Signup /> } />
            <Route path="/productinfo/:id" element={<ProductInfo /> } />

            <Route path="/addproduct" element={
              <ProtectedRouteForAdmin>
                <AddProduct />
              </ProtectedRouteForAdmin>
             } />
             
            <Route path="/updateproduct" element={
              <ProtectedRouteForAdmin>
                <UpdateProduct />
              </ProtectedRouteForAdmin>
             } />

            <Route path="/*" element={<NoPage /> } />
          </Routes>

          <ToastContainer />

        </BrowserRouter>
      </MyState>  
    </>
  )
}

export default App


// user
export const ProtectedRoute = ({ children }) => {
    const user = localStorage.getItem("user");

    if(user){
      return children;
    }
    else{
      return <Navigate to={"/login"} />
    }
}

// admin
export const ProtectedRouteForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem("user"));

  if(admin.user.email === "prajwal8@gmail.com"){
    return children;
  }
  else{
    return <Navigate to={"/login"} />
  }
}