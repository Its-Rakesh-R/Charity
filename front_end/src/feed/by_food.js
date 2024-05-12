import { Col,Form,FloatingLabel, Button,Row, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import Footer from "../homepage/footer"
import { useEffect, useState } from 'react';
import './by_food.css';
import axios from 'axios';

function By_food(){

    useEffect(()=>{
      window.scrollTo(0,0)
    },[])

    const [value, setValue] = useState([1, 3]);
    const handleChange = (val) => setValue(val);
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
    let[fields,setfields] = useState({
        'preview_display':'none',
        'alert_display':'none',
        'alert_display2':'none',
        'alert_classname':'',
        'success_display':'none'
    })
    const today = new Date();
    let [feed_data, setfeed] = useState({
        'first_name':'',
        'last_name':'',
        'email':'',
        'mobile':'',
        'date_of_birth':'',
        'breakfast':'No',
        'lunch':'No',
        'dinner':'No',
        'address':'',
        'date':'',
        'share':'food',
        'current_date':today,
        'donation':'Food'
    })
    const select=(e)=>{
        setfeed({
            ...feed_data,
            [e.target.name]:e.target.value
        })
    }
    console.log(feed_data)
    let [auc_click,setauc]=useState({
        'click_btn1' : true,
        'click_btn2' : true,
        'click_btn3' : true,
    })
    let copy_auc = {...auc_click}
    const click1=(e)=>{
        let copy_feed = {...feed_data};
        if(auc_click.click_btn1){
            copy_feed.breakfast='yes';
            copy_auc.click_btn1=false;
            setauc(copy_auc)
            setfeed(copy_feed)
        }else{
            copy_feed.breakfast='No';
            copy_auc.click_btn1=true;
            setauc(copy_auc)
            setfeed(copy_feed)
        }
    }
    const click2=(e)=>{
        let copy_feed = {...feed_data};
        if(auc_click.click_btn2){
            copy_feed.lunch='yes';
            copy_auc.click_btn2=false;
            setauc(copy_auc)
            setfeed(copy_feed)
        }else{
            copy_feed.lunch='No';
            copy_auc.click_btn2=true;
            setauc(copy_auc)
            setfeed(copy_feed)
        }
    }
    const click3=(e)=>{
        let copy_feed = {...feed_data};
        if(auc_click.click_btn3){
            copy_feed.dinner='yes';
            copy_auc.click_btn3=false;
            setauc(copy_auc)
            setfeed(copy_feed)
        }else{
            copy_feed.dinner='No';
            copy_auc.click_btn3=true;
            setauc(copy_auc)
            setfeed(copy_feed)
        }
    }
    function preview(e){
        let copy_field = { ...fields }
        let a =false
        for (let i in feed_data){
            if(feed_data[i] === ""){
                    a=true
                    break  
            }
        }
        if (a) {
            copy_field.preview_display = "none";
          } else {
            if (feed_data.total_price != 0) {
              e.preventDefault();
              copy_field.preview_display = "block";
            }
          }
          setfields(copy_field);
    }

    function hide() {
        let copy_field = { ...fields };
        copy_field.preview_display = "none";
        setfields(copy_field);
      }
      function send() {
        axios.post('http://localhost:3003/enduser/feed',feed_data)
        let copy_field = {...fields}
        copy_field.success_display='block'
        setfields(copy_field)
      }

    return<>
    <div id='back_color1' className='pt-5  pb-5'>
    <div className="container">
    <Form className='new_color' noValidate validated={validated} onSubmit={handleSubmit}>
    <h2 className='global_color pb-3 ' id='transform'>Feed homeless child</h2>
    <Row className='my-3'> 
        <Col md>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="3"lg='3' md='4'>
            First Name
            </Form.Label>
            <Col sm="9" lg='9' md='8'>
            <Form.Control required type='text' placeholder='First Name' name='first_name' value={feed_data.first_name} onChange={select} />
            </Col>
        </Form.Group>
        </Col>
        <Col md>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="3"lg='3' md='4'>
            Last Name
            </Form.Label>
            <Col sm="9" lg='9' md='8'>
            <Form.Control required type='text' placeholder='Last Name' name='last_name' value={feed_data.last_name}  onChange={select}/>
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
            <Form.Control required type='email' placeholder='Email' name='email' value={feed_data.email} onChange={select}/>
            </Col>
        </Form.Group>
        </Col>
        <Col md>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="3"lg='3' md='4'>
            Mobile
            </Form.Label>
            <Col sm="9" lg='9' md='8'>
            <Form.Control required type='text' placeholder='Mobile number' name='mobile' value={feed_data.mobile} onChange={select}/>
            </Col>
        </Form.Group>
        </Col>
    </Row>
    <div className={fields.alert_classname}>
    <Row className='my-3'> 
        <Col md>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="3"lg='3' md='4'>
            Date Of Birth
            </Form.Label>
            <Col sm="9" lg='9' md='8'>
            <Form.Control required type='date' placeholder='Date' name='date_of_birth' value={feed_data.date_of_birth} onChange={select}/>
            </Col>
        </Form.Group>
        </Col>
        <Col md>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="3"lg='3' md='4'>
            Meals
            </Form.Label>
            <Col sm="9" lg='9' md='8'>
            <div className='col-form-label'>
            <div class="form-check form-check-inline form-switch">
                <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" name='breakfast' value="yes" onChange={click1}/>
                <label class="form-check-label" for="inlineCheckbox1">Breakfast</label>
                </div>
                <div class="form-check form-check-inline form-switch">
                <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" name='lunch' value="yes" onChange={click2}/>
                <label class="form-check-label" for="inlineCheckbox2">Lunch</label>
                </div>
                <div class="form-check form-check-inline form-switch">
                <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" name='dinner' value="yes" onChange={click3}/>
                <label class="form-check-label" for="inlineCheckbox3">Dinner</label>
            </div>
            </div>
            </Col>
        </Form.Group>
        </Col>
    </Row>
    <Row className='my-3'> 
        <Col md>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="3"lg='3' md='4'>
            Address
            </Form.Label>
            <Col sm="9" lg='9' md='8'>
                <FloatingLabel controlId="floatingTextarea2" label="Address">
                    <Form.Control required as="textarea" placeholder="Write a Address here" style={{ height: '100px' }} value={feed_data.address} name='address' onChange={select}/>
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
            <Form.Control required type='date' placeholder='Date' name='date' value={feed_data.date} onChange={select}/>
            </Col>
        </Form.Group>
        </Col>
    </Row>
    </div>
    <div className='d-flex justify-content-center pb-1' >
        <button className='feed-btn'  onClick={preview} type='submit'>Next</button>
    </div>
    </Form>
    </div>
    </div>
    <div style={{ display: fields.preview_display }} className="bg ">
        <div className="p-3 preview">
          <h3 className="global_color pb-3">Preview</h3>

          <Row>
            <Col lg="7">
              <p>
                <span className="p_color">First Name</span> :{" "}
                {feed_data.first_name}
              </p>
            </Col>
            <Col lg="5">
              <p>
                <span className="p_color">Last Name</span> :{" "}
                {feed_data.last_name}
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg="7">
              <p>
                <span className="p_color">Email</span> : {feed_data.email}
              </p>
            </Col>
            <Col lg="5">
              <p>
                <span className="p_color">Mobile</span> : {feed_data.mobile}
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg="7">
              <p>
                <span className="p_color">Date Of Birth</span> :
                {feed_data.date_of_birth}
              </p>
            </Col>
            <Col lg="5">
              <p>
                <span className="p_color">Breakfast</span> :
                {feed_data.breakfast}
              </p>
            </Col>
          </Row>
          <div >
            <Row>
              <Col lg="7">
                <p>
                  <span className="p_color">lunch</span> : {feed_data.lunch}
                </p>
              </Col>
              <Col lg="5">
                <p>
                  <span className="p_color">Dinner</span> :{" "}
                  {feed_data.dinner}
                </p>
              </Col>
            </Row>
          </div>
          <div >
          <Row>
              <Col lg="7">
                <p>
                  <span className="p_color">Address</span> : {feed_data.address}
                </p>
              </Col>
              <Col lg="5">
                <p>
                  <span className="p_color">Date</span> :{" "}
                  {feed_data.date}
                </p>
              </Col>
            </Row>
          </div>
          <form>
          <div className="d-flex justify-content-center pb-5">
            <button className="m-3 feed-btn" onClick={hide}>
              Edit
            </button>
            <button className="m-3 feed-btn" onClick={send}>
              submit
            </button>
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
export default By_food