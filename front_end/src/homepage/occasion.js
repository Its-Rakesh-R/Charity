import './occasion.css'
import occasion_image from './images/occasion.png'
import { Link } from 'react-router-dom'
function Occasion(){
    return <div className='pt-5 '>
    <div className='container'>
    <h2 className='text-center fw-bold fs-1 blue'>Special Occasions</h2>
    <div id="feed" className="mt-4 ps-3 row">
        <div className='col-lg-6 pt-2 fs-6 open-sans'>
            <h3 className='occasion-color'>Make a Difference: Donate for Special Occasions</h3>
            <p><span className='fw-bold '>Dear Friends</span> As we celebrate joyous occasions in our lives, let’s extend our happiness to those less fortunate. Imagine the smiles we can bring to the faces of children who lack adequate clothing and other things during their special moments</p>
            <h4 className='occasion-color'>Why Donate?</h4>
            <p><span className='occasion-color1'>Empowerment:</span> Your gently used dresses can empower children, giving them confidence and a sense of belonging.</p>
            <p><span className='occasion-color1'>Eco-Friendly:</span> Recycling clothes promotes sustainability and reduces waste.</p>
            <p><span className='occasion-color1'>Brightening Lives:</span> By donating, you become a part of their cherished memories</p>
            <div className='d-flex justify-content-center fs-5 pt-3'>
                <Link to='/celebrate'><button className='feed-btn '>Make Celebrations</button></Link>
            </div>
        </div>
        <div className='col-lg-6 pt-2 pb-3'>
            <img id='occasion-width' src={occasion_image} alt="feed"/>
        </div>
    </div>
</div>
</div>
}
export default Occasion