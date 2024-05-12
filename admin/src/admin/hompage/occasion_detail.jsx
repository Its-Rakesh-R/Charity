import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './sponsor_detail.css'
import { Col, Row } from "react-bootstrap";

function Occassion_detail(){
    let {id} = useParams();
    let [sponsor,setsponsor] = useState({})
    useEffect(()=>{
        axios.get(`http://localhost:3003/admin/Occassion_deta${id}`)
        .then((res)=>{
            setsponsor(res.data)
            console.log(res.data)
        })
        .catch((err)=>{
            console.log('err',err)
        })
    },[id])
    console.log(id)
    console.log("spon",sponsor)
    return<>
    <div className=" center_box1">
        <div className="middle_box">
        <h2>Celebration day Donation</h2>
        <Row>
        <Col><p>first name</p></Col><Col> <p>: {sponsor.first_name}</p></Col>
        </Row>
        <Row>
        <Col><p>last name </p></Col><Col>  <p>: {sponsor.last_name}</p></Col>
        </Row>
        <Row>
        <Col><p>email</p> </Col><Col><p>: {sponsor.email}</p></Col>
        </Row>
        <Row>
        <Col><p>mobile </p></Col><Col><p>: {sponsor.mobile}</p></Col>
        </Row>
        <Row>
        <Col><p>Date of Birth </p></Col><Col><p>: {sponsor.date_of_birth}</p></Col>
        </Row>
        <Row>
        <Col><p>Category </p></Col><Col><p>: {sponsor.category}</p></Col>
        </Row>
        <Row>
            {sponsor.category === 'money'?(<><Col><p>Amount </p></Col><Col><p>: {sponsor.amount}</p></Col></>):(<><Col><p>Collection Date </p></Col><Col><p>: {sponsor.collection_date}</p></Col></>)}
        </Row>
        {/* <Row>
        <Col><p>occupation </p></Col><Col><p>: {sponsor.occaupation}</p></Col>
        </Row> */}
        <Row>
            {sponsor.payment_method?(<><Col><p>Payment Mode </p></Col><Col><p>: {sponsor.payment_method}</p></Col></>):(<><Col><p>Address </p></Col><Col><p>: {sponsor.address}</p></Col></>)}
        </Row>
        
        </div>
    </div>
    </>
}
export default Occassion_detail