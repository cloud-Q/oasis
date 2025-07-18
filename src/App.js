// App.js
// import React from 'react'
import Header from './Components/Header/Header'
import Mainsection from './Components/MainComponents/Mainsection'
import Sittingroom from './Components/SittingRoom/Sittingroom'
import ProductPage from './Components/SittingRoom/ProductPage'
import Footer from './Components/Footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'
const App = () => (
  <div className="app-container">
    <Header/>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Mainsection/>}/>
        <Route path='/:first/:second' element={<Sittingroom/>}/>
        <Route path='/:first/:second/:third' element={<ProductPage/>}/>
      </Routes>
    </BrowserRouter>

    <Footer/>
  </div>
)

export default App
