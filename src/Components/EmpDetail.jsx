import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const EmpDetail = () => {

    const { empid } = useParams();
    const [empdata, setAPIDataMore] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3001/employee/${empid}`)
                .then((response) => {
                    setAPIDataMore(response.data);
                }).catch((err) => {
                    console.log(err.message);
                })
              }, [])
  return (
    <div>
            {/* <div className="row">
                <div className="offset-lg-3 col-lg-6"> */}

               <div className="container">
                
            <div className="card row" style={{ "textAlign": "left" }}>
                <div style={{ "textAlign": "center", color: 'black' }}>
                    <h2> Profile</h2>
                </div>
                <div className="card-body"></div>

                {empdata &&
                    <div><h6>Employe No : <b>{empdata.id}</b></h6>
                        <h6>Employee Name : <b>{empdata.name}</b></h6>
                        <h6>Age : {empdata.age}</h6>
                        <h6>Gender : {empdata.gender}</h6>
                        <h6>Salary: {empdata.salary}</h6>
                        <h6>Years Of Experience: {empdata.yearsOfExperience}</h6>
                        <Link className="btn btn-danger" to="/">Back to Listing</Link>
                    </div>
                }
            </div>
            </div>
            {/* </div>
            </div> */}
        </div >
  )
}

export default EmpDetail