import { Link } from "react-router-dom"
import './home.css'
import { useEffect, useState } from "react"
import axios from "axios"
import { Col, Container, Row } from "react-bootstrap"

function Homepage() {
  // let [sponser, setsponsor] = useState([]);
  let [child, setchild] = useState([]);
  const [err, seterr] = useState(false);
  const [show, setShow] = useState(true);
  let [sponsored_child, setspon_child] = useState([]);
  let [unsponsor, setunsponsor] = useState([]);
  let [news,setnews] = useState([]);
  // let sponsored_child =[];
  // let unsponsor=[];

  let[display1, setdisplay1] = useState('none')
  let [i, seti] = useState(1)
  function menu(){
    if (i === 1){
      seti(0);
      setdisplay1('block')
    }
    else{
      seti(1);
      setdisplay1('none')
    }
  }

  useEffect(() => {
    let copy_news = [...news];
    axios
      .get("http://localhost:3003/admin/children")
      .then((res) => {
        setchild(res.data);
        console.log(res.data);

        let sponsored_child1 = res.data.filter((e) => {
          return e.sponsor === "yes";
        });
        let unsponsor1 = res.data.filter((e) => {
          return e.sponsor === "no";
        });
        setspon_child(sponsored_child1);
        setunsponsor(unsponsor1);
        return axios.get("http://localhost:3003/admin/donation");
      })
      .then((res) => {
        res.data.map((e) => {
          const givenDate = new Date(e.current_date);

          const today = new Date();
          today.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to zero

          if (givenDate.toDateString() === today.toDateString()) {
            console.log("The dates are the same (ignoring time).");
            // let copy_news = [...news];
            copy_news.push(e);
            setnews(copy_news);
          } else {
            console.log("The dates are different.");
          }
        });
        return axios.get("http://localhost:3003/admin/feed");
      })
      .then((res) => {
        res.data.map((e) => {
          const givenDate = new Date(e.current_date);

          const today = new Date();
          today.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to zero

          if (givenDate.toDateString() === today.toDateString()) {
            console.log("The dates are the same (ignoring time).");
            // let copy_news = [...news];
            copy_news.push(e);
            setnews(copy_news);
          } else {
            console.log("The dates are different.");
          }
        });
        return axios.get("http://localhost:3003/admin/occasion");
      })
      .then((res) => {
        res.data.map((e) => {
          const givenDate = new Date(e.current_date);

          const today = new Date();
          today.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to zero

          if (givenDate.toDateString() === today.toDateString()) {
            console.log("The dates are the same (ignoring time).");
            
            copy_news.push(e);
            setnews(copy_news);
          } else {
            console.log("The dates are different.");
          }
        });
      })
      .catch((err) => {
        console.log(err);
        seterr(true);
      })
      .finally(() => {
        setShow(false);
      });
  
  }, []);
  
  
  console.log("sponsored child", sponsored_child);
  console.log("unsponsored child", unsponsor);
  console.log("news",news)

  return (
    <>
      {show ? (
        <div className='success1'>
        <div className='success2'>
            <h2 className='p-5'>Loading</h2>
        </div>
    </div>
      ) : (
        <div className="bg">
          {/* <div className=" navbar d-flex px-5 py-3">
            <h2 className="flex-grow-1">Admin Page</h2>
            <Link to="/add_child">Add Child</Link>
          </div> */}
          <div className="px-3 py-3">
            <div className="sponser px-5 py-3">
              <h2>Sponsored children</h2>
              <div className="row_modify ">
                {sponsored_child.map((e) => {
                  return (
                    <>
                      <Col
                        lg="2"
                        md="6"
                        sm="6"
                        className="p-2 text_de col-sm-6 mobile"
                        key={e._id}
                      >
                        <Link to={`/sponsor/${e._id}`}>
                          <div className="box_sponsor p-3">
                            <div className="image_size">
                              <img src={e.profile} className="img-fluid" />
                            </div>
                            <p className="fw-bold">
                              {e.first_name} {e.last_name}
                            </p>
                            <p>{e.region}</p>
                          </div>
                        </Link>
                      </Col>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="px-3 pb-3">
            <div className="sponser px-5 py-3">
              <h2>Unsponsored children</h2>
              <div className="row_modify ">
                {unsponsor.map((e) => {
                  return (
                    <>
                      <Col
                        lg="2"
                        md="4"
                        sm="4"
                        className="p-2 mobile"
                        key={e._id}
                      >
                        <div className="box_sponsor p-3">
                          <div className="image_size">
                            <img src={e.profile} className="img-fluid" />
                          </div>
                          <p className="fw-bold">
                            {e.first_name} {e.last_name}
                          </p>
                          <p>{e.region}</p>
                        </div>
                      </Col>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="notofication-icon" onClick={menu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              class="bi bi-bell-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
            </svg>
          </div>
          <div className="news_box" style={{ display: display1 }} onClick={menu}>
            <h4>Today Donations</h4>
            <div className="hide-scroll">
              {news.length>0?(
              <ul>
                {news.map((e) => {
                  return (
                    <Link
                      to={
                        e.donation === "ordinary"
                          ? `/ordinar_don/${e._id}`
                          : e.donation === "Food"
                          ? `/feed_food/${e._id}`
                          : `/occasion_deta/${e._id}`
                      }
                    >
                      <li key={e._id}>
                        Mr/Mrs/ms {e.first_name} is Donate{" "}
                        {e.category
                          ? e.category + " in " + e.donation + " time."
                          : e.donation + " by " + e.share}
                      </li>
                    </Link>
                  );
                })}
              </ul>
              ):(<p>No new Donations</p>)}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default Homepage;