import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Exchange from './components/Exchange'
import Coins from './components/Coins'
import Coindetails from './components/Coindetails'

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
      <Route path='/Cryptify' element={<Home/>}/>
        <Route path='/Cryptify/exchange' element={<Exchange/>} />
        <Route path='/Cryptify/coins' element={<Coins/>}/>
        <Route path='/Cryptify/coin/:id' element={<Coindetails/>}/>

      </Routes>
      <Footer/>
    </Router>
  )
}

export default App