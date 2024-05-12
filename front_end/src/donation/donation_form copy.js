import axios from 'axios';
import './donation.css';
import { useState } from 'react';
import {Col,Row,Form,FloatingLabel, Button,Table} from 'react-bootstrap';
import Footer from '../homepage/footer';

function Donate(){
    const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

    let[donate_data, setdonate] = useState({
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
    })
    let[fields, setfields] = useState({
        'money_display':'none',
        'gadget_display':'none',
        'construct_display':'none',
        'payment_display':'none',
        'address_display':'none',
        'preview_display':'none'
    })
    // let[money_display, setmoney] = useState('none')
    // let[gadget_display,setgadget] = useState('none')
    // let[construct_display,setconstrut] = useState('none')
    // let[payment_display,setpayment] = useState('none')
    // let[address_display, setAddress] = useState('none')
    // let[preview_display, setpreview] = useState('none')
    const select=(e)=>{
        setdonate({
            ...donate_data,
            [e.target.name]:e.target.value
        })
        console.log(donate_data)

        if (e.target.value === 'money'){
            let copy_field = {...fields}
            copy_field.money_display='block'
            copy_field.payment_display='none'
            copy_field.gadget_display='none'
            copy_field.construct_display='none'
            copy_field.address_display='none'
            setfields(copy_field)

            let copy_data = {...donate_data}
            copy_data.category = 'money'
            copy_data.amount='' ;
            copy_data.payment_method='' ;
            delete copy_data.gadget
            delete copy_data.material
            delete copy_data.address
            delete copy_data.collection_date
            setdonate(copy_data)
        
        // setmoney('block')
        // setAddress('none')
        // setpayment('none')
        // setgadget('none')
        // setconstrut('none')
        // donate_data.first_name=''
        // donate_data.last_name=''
        // donate_data.email=''
        // donate_data.mobile=''
        // donate_data.date_of_birth=''
        // donate_data.category=''
        // donate_data.money=''
        // donate_data.payment_mode=''
        setdonate({
            ...donate_data,
            [e.target.name]:e.target.value
        })
            }
        else if (e.target.value === 'gadgets'){
            let copy_field = {...fields}
            copy_field.gadget_display='block'
            copy_field.address_display='block'
            copy_field.money_display='none'
            copy_field.payment_display='none'
            copy_field.construct_display='none'
            setfields(copy_field)
            
            let copy_data = {...donate_data}
            copy_data.category = 'gadgets'
            copy_data.gadget ='';
            copy_data.address ='';
            copy_data.collection_date =  '';
            delete copy_data.amount
            delete copy_data.payment_method
            delete copy_data.material
            setdonate(copy_data)
            // setgadget('block')
            // setAddress('block')
            // setmoney('none')
            // setpayment('none')
            // setconstrut('none')
            // donate_data.first_name=''
            // donate_data.last_name=''
            // donate_data.email=''
            // donate_data.mobile=''
            // donate_data.date_of_birth=''
            // donate_data.category=''
            // donate_data.gadgets=''
        //     donate_data.address=''
        //     donate_data.collection_date=''
        //      setdonate({
        //     ...donate_data,
        //     [e.target.name]:e.target.value
        // })
            }
        else if (e.target.value === 'online'){
            let copy_field = {...fields}
            copy_field.payment_display='block'
            copy_field.gadget_display='none'
            copy_field.construct_display='none'
            copy_field.address_display='none'
            setfields(copy_field)

            let copy_data = {...donate_data}
            copy_data.payment_method='online'
            delete copy_data.gadget
            delete copy_data.address
            delete copy_data.collection_date
            delete copy_data.material
            setdonate(copy_data)
            // setpayment('block')
            // setgadget('none')
            // setconstrut('none')
            // setAddress('none')
            // donate_data.first_name=''
            // donate_data.last_name=''
            // donate_data.email=''
            // donate_data.mobile=''
            // donate_data.date_of_birth=''
            // donate_data.category=''
            // setdonate({
            //     ...donate_data,
            //     [e.target.name]:e.target.value
            // })
            }
        else if (e.target.value === 'offline'){
            let copy_field = {...fields}
            copy_field.money_display='block'
            copy_field.address_display='block'
            copy_field.gadget_display='none'
            copy_field.payment_display='none'
            copy_field.construct_display='none'
            setfields(copy_field)

            let copy_data = {...donate_data}
            copy_data.payment_method='offline'
            copy_data.address =''
            copy_data.collection_date =''
            delete copy_data.gadget
            delete copy_data.material
            setdonate(copy_data)
            
            // setmoney('block')
            // setAddress('block')
            // setpayment('none')
            // setgadget('none')
            // setconstrut('none')
            // donate_data.first_name=''
            // donate_data.last_name=''
            // donate_data.email=''
            // donate_data.mobile=''
            // donate_data.date_of_birth=''
            // donate_data.category=''
            // donate_data.address=''
            // donate_data.collection_date=''
            // setdonate({
            //     ...donate_data,
            //     [e.target.name]:e.target.value
            // })
            }
        else if(e.target.value === 'construction'){
            let copy_field = {...fields}
            copy_field.construct_display='block'
            copy_field.address_display='block'
            copy_field.gadget_display='none'
            copy_field.money_display='none'
            copy_field.payment_display='none'
            setfields(copy_field)

            let copy_data = {...donate_data}
            copy_data.category = 'construction'
            copy_data.material = '';
            copy_data.address ='';
            copy_data.collection_date =  '';
            delete copy_data.gadget
            delete copy_data.amount
            delete copy_data.payment_method
            setdonate(copy_data)
            // let copy_data = {...donate_data}
            // copy_data.material=''
            // copy_data.address =''
            // copy_data.collection_date =''
            // delete copy_data.gadget
            // delete copy_data.amount
            // delete copy_data.payment_method
            // setdonate(copy_data)

            // setconstrut('block')
            // setAddress('block')
            // setmoney('none')
            // setpayment('none')
            // setgadget('none')
            // donate_data.first_name=''
            // donate_data.last_name=''
            // donate_data.email=''
            // donate_data.mobile=''
            // donate_data.date_of_birth=''
            // donate_data.category=''
            // donate_data.material=''
            // donate_data.address=''
            // donate_data.collection_date=''
            // setdonate({
            //     ...donate_data,
            //     [e.target.name]:e.target.value
            // })
        } 
        else if(e.target.value === 'clothes'){
            let copy_field = {...fields}
            copy_field.address_display='block'
            copy_field.money_display='none'
            copy_field.payment_display='none'
            copy_field.gadget_display='none'
            copy_field.construct_display='none'
            setfields(copy_field)

            let copy_data = { ...donate_data };
            copy_data.category = "clothes";
            copy_data.address = "";
            copy_data.collection_date = "";
            delete copy_data.material;
            delete copy_data.gadget;
            delete copy_data.amount;
            delete copy_data.payment_method;
            setdonate(copy_data);
        // setAddress('block')
        // setmoney('none')
        // setpayment('none')
        // setgadget('none')
        // setconstrut('none')
        // donate_data.first_name=''
        // donate_data.last_name=''
        // donate_data.email=''
        // donate_data.mobile=''
        // donate_data.date_of_birth=''
        // donate_data.category=''
        // donate_data.address=''
        // donate_data.collection_date=''
        // setdonate({
        //     ...donate_data,
        //     [e.target.name]:e.target.value
        // })
        }
    }
    console.log(donate_data)
    function preview(e){
        
        let a =false
        for (let i in donate_data){
            if(donate_data[i] === ""){
                a=true
                break  
            }
        }
        if(a){
            // setpreview('none')
            let copy_field = {...fields}
            copy_field.preview_display='none'
            setfields(copy_field)
        }
        else{
            // setpreview('block')
            let copy_field = {...fields}
            copy_field.preview_display='block'
            setfields(copy_field)
        }
    }
    console.log(donate_data)
    function hide(){
        // setpreview('none')
        let copy_field = {...fields}
        copy_field.preview_display='none'
        setfields(copy_field)
    }
    function send(){
        axios.post("http://localhost:3003/enduser",donate_data)
    }

    return<>
    <div id='back_color' className='pt-5  pb-5'>
    <div className="container box">
        <h2 className='global_color pt-3 ' id='transform'>Transform the lives of children</h2>
        <Form className='mt-5' noValidate validated={validated} onSubmit={handleSubmit}>
    <Row className='my-3'> 
        <Col md>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="3"lg='3' md='4'>
            First Name
            </Form.Label>
            <Col sm="9" lg='9' md='8'>
            <Form.Control required type='text' placeholder='First Name' name='first_name' value={donate_data.first_name} onChange={select} />
            </Col>
        </Form.Group>
        </Col>
        <Col md>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="3"lg='3' md='4'>
            Last Name
            </Form.Label>
            <Col sm="9" lg='9' md='8'>
            <Form.Control required type='text' placeholder='Last Name' name='last_name' value={donate_data.last_name}  onChange={select}/>
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
            <Form.Control required type='email' placeholder='Email' name='email' value={donate_data.email} onChange={select}/>
            </Col>
        </Form.Group>
        </Col>
        <Col md>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="3"lg='3' md='4'>
            Mobile
            </Form.Label>
            <Col sm="9" lg='9' md='8'>
            <Form.Control required type='text' placeholder='Mobile number' name='mobile' value={donate_data.mobile} onChange={select}/>
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
            <Form.Control required type='date' placeholder='Date Of Birth' name='date_of_birth' value={donate_data.date_of_birth} onChange={select}/>
            </Col>
        </Form.Group>
        </Col>
        <Col md>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="3"lg='3' md='4'>
            Category
            </Form.Label>
            <Col sm="9" lg='9' md='8'>
            <Form.Select required aria-label="Default select example" name='category' value={donate_data.category} onChange={select}>
                <option>Select</option>
                <option value="money">Money</option>
                <option value="clothes">Clothes</option>
                <option value="gadgets">Gadgets</option>
                <option value="construction">Construction</option>
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
            <Form.Control required type='number' placeholder='Amount' name='amount' value={donate_data.amount} onChange={select} />
            </Col>
        </Form.Group>
        </Col>
        <Col md>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="3"lg='3' md='4'>
            Payment Method
            </Form.Label>
            <Col sm="9" lg='9' md='8'>
            <Form.Select required aria-label="Default select example" onChange={select} value={donate_data.payment_method} name='payment_method'>
                <option>Select</option>
                <option value="online">Online</option>
                <option value="offline">Offline</option>
            </Form.Select>
            </Col>
        </Form.Group>
        </Col>
    </Row>
    </div>
    <div className='d-flex justify-content-center pb-5' >
        <Button style={{display:fields.payment_display}} onClick={preview} type='submit'>Pay</Button>
    </div>
    <div style={{display:fields.gadget_display}}>
        <Row>
        <Col lg='6' md='6' sm='12'>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="3"lg='3' md='4'>
            Gadget
            </Form.Label>
            <Col sm="9" lg='9' md='8'>
            <Form.Select required aria-label="Default select example" onChange={select} value={donate_data.gadget} name='gadget'>
                <option>Select</option>
                <option value="laptop">Laptop</option>
                <option value="computer">Computer</option>
                <option value="mobile">Mobile</option>
            </Form.Select>
            </Col>
        </Form.Group>
        </Col>
    </Row>
    </div>
    <div style={{display:fields.construct_display}}>
        <Row>
        <Col lg='6' md='6' sm='12'>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="3"lg='3' md='4'>
            Material
            </Form.Label>
            <Col sm="9" lg='9' md='8'>
            <Form.Select required aria-label="Default select example" onChange={select} value={donate_data.material} name='material'>
                <option>Select</option>
                <option value="cement">Cement</option>
                <option value="sand">Sand</option>
                <option value="brick">Brick</option>
                <option value="steel">Steel</option>
            </Form.Select>
            </Col>
        </Form.Group>
        </Col>
    </Row>
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
                    <Form.Control required as="textarea" placeholder="Write a Address here" style={{ height: '100px' }} value={donate_data.address} name='address' onChange={select}/>
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
            <Form.Control required type='date' placeholder='Date' name='collection_date' value={donate_data.collection_date} onChange={select}/>
            </Col>
        </Form.Group>
        </Col>
    </Row>
    <div className='d-flex justify-content-center pb-5' >
        <Button  onClick={preview} type='submit'>Next</Button>
    </div>
    </div>
    </Form>
    </div>
    </div>
    <div style={{display:fields.preview_display}} className='bg '>
                <div className='p-3 preview'>
                    <h3 className='global_color pb-3'>Preview</h3>
                    {/* <Table striped bordered hover>
                    <tbody>
                        <tr>
                            <td>
                                <p>First Name : {donate_data.first_name}</p>
                            </td>
                            <td>
                                <p>Last Name : {donate_data.last_name}</p>
                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>
                                <p>Email : {donate_data.email}</p>
                            </td>
                            <td>
                                <p>Mobile : {donate_data.mobile}</p>
                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>
                                <p>Date Of Birth : {donate_data.date_of_birth}</p>
                            </td>
                            <td>
                                <p>Category : {donate_data.category}</p>
                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr  style={{display:money_display}}>
                            <td>
                                <p>Amount : {donate_data.money}</p>
                            </td>
                            <td>
                                <p>Payment Mode : {donate_data.payment_mode}</p>
                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr  style={{display:gadget_display}}>
                            <td>
                                <p>Gadgets : {donate_data.gadgets}</p>
                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr  style={{display:construct_display}}>
                            <td>
                                <p>Material : {donate_data.metrial}</p>
                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr  style={{display:address_display}}>
                            <td>
                                <p>Address : {donate_data.address}</p>
                            </td>
                            <td>
                                <p>Collection Date : {donate_data.collection_date}</p>
                            </td>
                        </tr>
                    </tbody>
                    </Table> */}
                    <Row>
                        <Col lg='7'><p><span className='p_color'>First Name</span> : {donate_data.first_name}</p></Col>
                        <Col lg='5'><p><span className='p_color'>Last Name</span> : {donate_data.last_name}</p></Col>
                    </Row>
                    <Row>
                        <Col lg='7'><p><span className='p_color'>Email</span> : {donate_data.email}</p></Col>
                        <Col lg='5'><p><span className='p_color'>Mobile</span> : {donate_data.mobile}</p></Col>
                    </Row>
                    <Row>
                        <Col lg='7'>
                                <p><span className='p_color'>Date Of Birth</span> : {donate_data.date_of_birth}</p>
                            </Col>
                            <Col lg='5'>
                                <p><span className='p_color'>Category</span> : {donate_data.category}</p>
                            </Col>
                    </Row>
                    <div style={{display:fields.money_display}}>
                    <Row >
                        <Col lg='7'><p><span className='p_color'>Amount</span> : {donate_data.amount}</p></Col>
                        <Col lg='5'><p><span className='p_color'>Payment Mode</span> : {donate_data.payment_method}</p></Col>
                    </Row>
                    </div>
                    <div style={{display:fields.gadget_display}}>
                    <Row >
                        <Col lg='7'><p><span className='p_color'>Gadgets</span> : {donate_data.gadget}</p></Col>
                    </Row>
                    </div>
                    <div style={{display:fields.construct_display}}>
                    <Row >
                        <Col lg='7'><p><span className='p_color'>Material</span> : {donate_data.material}</p></Col>
                    </Row>
                    </div>
                    <div style={{display:fields.address_display}}>
                    <Row  >
                        <Col lg='7'><p><span className='p_color'>Address</span> : {donate_data.address}</p></Col>
                        <Col lg='5'><p><span className='p_color'>Collection Date</span> : {donate_data.collection_date}</p></Col>
                    </Row>
                    </div>
                    <div className='d-flex justify-content-center pb-5' >
                        <Button className='m-3' onClick={hide}>Edit</Button>
                        <Button className='m-3' onClick={send}>submit</Button>
                    </div>
                </div>
        
    </div>
    <Footer/>
    </>
}
export default Donate