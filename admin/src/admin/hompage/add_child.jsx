import { Col, Container, Form, Row } from 'react-bootstrap'
import './add_child.css'
import axios from 'axios';
import profile1 from './images/profile.png'
import { useState } from 'react'

function Add_child(){
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }

      setValidated(true);
    };

    const [image, setImage] = useState(profile1);
    const [file, setFile] = useState('');

    let[child_data, setchild] = useState({
        'first_name':'',
        'last_name':'',
        'date_of_birth':'',
        'age':'',
        'region':'',
        'personal_identity':'',
        'profile':profile1,
        'sponsor':'no',
    })

    let[fields, setfields] = useState({
        'preview_display':'none',
        'success_display':'none'
    })

    const select=(e)=>{
        setchild({
            ...child_data,
            [e.target.name]:e.target.value
        })
    }

    function date(e){
        let copy_data = {...child_data}
            let birthDate = new Date(e.target.value);
            const today = new Date();
            const birthYear = birthDate.getFullYear();
            const birthMonth = birthDate.getMonth();
            const birthDay = birthDate.getDate();
            
            let age1 = today.getFullYear() - birthYear;
            
            if (today.getMonth() < birthMonth || 
                (today.getMonth() === birthMonth && today.getDate() < birthDay)) {
                age1--;
            }
            copy_data.date_of_birth = e.target.value
            copy_data.age= age1
            setchild(copy_data)
    }

    console.log(child_data)


    const add_image=(event)=>{
        let copy_data = {...child_data}

            
                setFile(event.target.files[0])
                
                setImage(URL.createObjectURL(event.target.files[0]));
                copy_data.profile = URL.createObjectURL(event.target.files[0])
                setchild(copy_data)
                console.log(child_data)
          
            console.log('images',image)

    }

    function preview(e){
        
        let a =false
        for (let i in child_data){
            if(child_data[i] === ''){
                a=true
                break  
            }
        }
        if(a){
            console.log('some error this')
        }
        else{
            
            // e.preventDefault();

            const formdata = new FormData();
            formdata.append('file',file)
            formdata.append('first_name',child_data.first_name)
            formdata.append('last_name',child_data.last_name)
            formdata.append('date_of_birth',child_data.date_of_birth)
            formdata.append('age',child_data.age)
            formdata.append('region',child_data.region)
            formdata.append('personal_identity',child_data.personal_identity)
            axios.post('http://localhost:3003/admin/add_child',formdata)
            .then(()=>{
                console.log('uploaded')
            })
            .catch((err)=>{
                console.log('not uploaded')
                console.log(err)
            })
            
        }
        let copy_field = {...fields}
        copy_field.success_display='block'
        setfields(copy_field)
    }
    
    return (
      <div className="bg_color">
        <Container>
          <div className="top_box py-2">
            <div className=" center_box ">
              <Form
                className="inner_color p-4"
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
              >
                <Row>
                  <Col lg="4">
                    {/* <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail"> */}
                    <div className="img_size pt-4">
                      <img src={child_data.profile} alt="profile" />
                      {/* {image?(<img src={image} alt=''/>):(<img src={child_data.profile} alt='profile'/>)} */}
                    </div>
                    {/* </Form.Group> */}
                    {/* <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail"> */}
                    <div className="center1">
                      <input
                        type="file"
                        name="profile"
                        className="file_design"
                        onChange={add_image}
                      />
                    </div>
                    {/* </Form.Group> */}
                  </Col>
                  <Col lg="8">
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
                          value={child_data.first_name}
                          onChange={select}
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formPlaintextEmail"
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
                          value={child_data.last_name}
                          onChange={select}
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formPlaintextEmail"
                    >
                      <Form.Label column sm="3" lg="3" md="4">
                        Date Of Birth
                      </Form.Label>
                      <Col sm="9" lg="9" md="8">
                        <Form.Control
                          required
                          type="date"
                          placeholder="Date Of Birth"
                          name="date_of_birth"
                          value={child_data.date_of_birth}
                          onChange={date}
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formPlaintextEmail"
                    >
                      <Form.Label column sm="3" lg="3" md="4">
                        Age
                      </Form.Label>
                      <Col sm="9" lg="9" md="8">
                        <Form.Control
                          required
                          type="number"
                          placeholder="Age"
                          name="age"
                          value={child_data.age}
                          onChange={select}
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formPlaintextEmail"
                    >
                      <Form.Label column sm="3" lg="3" md="4">
                        Region
                      </Form.Label>
                      <Col sm="9" lg="9" md="8">
                        <Form.Control
                          required
                          type="text"
                          placeholder="Region"
                          name="region"
                          value={child_data.region}
                          onChange={select}
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formPlaintextEmail"
                    >
                      <Form.Label column sm="3" lg="3" md="4">
                        Personal Identity
                      </Form.Label>
                      <Col sm="9" lg="9" md="8">
                        <Form.Control
                          required
                          type="text"
                          placeholder="write personal identity"
                          name="personal_identity"
                          value={child_data.personal_identity}
                          onChange={select}
                        />
                      </Col>
                    </Form.Group>
                  </Col>
                </Row>
                <div className="d-flex justify-content-center py-4">
                  <button className="feed-btn" onClick={preview} type="submit">
                    Upload
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </Container>
        <div style={{ display: fields.success_display }}>
          <div className="success1">
            <div className="success2">
              <h2 className="p-5">Success</h2>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Add_child