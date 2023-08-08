import React from 'react'
import {  Routes, Route , Navigate } from 'react-router-dom'
import Home from './Pages/Home'
import Products from './Pages/Products'
import Singleproduct from './Pages/Singleproduct'
import Pages404 from './Pages/Pages404'
import NavigationBar from './Components/NavigationBar'
import FooterSection from './Components/FooterSection'
// import HeaderSection from './Components/HeaderSection'
import { useState } from 'react'
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'
import Productspages from './Pages/Productspages'
// import ImageSection from './Component/ImageSection'





function App() {
  const [user, setUser] = useState(true)

  return (
    <>  
       <NavigationBar/> 
       {
        user

          ?
          (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:productID" element={<Productspages />} />
              {/* <Route path="/productspages" element={<Productspages />} /> */}
              <Route path="/products/category/:singleproduct" element={<Singleproduct />} />
              <Route path="*" element={<Pages404 />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          )
          :
          (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="*" element={<Navigate to="/login" replace={true} />} />
            </Routes>
          )

      }


{/* 
         <Routes>
          <Route path ="/Products"  element={<Products />}/>
          <Route path ="/Products/:ProductID"  element={<ProductPage />}/>
          <Route path="/products/category/:singleproduct" element={<Singleproduct />}/>
           <Route path="/" element={<Home />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="*" element={ <Pages404  />}/>
        </Routes> */}


        {/* <Routes>
        <Route path ="/Products"  element={<Products />}/>
          <Route path ="/Products/:ProductID"  element={<ProductPage />}/>
          <Route path="/products/category/:singleproduct" element={<Singleproduct />}/>
           <Route path="/" element={<Home />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="*" element={ <Pages404  />}/>
        </Routes> */}


  <FooterSection/>










      </>
  )}

export default App   
  