import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './sponsor_detail.css'
import { Col, Row } from "react-bootstrap";

function Feed_food(){
    let {id} = useParams();
    let [sponsor,setsponsor] = useState({})
    useEffect(()=>{
        axios.get(`http://localhost:3003/admin/feed_food${id}`)
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
        <h2>Food Donation</h2>
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
        <Col><p>Date </p></Col><Col><p>: {sponsor.date}</p></Col>
        </Row>
        <Row>
        <Col><p>Breakfast </p></Col><Col><p>: {sponsor.breakfast}</p></Col>
        </Row>
        <Row>
        <Col><p>Lunch </p></Col><Col><p>: {sponsor.lunch}</p></Col>
        </Row>
        <Row>
        <Col><p>Dinner </p></Col><Col><p>: {sponsor.dinner}</p></Col>
        </Row>
        <Row>
        {
            sponsor.share === 'food'?(
                <>
                <Col><p>Address </p></Col><Col><p>: {sponsor.address}</p></Col>
                </>
            ):(
                <>
                <Col><p>Total price </p></Col><Col><p>: {sponsor.total_price}</p></Col>
                </>
            )
        }
        </Row>
        </div>
    </div>
    </>
}
export default Feed_food