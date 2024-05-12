import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './homepage/home';
import Topbar from './homepage/navbar/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './homepage/footer';
import Donate from './donation/donation_form';
import By_money from './feed/by_money';
import By_food from './feed/by_food';
import Celebration from './celebration/celebration';
import Sponser1 from './sponser/sponser1';
import Sponser2 from './sponser/sponser2';
import Footer2 from './footer2/footer';
import { useEffect } from 'react';

function App() {

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return<div className='domine'>
    <BrowserRouter>
    <Topbar/>
    <Routes>
      
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Footer/>}/>
      <Route path='/footer2' element={<Footer2/>}/>
      <Route path='/donate' element={<Donate/>}/>
      <Route path='/feedmoney' element={<By_money/>}/>
      <Route path='/feedfood' element={<By_food/>}/>
      <Route path='/celebrate' element={<Celebration/>}/>
      <Route path='/sponser1' element={<Sponser1/>}/>
      <Route path='/sponser2/:id' element={<Sponser2 first_name="rakesh"/>}/>
    </Routes>
    
    </BrowserRouter>
  </div>
}

export default App;
