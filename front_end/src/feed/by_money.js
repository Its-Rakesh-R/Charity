import { Col,Form,FloatingLabel, Button,Row } from 'react-bootstrap';
import Footer from "../homepage/footer";
import breakfast from './images/breakfast.jpg';
import lunch from './images/lunch.jpeg'
import dinner from './images/dinner.png'
import './by_money.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

function By_money(){
    const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  let [olddata, setold] = useState({})
  useEffect(() => {
      window.scrollTo(0,0)
    // console.log("from inside effect");
      axios.get("http://localhost:3003/enduser/feed")
      .then((res) => {
        setold(res.data);
      })
  }, []);
  // console.log(olddata)
  
    let[array,setarray] = useState([
        {
            id:1,
            name:'Breakfast',
            img: breakfast,
            disc:'Breakfast have three items idly, dosa, pongal Menu change by day routine',
            price_disc:'₹ 20,000 for 500 children',
            b_color:'',
            add_btn:'Add',
            price:20000
        },
        {
            id:2,
            name:'Lunch',
            img: lunch,
            disc:'Luch have three items sambar, lemon, full Meals Menu change by day routine',
            price_disc:'₹ 30,000 for 500 children',
            b_color:'',
            add_btn:'Add',
            price:30000
        },
        {
            id:3,
            name:'Dinner',
            img: dinner,
            disc:'Dinner have three items idly, dosa, chapati Menu change by day routine',
            price_disc:'₹ 20,000 for 500 children',
            b_color:'',
            add_btn:'Add',
            price:20000
        },
    ])
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
        'date':'',
        'breakfast':'No',
        'lunch':'No',
        'dinner':'No',
        'total_price':0,
        'share':'money',
        'current_date':today,
        'donation':'Food'
    })

    const select=(e)=>{
        // let verify = olddata.findIndex(function(a){
        //     return a.date === feed_data.date
        // })
        // const user = new Date(feed_data.date);
        // const currentDate = new Date(); 
        // // if (user>currentDate && verify.length === 0) {
        //     let copy_field = { ...fields };
        //     copy_field.alert_classname = "";
        //     copy_field.alert_display2 = "none";
        //     setfields(copy_field);
        // }else if(user<currentDate){
        //     let copy_field = {...fields}
        //     copy_field.alert_display ='none'
        //     setfields(copy_field)
        // }else 
        // if(verify !== -1){
        //     let copy_field = {...fields}
        //     copy_field.alert_classname=''
        //     copy_field.alert_display2 ='none'
        //     setfields(copy_field)
        // }
        let copy_field = { ...fields };
        let selectedDate = new Date(feed_data.date);
        let currentDate = new Date();
        currentDate.setHours(12, 50, 0, 0);
        if (selectedDate > currentDate) {
          copy_field.alert_display = "none";
          copy_field.alert_classname = "";
        }
        setfields(copy_field)

        setfeed({
            ...feed_data,
            [e.target.name]:e.target.value
        })
    }

    function add(id){
        let ind = array.findIndex((ele)=>ele.id==id);
        let copiedArray = [...array]
        if(copiedArray[ind].add_btn === 'Add'){
            copiedArray[ind].b_color='green'
            copiedArray[ind].add_btn='Added'
            let copy_feed = {...feed_data}
            let name = copiedArray[ind].name
            if(name === 'Breakfast'){
                copy_feed.breakfast = 'Yes'
            }
            else if(name === 'Lunch'){
                copy_feed.lunch = 'Yes'
            }
            else if(name === 'Dinner'){
                copy_feed.dinner = 'Yes'
            }
            copy_feed.total_price=copy_feed.total_price+copiedArray[ind].price
            setarray(copiedArray)
            setfeed(copy_feed)
        }
        else if(copiedArray[ind].add_btn === 'Added'){
            copiedArray[ind].b_color=''
            copiedArray[ind].add_btn='Add'
            let copy_feed = {...feed_data}
            let name = copiedArray[ind].name
            if(name === 'Breakfast'){
                copy_feed.breakfast = 'No'
            }
            else if(name === 'Lunch'){
                copy_feed.lunch = 'No'
            }
            else if(name === 'Dinner'){
                copy_feed.dinner = 'No'
            }
            copy_feed.total_price=copy_feed.total_price-copiedArray[ind].price
            setarray(copiedArray)
            setfeed(copy_feed)
        }
    }
    function preview(e){
        // const user = new Date(feed_data.date);
        // const currentDate = new Date(); 
        // let verify = olddata.findIndex(function(a){
        //     return a.date == feed_data.date
        // })
        // console.log(verify)
        let selectedDate = new Date(feed_data.date);
        let currentDate = new Date();
        // currentDate.setHours(0, 0, 0, 0);
        // if (user > currentDate) {
        //   let copy_field = { ...fields };
        //   copy_field.alert_classname = "";
        //   copy_field.alert_display = "none";
        //   setfields(copy_field);
        // } else 
        // if (verify !== -1) {
        //   let copy_field = { ...fields };
        //   copy_field.alert_classname = "";
        //   copy_field.alert_display2 = "none";
        //   return setfields(copy_field);
        // } else {
          
        //   e.preventDefault();
        //   let copy_field = { ...fields };
        //   copy_field.alert_classname = "date_indicate";
        //   copy_field.alert_display = "none";
        //   copy_field.alert_display2 = "block";
        //   return setfields(copy_field);
        // }
        let copy_field = { ...fields };
        if (selectedDate < currentDate) {
          copy_field.alert_classname = "date_indicate";
          copy_field.alert_display2 = "none";
          copy_field.alert_display = "block";
        }
        
        let a =false
        for (let i in feed_data){
            if(feed_data[i] === ""){
                    a=true
                    break  
            }
        }
        // else if(selectedDate.getTime() === feedDate.getTime()) {
        //   copy_field.alert_classname = "date_indicate";
        //   copy_field.alert_display = "none";
        //   copy_field.alert_display2 = "block";
        // }
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
    
    // console.log(feed_data)

    return<>
        <div id='back_color1' className='pt-5  pb-5'>
    <Form className='' noValidate validated={validated} onSubmit={handleSubmit}>
    <div className="container">
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
        <Col lg='6' md='6' sm='12'>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="3"lg='3' md='4'>
            Date
            </Form.Label>
            <Col sm="9" lg='9' md='8'>
            <Form.Control required type='date' placeholder='Date' name='date' value={feed_data.date} onChange={select}/>
            </Col>
        </Form.Group>
        </Col>
    </Row>
    </div>
    </div>
    <div className="container">
            <Row >
                {array.map((e)=>{
                    return<div className='p-3 col-lg-4 col-sm-12' key={e.id}>
                    <div className='box1 p-2'>
                        <div >
                        <h3>{e.name}</h3>
                        <div className='img_hight img-fluid'><img src={e.img} /></div>
                        <p>
                            {e.disc}
                        </p>
                        <p>{e.price_disc}</p>
                        </div>
                        <div >
                            <p className='feed-btn' type='submit' onClick={()=>add(e.id)} style={{backgroundColor:e.b_color}} >{e.add_btn}</p>
                        </div>
                    </div>
                    </div>
                })}
            </Row>
            <Row className='p-3'>
                <div className='box2 p-3'>
                    <div className='flex-grow-1'>
                        <h4>Total : {feed_data.total_price}</h4>
                    </div>
                    <div>
                        <Button type='submit'  onClick={preview} className='next'>next</Button>
                    </div>
                </div>
                <div className='d-flex' >
                    <div className='flex-grow-1'></div>
                    <p className='error_msg' style={{display:fields.alert_display}}>Select a valid date..!</p>
                    <p className='error_msg' style={{display:fields.alert_display2}}>This date already booked try another date..!</p>
                </div>
            </Row>
    </div>
    </Form>
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
                <span className="p_color">Date</span> :
                {feed_data.date}
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
                  <span className="p_color">total_price</span> :{" "}
                  {feed_data.total_price}
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
export default By_money