import React, {useEffect, useState} from 'react'
import './servicessec.css'
import { IoIosArrowForward } from "react-icons/io";
import c from '../../assets/c.png'
import axios from "axios";

const client = axios.create({
    baseURL: import.meta.env.VITE__APP_URL,
    headers:{
        'Content-Type': 'application/json',

    },
});
const Card = (obj) => {
    console.log(obj)
  return(
      <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="card my-2">
              <img className="card-img-top w-25 px-2 mx-2 my-2" src={c} alt="Card image cap"/>
              <div className="card-body">
                  <h2 className="card-title">{obj.name} <br /> ₹{obj.price}/-
                  </h2>
                  <p className="card-text">{obj.description}</p>
                  <a href="#" className="btn ">
                      See Details                                                </a>

              </div>
          </div>
      </div>


  )
}
const Servicessec = () => {
    const [type, setType] = useState ([])

    useEffect ( () => {
        client.get('/certificate/type/views/').then((r)=>{
            if(r.status===200){
                console.log(r.data)
                setType(r.data)
            }
        })
    }, [] );
  return (
    <div className='ourservice'>
      <div className="ser_sec">
      <div className="ourservice_heading text-center">
<h2>Our Services
</h2>
<a className='' href="">ONE Iso Certification</a>  <span><IoIosArrowForward /> Contact us
</span>
</div>
</div>
<div className="container">
<div className="service_card">
<span className="sub-title8 aos-init aos-animate mt-5   " data-aos="fade-up" data-aos-delay="0">WHAT WE DO FOR YOU</span>
<div className="row">
    <div className="col-lg-6 col-md-6 col-sm-12 ">
        <h2>Explore Our ISO Certification <br />
Services</h2>
    </div>
</div>
<div className="container ">
<div className="row">
                {type.map(Card)}

            </div>
</div>


</div>
</div>

      </div>
  )
}

export default Servicessec
