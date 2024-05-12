import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './sponsor_detail.css'
import { Col, Row } from "react-bootstrap";

function Sponser_detail(){
    let {id} = useParams();
    let [sponsor,setsponsor] = useState({})
    useEffect(()=>{
        axios.get(`http://localhost:3003/admin/sponsor${id}`)
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
        <h2>sponsor detail</h2>
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
        <Col><p>aadhare number </p></Col><Col><p>: {sponsor.aadhare_number}</p></Col>
        </Row>
        <Row>
        <Col><p>annual income </p></Col><Col><p>: {sponsor.annual_income}</p></Col>
        </Row>
        <Row>
        <Col><p>occupation </p></Col><Col><p>: {sponsor.occaupation}</p></Col>
        </Row>
        <Row>
        <Col><p>address </p></Col><Col><p>: {sponsor.address}</p></Col>
        </Row>
        
        </div>
    </div>
    </>
}
export default Sponser_detail