import './sponser.css'
import sponsor_img from './images/sponsor.png'
import { Link } from 'react-router-dom'
function Sponser(){
    return <div className='pt-5 bacground-color'>
    <div className='container'>
    <h2 className='text-center fw-bold fs-1 blue text-white'>Sponsorship</h2>
<div id="feed" className="mt-4 ps-3 row">
    <div className='col-lg-6 pt-2'>
        <img id='width' src={sponsor_img} alt="feed"/>
    </div>
    <div className='col-lg-6 pt-2 fs-6 open-sans'>
        <p>Join us in changing a child’s life! By sponsoring a child, you provide education, healthcare, and hope. Your support can break the cycle of poverty</p>
        <p>Be a hero in a child’s story! Sponsorship gives them access to essentials like food, education, and love. Together, we can create a brighter future.</p>
        <p>Sponsorship isn’t just about money; it’s about building a relationship. Your support transforms lives.</p>
        <div className='d-flex justify-content-center fs-5 pt-3'>
        <Link to='/sponser1'><button className='feed-btn '>Sponsor</button></Link>
        </div>
    </div>
    </div>
</div>
</div>
}
export default Sponser