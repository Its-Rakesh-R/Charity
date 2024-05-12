import {Carousel, Button} from 'react-bootstrap';
import './carousel.css';
import carousel1 from './images/carousel1.jpg';
import carousel2 from './images/carousel2.jpg';
import carousel3 from './images/carousel3.jpg';
import carousel_sm1 from './images/carousel-sm1.jpg';
import carousel_sm2 from './images/carousel-sm2.jpg';
import carousel_sm3 from './images/carousel-sm3.jpg';
import donate_icon from './images/donate.png';
import { Link } from 'react-router-dom';

function Caroselhome() {
  return (

  <div>
    <div className='lap'>
    <Carousel data-bs-theme="light" >
      <Carousel.Item>
          <Link className='donate' to='/donate'>
            <img  src={donate_icon}/>
            <span className='donate_text'>Donate</span>
          </Link>
        <img
          className="d-block width_img"
          src={carousel1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
          <Link className='donate1' to='/donate'>
            <img src={donate_icon}/>
            <span className='donate_text'>Donate</span>
          </Link>
        <img
          className="d-block width_img"
          src={carousel2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
          <Link className='donate' to='/donate'>
            <img src={donate_icon}/>
            <span className='donate_text'>Donate</span>
          </Link>
        <img
          className="d-block width_img"
          src={carousel3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
    <div className='mobile'>
    <Carousel data-bs-theme="light" >
      <Carousel.Item>
          <Link className='donate' to='/donate'>
            <img src={donate_icon}/>
            <span className='donate_text'>Donate</span>
          </Link>
        <img
          className="d-block width_img"
          src={carousel_sm1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
          <Link className='donate1' to='/donate'>
            <img className='img-fluid' src={donate_icon}/>
            <span className='donate_text'>Donate</span>
          </Link>
        <img
          className="d-block width_img"
          src={carousel_sm2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
          <Link className='donate' to='/donate'>
            <img src={donate_icon}/>
            <span className='donate_text'>Donate</span>
          </Link>
        <img
          className="d-block width_img"
          src={carousel_sm3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  </div>
  );
}

export default Caroselhome;