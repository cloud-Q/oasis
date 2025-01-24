import React from 'react'
import Header from './Components/Header/Header'
import Mainsection from './Components/MainComponents/Mainsection'
import Sittingroom from './Components/SittingRoom/Sittingroom';

import { BrowserRouter, Routes, Route } from "react-router";
import Footer from './Components/Footer/Footer';
import ProductPage from './Components/SittingRoom/ProductPage';


const App = () => {
  return (
    <>
    <Header/>

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Mainsection/>}/>
      <Route path='/:firstpage/:secondpage' element={<Sittingroom/>}/>
      <Route path='/:firstpage/:secondpage/:thirdpage' element={<ProductPage/>}></Route>
    </Routes>
      
    
    </BrowserRouter>

    <Footer/>
    
    </>
  )
}

export default App
