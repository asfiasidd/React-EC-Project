import React from 'react'
import HeaderSection from '../Components/HeaderSection'
import CategoriesSection from '../Components/categoriesSection'
import Sliders from '../Components/Sliders'

export default function Home() {
  return (
   <>
   <HeaderSection />
   <CategoriesSection />
  <div className='home-container'>
    <Sliders />
    <div className="row">
    <div className="col-md6"></div>
    <div className="col-md6"></div>
   </div>
  </div>
  
   
   </>
  )
}
