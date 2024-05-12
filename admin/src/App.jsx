import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Add_child from './admin/hompage/add_child'
import Homepage from './admin/hompage/home';
import Sponser_detail from './admin/hompage/sponsor_detail';
import Donation from './admin/donations/donation';
import Feed_data from './admin/donations/feed_data';
import Occasion from './admin/donations/occasion';
import Top_bar from './navbar/navbar';
import Ordinary_donation_detail from './admin/hompage/ordinary_don_detail';
import Feed_food from './admin/hompage/food_detail';
import Occassion_detail from './admin/hompage/occasion_detail';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='roboto-thin'>
      <BrowserRouter>
      <Top_bar></Top_bar>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/add_child' element={<Add_child/>}/>
        <Route path='/sponsor/:id' element={<Sponser_detail/>}/>
        <Route path='/donation' element={<Donation/>}/>
        <Route path='/feed' element={<Feed_data/>}/>
        <Route path='/occasion' element={<Occasion/>}/>
        <Route path='/ordinar_don/:id' element={<Ordinary_donation_detail/>}/>
        <Route path='/feed_food/:id' element={<Feed_food/>}/>
        <Route path='/occasion_deta/:id' element={<Occassion_detail/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
