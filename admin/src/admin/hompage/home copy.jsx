import { Link } from "react-router-dom"
import './home.css'
import { useEffect, useState } from "react"
import axios from "axios"
import { Col, Container, Row } from "react-bootstrap"

function Homepage() {
  let [sponser, setsponsor] = useState([]);
  let [child, setchild] = useState([]);
  const [err, seterr] = useState(false);
  const [show, setShow] = useState(true);
  let [sponsored_child, setspon_child] = useState([]);
  let [unsponsor, setunsponsor] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3003/admin/sponsors")
      .then((res) => {
        setsponsor(res.data);
      })
      .catch((err) => {
        console.log(err);
        seterr(true);
      })
      .finally(() => {
        setShow(false);
      });
    axios
      .get("http://localhost:3003/admin/children")
      .then((res) => {
        setchild(res.data);
        console.log(res.data);
        let copy_data = [...child];
        let copy_data2 = [...sponser]
        let sponsored_child_temp = [];
        copy_data2.map((e) => {
          let data = copy_data.find((ele) => {
            return ele._id === e.child_id;
          });
          sponsored_child_temp.push(data);
        });

        const unsponsor_temp = copy_data.filter(
          (ele) =>
            !sponsored_child_temp.some((sponsored) => sponsored._id === ele._id)
        );
        setspon_child(sponsored_child_temp);
        setunsponsor(unsponsor_temp);
        console.log(sponsored_child);
        console.log(unsponsor);
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
  console.log(sponser)

  return (
    <>
      {show ? (
        <p>loading... .... ...... .....</p>
      ) : (
        <div className="bg">
          <div className=" navbar d-flex px-5 py-3">
            <h2 className="flex-grow-1">Admin Page</h2>
            <Link to="/add_child">Add Child</Link>
          </div>
          <div className="px-4 py-5">
            <div className="sponser px-5 py-4">
              <h2>Sponsored children</h2>
              <div className="row_modify ">
                {sponsored_child.map((e) => {
                  return (
                    <>
                      <Col lg="3" className="p-2 text_de">
                        <Link to={`/sponsor/${e._id}`}>
                          <div className="box_sponsor p-3">
                            <div className="image_size">
                              <img src={e.profile} className="img-fluid" />
                            </div>
                            <h4>
                              {e.first_name} {e.last_name}
                            </h4>
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
          <div className="px-4 my-5">
            <div className="sponser px-5 py-4">
              <h2>Unsponsored children</h2>
              <div className="row_modify ">
                {unsponsor.map((e) => {
                  return (
                    <>
                      <Col lg="3" className="p-2">
                        <div className="box_sponsor p-3">
                          <div className="image_size">
                            <img src={e.profile} className="img-fluid" />
                          </div>
                          <h4>
                            {e.first_name} {e.last_name}
                          </h4>
                          <p>{e.region}</p>
                        </div>
                      </Col>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default Homepage;