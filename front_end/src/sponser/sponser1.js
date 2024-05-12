import './sponser.css'
import { Col,Form,FloatingLabel, Button,Row, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Sponser2 from './sponser2';
import Footer from '../homepage/footer';

function Sponser1(){

    useEffect(()=>{
        window.scrollTo(0,0)
      },[])

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }

      setValidated(true);
    };
    let i = 1;
    let array = [
        {
            "age": "13",
            "date_of_birth":"2010-05-05",
            "first_name":"ab",
            "last_name":"khan",
            "personal_identity":"mole on elbow",
            "region":"india",
            "_id":"66326f7a56f57c3ffa055901"
        }
    ]
    let [childdata,setchild] = useState([])
    let [sponserchild, setsponser] = useState({
        'age':'',
        'region':''
    })
    let[fields, setfields] = useState({
        'preview_display':'none'
    })

    const select=(e)=>{
        setsponser({
            ...sponserchild,
            [e.target.name]:e.target.value
        })
    }

    function preview(e){
        
        let a =false
        for (let i in sponserchild){
            if(sponserchild[i] === ""){
                a=true
                break  
            }
        }
        if(a){
            
            let copy_field = {...fields}
            copy_field.preview_display='none'
            setfields(copy_field)
        }
        else{
            e.preventDefault();
            axios.get(`http://localhost:3003/enduser/${sponserchild.age}/${sponserchild.region}`)
            .then((res)=>{
                setchild(res.data)
                console.log(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
            
            let copy_field = {...fields}
            copy_field.preview_display='block'
            setfields(copy_field)
        }
        console.log('chilfd',childdata)
    }
    function send(){
        
    }

    return<>
    <div className='pt-5  pb-5 new_back_color'>
    <div className="container">
    <div className='top_box'>
    <Form className='normal_color' noValidate validated={validated} onSubmit={handleSubmit}>
    <h2 className='global_color pb-3 ' id='transform'>Sponsor Form 1/3</h2>
    <Row className='my-3'> 
        <Col md>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="3"lg='3' md='4'>
            Age
            </Form.Label>
            <Col sm="9" lg='9' md='8'>
            <Form.Control required type='number' placeholder='Age' name='age' value={sponserchild.age} onChange={select} />
            </Col>
        </Form.Group>
        </Col>
        <Col md>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="3"lg='3' md='4'>
            Region
            </Form.Label>
            <Col sm="9" lg='9' md='8'>
            <Form.Select required aria-label="Default select example" name='region' value={sponserchild.region} onChange={select}>
                <option>Select</option>
                <option value="india">India</option>
                <option value="america">America</option>
                <option value="bangladesh">Bangladesh</option>
            </Form.Select>
            </Col>
        </Form.Group>
        </Col>
    </Row>
    <div className='d-flex justify-content-center' >
        <button className='sponcer_btn'  onClick={preview} type='submit'>Next</button>
    </div>
    </Form>
    </div>
    <div style={{display:fields.preview_display}}>
    <div className='top_box mt-5' >
        <div className='normal_color'>
    <h2 className='global_color pb-3 ' id='transform'>Fliterd Children</h2>
            <div className='table container-fluid mt-3'>
            {childdata.length > 0?(
                childdata.map((e)=>{
                    return <Link key={e._id} className='row mx-3 mb-3'  to={`/sponser2/${e._id}`} >
                        <div className='col-lg-2'>{i++}</div>
                        <div className='col-lg-2'>{e.first_name}</div>
                        <div className='col-lg-2'>{e.last_name}</div>
                        <div className='col-lg-2'>{e.age}</div>
                        <div className='col-lg-2'>{e.region}</div>
                        <button className='select-btn col-lg-2'>Select</button>
                    </Link>
                })):(<p>No Children with this detail</p>)
            }
            </div>
        </div>
    </div>
    </div>
    </div>
    </div>
    <Footer/>
    </>
}
export default Sponser1