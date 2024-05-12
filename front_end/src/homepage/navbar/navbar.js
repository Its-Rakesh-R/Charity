import './navbar.css';
import {Container,Nav,Navbar,Offcanvas} from 'react-bootstrap';
import icon from './images/icons8-charity-64.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
function Topbar(){
  let[display1, setdisplay1] = useState('none')
  let [i, seti] = useState(1)
  function menu(){
    if (i === 1){
      seti(0);
      setdisplay1('block')
    }
    else{
      seti(1);
      setdisplay1('none')
    }
  }
    return<div id='fix'>
    <div className='lap'>
      <Navbar className='bgcolor' data-bs-theme="light">
      <img src={icon} className='icon' width='40px' />
        <Container>
          <Navbar.Brand href="#home">
          
            <span className='archivo-black-regular color1'>Rocky Charity</span> </Navbar.Brand>
          <Nav className=" justify-content-end">
          <Link className='pad' to='/' >Home</Link>
            <Link to='/donate' className='pad'>Donate Now</Link>
            <Link to='/footer2' className='pad'>Contact Us</Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
    <div className='mobile'>
      <div className='d-flex p-2 px-4'>
        <div className='flex-grow-1'>
          <img className='icon1 pt-2' src={icon} />
          <span className='archivo-black-regular color1 px-2 fs-5'>Rocky Charity</span>
        </div>
        <div>
          <button id='menu_btn' onClick={menu}>
          <svg id='menu_icon2' xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/></svg>
          </button>
        </div>
      </div>
      <div id='menu' style={{display:display1}}>
            <div className='menu_item' onClick={menu}><Link to='/'>Home</Link></div>
            <div className='menu_item' onClick={menu}><Link to='/donate'>Donate Now</Link></div>
            <div className='menu_item' onClick={menu}><Link to='/contact'>Contact Us</Link></div>
      </div>
    </div>
  </div>
    
}
export default Topbar