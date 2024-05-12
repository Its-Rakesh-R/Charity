import { Col,Form,FloatingLabel, Button,Row, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import './sponser.css'
import axios from 'axios';
import Footer from '../homepage/footer';

function Sponser2(){

    useEffect(()=>{
      window.scrollTo(0,0)
    },[])

    const {id} = useParams();

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

    let[sponsor_data, setsponsor] = useState({
        'first_name':'',
        'last_name':'',
        'email':'',
        'mobile':'',
        'aadhare_number':'',
        'annual_income':'',
        'occaupation':'',
        'child_id':id,
        'address':'',
        'current_date':today,
    })

    let[fields, setfields] = useState({
        'preview_display':'none',
        'success_display':'none'
    })

    const select=(e)=>{
        setsponsor({
            ...sponsor_data,
            [e.target.name]:e.target.value
        })
    }

    function preview(e){
        
        let a =false
        for (let i in sponsor_data){
            if(sponsor_data[i] === ""){
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
    console.log(sponsor_data)

    function hide(e){
        e.preventDefault();
        let copy_field = {...fields}
        copy_field.preview_display='none'
        setfields(copy_field)
    }
    function send(){
        axios.post("http://localhost:3003/enduser/sponsor",sponsor_data)
        let copy_field = {...fields}
        copy_field.success_display='block'
        setfields(copy_field)
    }

    return (
      <>
        <div className="pt-5  pb-5 new_back_color">
          <div className="container">
            <div className="top_box">
              <Form
                className="normal_color1"
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
              >
                <h2 className="global_color pb-3 " id="transform">
                  Sponsor Form 2/3
                </h2>
                <Row className="my-3">
                  <Col md>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formPlaintextEmail"
                    >
                      <Form.Label column sm="3" lg="3" md="4">
                        First Name
                      </Form.Label>
                      <Col sm="9" lg="9" md="8">
                        <Form.Control
                          required
                          type="text"
                          placeholder="First Name"
                          name="first_name"
                          value={sponsor_data.first_name}
                          onChange={select}
                        />
                      </Col>
                    </Form.Group>
                  </Col>
                  <Col md>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formPlaintextPassword"
                    >
                      <Form.Label column sm="3" lg="3" md="4">
                        Last Name
                      </Form.Label>
                      <Col sm="9" lg="9" md="8">
                        <Form.Control
                          required
                          type="text"
                          placeholder="Last Name"
                          name="last_name"
                          value={sponsor_data.last_name}
                          onChange={select}
                        />
                      </Col>
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="my-3">
                  <Col md>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formPlaintextEmail"
                    >
                      <Form.Label column sm="3" lg="3" md="4">
                        Email
                      </Form.Label>
                      <Col sm="9" lg="9" md="8">
                        <Form.Control
                          required
                          type="email"
                          placeholder="Email"
                          name="email"
                          value={sponsor_data.email}
                          onChange={select}
                        />
                      </Col>
                    </Form.Group>
                  </Col>
                  <Col md>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formPlaintextPassword"
                    >
                      <Form.Label column sm="3" lg="3" md="4">
                        Mobile
                      </Form.Label>
                      <Col sm="9" lg="9" md="8">
                        <Form.Control
                          required
                          type="text"
                          placeholder="Mobile number"
                          name="mobile"
                          value={sponsor_data.mobile}
                          onChange={select}
                        />
                      </Col>
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="my-3">
                  <Col md>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formPlaintextEmail"
                    >
                      <Form.Label column sm="3" lg="3" md="4">
                        Aadhare Number
                      </Form.Label>
                      <Col sm="9" lg="9" md="8">
                        <Form.Control
                          required
                          type="number"
                          placeholder="Aadhare number"
                          name="aadhare_number"
                          value={sponsor_data.aadhare_number}
                          onChange={select}
                        />
                      </Col>
                    </Form.Group>
                  </Col>
                  <Col md>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formPlaintextEmail"
                    >
                      <Form.Label column sm="3" lg="3" md="4">
                        Annual Income
                      </Form.Label>
                      <Col sm="9" lg="9" md="8">
                        <Form.Control
                          required
                          type="text"
                          placeholder="Annual Income"
                          name="annual_income"
                          value={sponsor_data.annual_income}
                          onChange={select}
                        />
                      </Col>
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="my-3">
                  <Col md>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formPlaintextEmail"
                    >
                      <Form.Label column sm="3" lg="3" md="4">
                        Occaupation
                      </Form.Label>
                      <Col sm="9" lg="9" md="8">
                        <Form.Control
                          required
                          type="text"
                          placeholder="Occaupation"
                          name="occaupation"
                          value={sponsor_data.occaupation}
                          onChange={select}
                        />
                      </Col>
                    </Form.Group>
                  </Col>
                  <Col md>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formPlaintextEmail"
                    >
                      <Form.Label column sm="3" lg="3" md="4">
                        Address
                      </Form.Label>
                      <Col sm="9" lg="9" md="8">
                        <FloatingLabel
                          controlId="floatingTextarea2"
                          label="Address"
                        >
                          <Form.Control
                            required
                            as="textarea"
                            placeholder="Write a Address here"
                            style={{ height: "100px" }}
                            value={sponsor_data.address}
                            name="address"
                            onChange={select}
                          />
                        </FloatingLabel>
                      </Col>
                    </Form.Group>
                  </Col>
                </Row>
                <div className="d-flex justify-content-center">
                  <button
                    className="sponcer_btn"
                    onClick={preview}
                    type="submit"
                  >
                    Next
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
        <div style={{ display: fields.preview_display }} className="bg ">
          <div className="p-3 preview">
            <h3 className="global_color pb-3">Preview</h3>
            <Row>
              <Col lg="7">
                <p>
                  <span className="p_color">First Name</span> :{" "}
                  {sponsor_data.first_name}
                </p>
              </Col>
              <Col lg="5">
                <p>
                  <span className="p_color">Last Name</span> :{" "}
                  {sponsor_data.last_name}
                </p>
              </Col>
            </Row>
            <Row>
              <Col lg="7">
                <p>
                  <span className="p_color">Email</span> :{" "}
                  {sponsor_data.email}
                </p>
              </Col>
              <Col lg="5">
                <p>
                  <span className="p_color">Mobile</span> :{" "}
                  {sponsor_data.mobile}
                </p>
              </Col>
            </Row>
            <Row>
              <Col lg="7">
                <p>
                  <span className="p_color">Aadhare Number</span> :{" "}
                  {sponsor_data.aadhare_number}
                </p>
              </Col>
              <Col lg="5">
                <p>
                  <span className="p_color">Annual Income</span> :{" "}
                  {sponsor_data.annual_income}
                </p>
              </Col>
            </Row>

            <Row>
              <Col lg="7">
                <p>
                  <span className="p_color">Address</span> :{" "}
                  {sponsor_data.address}
                </p>
              </Col>
              <Col lg="5">
                <p>
                  <span className="p_color">Occaupation</span> :{" "}
                  {sponsor_data.occaupation}
                </p>
              </Col>
            </Row>
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
    );
}
export default Sponser2