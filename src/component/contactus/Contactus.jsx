import React from 'react'
import './contactus.css'
import { IoIosArrowForward } from "react-icons/io";
import i4 from '../../assets/contact-1.png'

const Contactus = () => {
  return (
    <div className='contactus_section'>
      <div className="con_sec">

<div className="contactus_heading text-center">
<h2>Contact Us
</h2>
<a className='' href="">Quick Iso Certification</a>  <span><IoIosArrowForward /> Contact us
</span>
</div>
</div>

<div className="ourcontact_section mt-4">
    <div className="container">
        <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
<img src={i4} alt="" className="img-fluid"/>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 ourcontact_heading">
<h2>Our Contacts
</h2>
<h4>Let's connect
</h4>
<div className="span_Sec">
<span>Phone: +91 95483 50112 <br />
</span>
<span>info@quickisocertification.com</span>

</div>
<div className="form_sec">
<form action="" method='post'>
    <label for="firstName">First Name:<span >*</span></label><br/>
  <input type="text" id="firstName" name="firstName"/>  <br /> <br />
  <label for="lastName">Last Name:<span >*</span></label><br/>
  <input type="text" id="lastName" name="lastName"/> <br /> <br />

  <label for="email">Email:<span >*</span></label><br/>
  <input type="email" id="email" name="email"/><br/><br/>
  <button className='btn btn-primary '>Submit</button>

    </form>
</div>


            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Contactus
