import { Col,Form,FloatingLabel, Button,Row, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import './celebration.css'
import axios from 'axios';
import Footer from '../homepage/footer';
import Footer2 from '../footer2/footer';

function Celebration(){

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
    const today = new Date();
    let[celebrate_data, setcelebrate] = useState({
        'first_name':'',
        'last_name':'',
        'email':'',
        'mobile':'',
        'date_of_birth':'',
        'category':'',
        'amount':'',
        'payment_method':'',
        'address':'',
        'collection_date':'',
        'current_date':today,
        'donation':'Occasion'
    })

    let[fields, setfields] = useState({
        'money_display':'none',
        'payment_display':'none',
        'address_display':'none',
        'preview_display':'none',
        'success_display':'none'
    })

    const select=(e)=>{
        setcelebrate({
            ...celebrate_data,
            [e.target.name]:e.target.value
        })
        if (e.target.value === 'money'){
            let copy_field = {...fields}
            copy_field.money_display='block'
            copy_field.payment_display='none'
            copy_field.address_display='none'
            setfields(copy_field)

            let copy_data = {...celebrate_data}
            copy_data.category = 'money'
            copy_data.amount='' ;
            copy_data.payment_method='' ;
            delete copy_data.address
            delete copy_data.collection_date
            setcelebrate(copy_data)

        setcelebrate({
            ...celebrate_data,
            [e.target.name]:e.target.value
        })
        
        }else if (e.target.value === 'online'){
            let copy_field = {...fields}
            copy_field.payment_display='block'
            copy_field.address_display='none'
            setfields(copy_field)

            let copy_data = {...celebrate_data}
            copy_data.payment_method='online'
            delete copy_data.address
            delete copy_data.collection_date
            setcelebrate(copy_data)
            
        }else if (e.target.value === 'offline'){
            let copy_field = {...fields}
            copy_field.money_display='block'
            copy_field.address_display='block'
            copy_field.payment_display='none'
            setfields(copy_field)

            let copy_data = {...celebrate_data}
            copy_data.payment_method='offline'
            copy_data.address =''
            copy_data.collection_date =''
            setcelebrate(copy_data)
        }else if(e.target.value === 'clothes'){
            let copy_field = {...fields}
            copy_field.address_display='block'
            copy_field.money_display='none'
            copy_field.payment_display='none'
            setfields(copy_field)

            let copy_data = {...celebrate_data};
            copy_data.category = "clothes";
            copy_data.address = "";
            copy_data.collection_date = "";
            delete copy_data.amount;
            delete copy_data.payment_method;
            setcelebrate(copy_data);
        
        }
    }
    function preview(e){
        
        let a =false
        for (let i in celebrate_data){
            if(celebrate_data[i] === ""){
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
            let copy_field = {...fields}
            copy_field.preview_display='block'
            setfields(copy_field)
        }
    }
    function hide(){
        
        let copy_field = {...fields}
        copy_field.preview_display='none'
        setfields(copy_field)
    }
    function send(){
        axios.post("http://localhost:3003/enduser/occasion",celebrate_data)
        let copy_field = {...fields}
        copy_field.success_display='block'
        setfields(copy_field)
    }
    

    return<>
    <div  id='back_color1' className='pt-5  pb-5'>
        <div className="container">
        <Form className='new_color' noValidate validated={validated} onSubmit={handleSubmit}>
        <h2 className='global_color pb-3 ' id='transform'>Make a Difference: Donate for Special Occasions</h2>
        <Row className='my-3'> 
        <Col md>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="3"lg='3' md='4'>
            First Name
            </Form.Label>
            <Col sm="9" lg='9' md='8'>
            <Form.Control required type='text' placeholder='First Name' name='first_name' value={celebrate_data.first_name} onChange={select} />
            </Col>
        </Form.Group>
        </Col>
        <Col md>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="3"lg='3' md='4'>
            Last Name
            </Form.Label>
            <Col sm="9" lg='9' md='8'>
            <Form.Control required type='text' placeholder='Last Name' name='last_name' value={celebrate_data.last_name}  onChange={select}/>
            </Col>
        </Form.Group>
        </Col>
    </Row>
    <Row className='my-3'> 
        <Col md>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="3"lg='3' md='4'>
            Email
            </Form.Label>
            <Col sm="9" lg='9' md='8'>
            <Form.Control required type='email' placeholder='Email' name='email' value={celebrate_data.email} onChange={select}/>
            </Col>
        </Form.Group>
        </Col>
        <Col md>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="3"lg='3' md='4'>
            Mobile
            </Form.Label>
            <Col sm="9" lg='9' md='8'>
            <Form.Control required type='text' placeholder='Mobile number' name='mobile' value={celebrate_data.mobile} onChange={select}/>
            </Col>
        </Form.Group>
        </Col>
    </Row>
    <Row className='my-3'> 
        <Col md>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="3"lg='3' md='4'>
            Date Of Birth
            </Form.Label>
            <Col sm="9" lg='9' md='8'>
            <Form.Control required type='date' placeholder='Date Of Birth' name='date_of_birth' value={celebrate_data.date_of_birth} onChange={select}/>
            </Col>
        </Form.Group>
        </Col>
        <Col md>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="3"lg='3' md='4'>
            Category
            </Form.Label>
            <Col sm="9" lg='9' md='8'>
            <Form.Select required aria-label="Default select example" name='category' value={celebrate_data.category} onChange={select}>
                <option>Select</option>
                <option value="money">Money</option>
                <option value="clothes">Clothes</option>
            </Form.Select>
            </Col>
        </Form.Group>
        </Col>
    </Row>
    <div style={{display:fields.money_display}}>
    <Row className='my-3' > 
        <Col md>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="3"lg='3' md='4'>
            Amount
            </Form.Label>
            <Col sm="9" lg='9' md='8'>
            <Form.Control required type='number' placeholder='Amount' name='amount' value={celebrate_data.amount} onChange={select} />
            </Col>
        </Form.Group>
        </Col>
        <Col md>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="3"lg='3' md='4'>
            Payment Method
            </Form.Label>
            <Col sm="9" lg='9' md='8'>
            <Form.Select required aria-label="Default select example" onChange={select} value={celebrate_data.payment_method} name='payment_method'>
                <option>Select</option>
                <option value="online">Online</option>
                <option value="offline">Offline</option>
            </Form.Select>
            </Col>
        </Form.Group>
        </Col>
    </Row>
    </div>
    <div className='d-flex justify-content-center pb-1' >
        <button className='feed-btn' style={{display:fields.payment_display}} onClick={preview} type='submit'>Pay</button>
    </div>
    <div style={{display:fields.address_display}}>
        <h3 className='pt-5 pb-3 global_color' id='address'>Collection Address</h3>
    <Row className='my-3'> 
        <Col md>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="3"lg='3' md='4'>
            Address
            </Form.Label>
            <Col sm="9" lg='9' md='8'>
                <FloatingLabel controlId="floatingTextarea2" label="Address">
                    <Form.Control required as="textarea" placeholder="Write a Address here" style={{ height: '100px' }} value={celebrate_data.address} name='address' onChange={select}/>
                </FloatingLabel>
            </Col>
        </Form.Group>
        </Col>
        <Col md>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="3"lg='3' md='4'>
            Collecting date
            </Form.Label>
            <Col sm="9" lg='9' md='8'>
            <Form.Control required type='date' placeholder='Date' name='collection_date' value={celebrate_data.collection_date} onChange={select}/>
            </Col>
        </Form.Group>
        </Col>
    </Row>
    <div className='d-flex justify-content-center pb-5' >
        <button className='feed-btn'  onClick={preview} type='submit'>Next</button>
    </div>
    </div>
        </Form>
        </div>
    </div>
    <div style={{display:fields.preview_display}} className='bg '>
        <div className='p-3 preview'>
            <h3 className='global_color pb-3'>Preview</h3>
            <Row>
                        <Col lg='7'><p><span className='p_color'>First Name</span> : {celebrate_data.first_name}</p></Col>
                        <Col lg='5'><p><span className='p_color'>Last Name</span> : {celebrate_data.last_name}</p></Col>
                    </Row>
                    <Row>
                        <Col lg='7'><p><span className='p_color'>Email</span> : {celebrate_data.email}</p></Col>
                        <Col lg='5'><p><span className='p_color'>Mobile</span> : {celebrate_data.mobile}</p></Col>
                    </Row>
                    <Row>
                        <Col lg='7'>
                                <p><span className='p_color'>Date Of Birth</span> : {celebrate_data.date_of_birth}</p>
                            </Col>
                            <Col lg='5'>
                                <p><span className='p_color'>Category</span> : {celebrate_data.category}</p>
                            </Col>
                    </Row>
                    <div style={{display:fields.money_display}}>
                    <Row >
                        <Col lg='7'><p><span className='p_color'>Amount</span> : {celebrate_data.amount}</p></Col>
                        <Col lg='5'><p><span className='p_color'>Payment Mode</span> : {celebrate_data.payment_method}</p></Col>
                    </Row>
                    </div>
                    <div style={{display:fields.address_display}}>
                    <Row  >
                        <Col lg='7'><p><span className='p_color'>Address</span> : {celebrate_data.address}</p></Col>
                        <Col lg='5'><p><span className='p_color'>Collection Date</span> : {celebrate_data.collection_date}</p></Col>
                    </Row>
                    </div>
                    <form>
                    <div className='d-flex justify-content-center pb-5' >
                        <button className='m-3 feed-btn' onClick={hide}>Edit</button>
                        <button className='m-3 feed-btn' onClick={send}>submit</button>
                    </div>
                    </form>
        </div>
    </div>
    <div style={{display:fields.success_display}}>
        <div className='success1'>
            <div className='success2'>
                <h2 className='p-5'>Success</h2>
            </div>
        </div>
    </div>
    <Footer/>
    </>
}
export default Celebration