import React from 'react'
import './footer.css'
import logo from '../../assets/logoq.png'
import { LuPhoneCall } from "react-icons/lu";
import { IoMdTime } from "react-icons/io";
import { IoIosMail } from "react-icons/io";


const Footer = () => {
  return (
    <div className='footer_section'>
        <div className="container ">
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12">
<img className='img-fluid mt-2' src={localStorage.getItem('logo')}  />
<p className='mx-5'>Unleash pure business</p>
<ul>
    <li> <span className='mx-2'> <LuPhoneCall /> </span>{localStorage.getItem('mobile_number')}</li>
    <li><span className='mx-2'><IoMdTime />
</span>24*7 service available</li>
    <li > <span className='mx-2'><IoIosMail />
</span>{localStorage.getItem('email')}</li>
</ul>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 menu">

<p>Menu</p>

    <li>Our Services</li>
    <li>About US</li>
    <li>Contact us</li>


                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 news">
                <p>Our Newsletter</p>
                <li>Sign up to Privitar’s weekly newsletter to get the latest updates.</li>
                </div>
            </div>
        </div>
       
    </div>
  )
}

export default Footer
