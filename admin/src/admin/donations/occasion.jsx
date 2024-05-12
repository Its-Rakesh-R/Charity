import axios from "axios";
import { useEffect, useState } from "react";
import './donation.css';

function Occasion(){
    let[data, setdata] = useState([])
    const [err, seterr] = useState(false);
    const [show, setShow] = useState(true);
    let i =1
    useEffect(()=>{
        axios.get("http://localhost:3003/admin/occasion")
        .then((res)=>{
            setdata(res.data)
        })
        .catch((err) => {
            console.log(err);
            seterr(true);
          })
        .finally(() => {
            setShow(false);
          });
    },[])



    return<>
    {show ? (
        <p>loading... .... ...... .....</p>
      ) :(
    <div className="bg1">
    <div className="p-4 table">
        <div className="table_row">
        <div className='pb-4 pr-4 table_head'>S.No</div>
            <div className=' table_head'>First Name</div>
            <div className=' table_head'>Last Name</div>
            <div className=' table_head'>Email</div>
            <div className=' table_head'>Mobile</div>
            <div className=' table_head'>Date Of Birth</div>
            <div className=' table_head'>Address/online</div>
            <div className=' table_head'>Collection Date</div>
            <div className=' table_head'>Category</div>
            <div className=' table_head'>Donation</div>
        </div>
    {
                data.map((e)=>{
                    return <div key={e._id} className=' table_row'  to={`/sponser2/${e._id}`} >
                        <div className=' table_cell'>{i++}</div>
                        <div className=' table_cell'>{e.first_name}</div>
                        <div className=' table_cell'>{e.last_name}</div>
                        <div className=' table_cell'>{e.email}</div>
                        <div className=' table_cell'>{e.mobile}</div>
                        <div className=' table_cell'>{e.date_of_birth}</div>
                        <div className=' table_cell'>{e.address?(e.address):('payment method is '+e.payment_method)}</div>
                        <div className=' table_cell'>{e.collection_date}</div>
                        <div className=' table_cell'>{e.category}</div>
                        <div className=' table_cell'>{e.amount?('₹ '+e.amount):('clothes donation')}</div>

                    </div>
                })
            }
    </div>
    </div>)}
    </>
}
export default Occasion;