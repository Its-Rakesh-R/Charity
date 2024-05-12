import feed from './images/feed.png'
import './feed.css'
import { Button } from 'react-bootstrap'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Feed(){
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

    return <div className='pt-5 relative'>
        <div className='container'>
        <h2 className='text-center fw-bold fs-1 blue'>Feed children</h2>
    <div id="feed" className="mt-4 ps-3 row">
        <div className='col-lg-6 pt-2'>
            <img id='feed-width' src={feed} alt="feed"/>
        </div>
        <div className='col-lg-6 pt-2 fs-6 open-sans '>
            <p className='opacity-75'>The Rocky Charity Foundation is a not-for-profit organisation headquartered in Chennai, India. The Foundation strives to eliminate classroom hunger by implementing the PM POSHAN(Mid-Day Meal ) Programme. It provides nutritious meals to children studying in government schools and government-aided schools. Akshaya Patra also aims to counter malnutrition and support the Right to Education of children hailing from socio-economically challenging backgrounds.</p>
            <p className=' blue1'><span className='quote fs-3'>"</span>Every meal shared is a step towards hope; let’s nourish the dreams of charity children with our generosity.<span className='quote fs-3'>"</span></p>
            <p className='blue1'><span className='quote fs-3'>"</span>Feeding a hungry child is not just an act of charity, it is an act of love that nourishes the soul as much as the body.<span className='quote fs-3'>"</span></p>
            <div className='d-flex justify-content-center fs-5 pt-3'>
            <button className='feed-btn position_rel' onClick={menu}>Let's Feed</button>
            </div>
        <div className='share_food' style={{display:display1}}>
            <Link to='/feedmoney'><button className='m-2 btn-2' onClick={menu}>By money</button></Link>
            <Link to='/feedfood'><button className='m-2 btn-2' onClick={menu}>By food</button></Link>
        </div>
        </div>
        </div>
    </div>
    </div>
}
export default Feed