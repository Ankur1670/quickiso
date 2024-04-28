import React from 'react'
import './aboutsec.css'
import { IoIosArrowForward } from "react-icons/io";
import { FaBusinessTime } from "react-icons/fa6";
import { FaChartArea } from "react-icons/fa";

import i2 from '../../assets/i2.jpg'
const Aboutsec = () => {
  return (
    

    <div className='about_section '>
      <div className="ab_sec">

      <div className="about_heading text-center">
      <h2>About Us
</h2>
<a className='' href="">ONE Iso Certification</a>  <span><IoIosArrowForward /> About us
  </span>
      </div>
      </div>
    <div className="about_image">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
<img className='img-fluid' src={i2} alt="image" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 getknow">
          <span className="sub-title6 aos-init aos-animate   " data-aos="fade-up" data-aos-delay="0">GET TO KNOW MORE</span>
<h2>We Have More Than 20+ Years Of Practical Finance Industries
</h2>
<p>Morem ipsum dolor sit amet consectetur adipiscing elita florai psum dolor sit amet consecteture Borem ipsum dolor sitter consectetur adipiscing elita florai rem ipsum dolor sit amet consectetu.

</p>
<div className="icon">
<FaBusinessTime /> 
<li className='aaa'>Growing Business <p>Finance helps you to convert into a strategic asset get.</p></li>


</div>

<div className="icon2">
<FaChartArea />
<li className='aaa'>Finance Investment
 <p>Finance helps you to convert into a strategic asset get.</p></li>


</div>
<div className="about-button">
<button className='btn btn-primary'>Our Services</button>

</div>
          </div>
        </div>
      </div>
    </div>
 
 <div className="spacility_section">
  <div className="container">
    <div className="row">
      
    </div>
  </div>
 </div>
    </div>
  )
}

export default Aboutsec
