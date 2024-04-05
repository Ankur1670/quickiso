import React from 'react';
import './banner.css';
import img1 from '../../../assets/unlock.png';
import get from '../../../assets/g2.png'
import arrow from '../../../assets/1.png'
import c from '../../../assets/c.png'
import ra from '../../../assets/ra.png'
import em from '../../../assets/em.png'
import { LuPhoneCall } from "react-icons/lu";

const Banner = () => {
    
  return (
   <div className="banner-section">
    <div className="container bg-light">
    <span className="sub-title aos-init aos-animate" data-aos="fade-up" data-aos-delay="0">We Are Expert In This Field</span>
    <div className="row">
        <div className="col-lg-5 col-md-5 col-sm-12">
            <h2>Unlock the Potential of Your Business with ISO Certification</h2>
            <p>we specialize in guiding businesses through the ISO certification process, helping them achieve excellence in quality management, environmental responsibility, occupational health and safety, and more.</p>
            <button className="  service_btn">Our Services</button>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 image_section">
<img  className='img-fluid' src={img1} alt="UnlockyourPotential" />
        </div>
    </div>


    </div>



    <div className="get_section mt-5">
        <div className="container">
        <div className="row ">
        <div className="col-lg-6 col-md-6 col-sm-12 ">
            <img src={get} alt="" className='img-fluid' />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 get_content ">
        <span className="sub-title2 aos-init aos-animate" data-aos="fade-up" data-aos-delay="0">GET TO KNOW US
</span>
<div className="heading mt-2">
<h2>Why Choose Quick ISO <br />
Certification for Your ISO <br />
Certificate?</h2>  

</div>
<p>Quick ISO Certification is committed to excellence, ensuring each project receives our full expertise. We prioritize cost-effectiveness, foster teamwork for fresh ideas, and maintain an uncompromising standard of excellence. With a customer-first approach, we guarantee on-time delivery and expert guidance.</p>


<ul className="key_point">
    <li>
        <span className='svg_item'><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"><path d="M11 22A11 11 0 1 0 0 11a11 11 0 0 0 11 11zM5 10h8.051V7.1l2.9 2.9H16v.05l1 1L13.051 15v-3H5z"/></svg></span>
<span className='points'>Commitment to Excellence</span>
    </li>
    <li>
        <span className='svg_item'><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"><path d="M11 22A11 11 0 1 0 0 11a11 11 0 0 0 11 11zM5 10h8.051V7.1l2.9 2.9H16v.05l1 1L13.051 15v-3H5z"/></svg></span>
<span className='points'>Cost-Effectiveness</span>
    </li>
    <li>
        <span className='svg_item'><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"><path d="M11 22A11 11 0 1 0 0 11a11 11 0 0 0 11 11zM5 10h8.051V7.1l2.9 2.9H16v.05l1 1L13.051 15v-3H5z"/></svg></span>
<span className='points'>Solid Teamwork</span>
    </li>
    <li>
        <span className='svg_item'><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"><path d="M11 22A11 11 0 1 0 0 11a11 11 0 0 0 11 11zM5 10h8.051V7.1l2.9 2.9H16v.05l1 1L13.051 15v-3H5z"/></svg></span>
<span className='points'>Standard of Excellence</span>
    </li>
    <li>
        <span className='svg_item'><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"><path d="M11 22A11 11 0 1 0 0 11a11 11 0 0 0 11 11zM5 10h8.051V7.1l2.9 2.9H16v.05l1 1L13.051 15v-3H5z"/></svg></span>
<span className='points'>Delivery Commitment</span>
    </li>
    <li>
        <span className='svg_item'><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"><path d="M11 22A11 11 0 1 0 0 11a11 11 0 0 0 11 11zM5 10h8.051V7.1l2.9 2.9H16v.05l1 1L13.051 15v-3H5z"/></svg></span>
<span className='points'>Talk to an Expert</span>
    </li>
</ul>
    </div>
      </div>
        </div>
       
    </div>



    <div className="explore_section">
        <div className="container">
            <div className="row ">
                <div className="col-lg-8 col-md-8 col-sm-12 mt-5">
                <span className="sub-title3 aos-init aos-animate " data-aos="fade-up" data-aos-delay="0">We Are Expert In This Field</span>
<div className="heading2 mt-2">
    <h2>Explore Our ISO <br />
Certification Services</h2>
</div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <button className='btn btn-primary s_btn'>See All Services</button>
                </div>
            </div>
        </div>

    </div>
    


    <div className="card_section">
        <div className="container">
            <div className="row">
                 <div className="col-lg-3 col-md-6 col-sm-12">
                 <div class="card my-2">
  <img class="card-img-top w-25 px-2 mx-2 my-2" src={c} alt="Card image cap"/>
  <div class="card-body">
    <h2 class="card-title">ISO 22000:2018 <br /> ₹4000/-
</h2>
    <p class="card-text">Food Safety Management Systems: Ensure the safety and quality of food products and supply chains.</p>
    <a href="#" class="btn ">
                                                See Details                                                </a>
                                               
  </div>
</div>
                 </div>
                 <div className="col-lg-3 col-md-6 col-sm-12">
                 <div class="card my-2">
  <img class="card-img-top w-25 px-2 mx-2 my-2" src={c} alt="Card image cap"/>
  <div class="card-body">
    <h2 class="card-title">ISO 14001:2015 ₹2500/-
</h2>
    <p class="card-text">Environmental Management Systems: Demonstrate your commitment to environmental responsibility and sustainability.</p>
    <a href="#" class="btn ">
                                                See Details                                                </a>
                                               
  </div>
</div>
                 </div>
                 <div className="col-lg-3 col-md-6 col-sm-12">
                 <div class="card my-2">
  <img class="card-img-top w-25 px-2 mx-2 my-2" src={c} alt="Card image cap"/>
  <div class="card-body">
    <h2 class="card-title">ISO 13485:2016 ₹4000/-
</h2>
    <p class="card-text">Medical Devices Quality Management Systems: Ensure the quality and safety of medical devices throughout their lifecycle.</p>
    <a href="#" class="btn ">
                                                See Details                                                </a>
                                               
  </div>
</div>
                 </div>
                 <div className="col-lg-3 col-md-6 col-sm-12">
                 <div class="card my-2">
  <img class="card-img-top w-25 px-2 mx-2 my-2" src={c} alt="Card image cap"/>
  <div class="card-body">
    <h2 class="card-title">ISO 20000:2011 ₹5000/-
</h2>
    <p class="card-text">IT Service Management Systems: Improve the efficiency and effectiveness of your IT service delivery.</p>
    <a href="#" class="btn ">
                                                See Details                                                </a>
                                               
  </div>
</div>
                 </div>

                 <div className="col-lg-3 col-md-6 col-sm-12">
                 <div class="card my-2">
  <img class="card-img-top w-25 px-2 mx-2 my-2" src={c} alt="Card image cap"/>
  <div class="card-body">
    <h2 class="card-title">ISO 22000:2018 ₹4000/-
</h2>
    <p class="card-text">Food Safety Management Systems: Ensure the safety and quality of food products and supply chains.</p>
    <a href="#" class="btn ">
                                                See Details                                                </a>
                                               
  </div>
</div>
                 </div>

                 <div className="col-lg-3 col-md-6 col-sm-12">
                 <div class="card my-2">
  <img class="card-img-top w-25 px-2 mx-2 my-2" src={c} alt="Card image cap"/>
  <div class="card-body">
    <h2 class="card-title">ISO 29993:2010 ₹6000/-
</h2>
    <p class="card-text">Learning Services for Non-Formal Education and Training: Enhance the quality and effectiveness of your training and educational programs.</p>
    <a href="#" class="btn ">
                                                See Details                                                </a>
                                               
  </div>
</div>
                 </div>

                 <div className="col-lg-3 col-md-6 col-sm-12">
                 <div class="card my-2">
  <img class="card-img-top w-25 px-2 mx-2 my-2" src={c} alt="Card image cap"/>
  <div class="card-body">
    <h2 class="card-title">ISO 27001:2022 ₹4000/-
</h2>
    <p class="card-text">Information Security Management Systems: Protect your sensitive information and data assets from security threats.</p>
    <a href="#" class="btn ">
                                                See Details                                                </a>
                                               
  </div>
</div>
                 </div>

                 <div className="col-lg-3 col-md-6 col-sm-12">
                 <div class="card my-2">
  <img class="card-img-top w-25 px-2 mx-2 my-2" src={c} alt="Card image cap"/>
  <div class="card-body">
    <h2 class="card-title">ISO 45001:2018 ₹3000/-
</h2>
    <p class="card-text">Occupational Health and Safety Management Systems: Ensure a safe and healthy work environment for your employees while meeting legal and regulatory requirements.</p>
    <a href="#" class="btn ">
                                                See Details                                                </a>
                                               
  </div>
</div>
                 </div>


                 <div className="col-lg-3 col-md-6 col-sm-12">
                 <div class="card my-2">
  <img class="card-img-top w-25 px-2 mx-2 my-2" src={c} alt="Card image cap"/>
  <div class="card-body">
    <h2 class="card-title">ISO 22000:2018 <br /> ₹4000/-
</h2>
    <p class="card-text">Food Safety Management Systems: Ensure the safety and quality of food products and supply chains.</p>
    <a href="#" class="btn ">
                                                See Details                                                </a>
                                               
  </div>
</div>
                 </div>
                 <div className="col-lg-3 col-md-6 col-sm-12">
                 <div class="card my-2">
  <img class="card-img-top w-25 px-2 mx-2 my-2" src={c} alt="Card image cap"/>
  <div class="card-body">
    <h2 class="card-title">ISO 14001:2015 ₹2500/-
</h2>
    <p class="card-text">Environmental Management Systems: Demonstrate your commitment to environmental responsibility and sustainability.</p>
    <a href="#" class="btn ">
                                                See Details                                                </a>
                                               
  </div>
</div>
                 </div>
                 <div className="col-lg-3 col-md-6 col-sm-12">
                 <div class="card my-2">
  <img class="card-img-top w-25 px-2 mx-2 my-2" src={c} alt="Card image cap"/>
  <div class="card-body">
    <h2 class="card-title">ISO 13485:2016 ₹4000/-
</h2>
    <p class="card-text">Medical Devices Quality Management Systems: Ensure the quality and safety of medical devices throughout their lifecycle.</p>
    <a href="#" class="btn ">
                                                See Details                                                </a>
                                               
  </div>
</div>
                 </div>
                 <div className="col-lg-3 col-md-6 col-sm-12">
                 <div class="card my-2">
  <img class="card-img-top w-25 px-2 mx-2 my-2" src={c} alt="Card image cap"/>
  <div class="card-body">
    <h2 class="card-title">ISO 20000:2011 ₹5000/-
</h2>
    <p class="card-text">IT Service Management Systems: Improve the efficiency and effectiveness of your IT service delivery.</p>
    <a href="#" class="btn ">
                                                See Details                                                </a>
                                               
  </div>
</div>
                 </div>
            </div>
        </div>
    </div>



    <div className="certification_section">
        <div className="container">
        <span className="sub-title4 aos-init aos-animate   " data-aos="fade-up" data-aos-delay="0">We Are Expert In This Field</span>
<h2 className='text-center mt-2'>REQUEST A QUOTE FOR ISO CERTIFICATION</h2>
<div className="row">
    <div className="col-lg-12 col-md-12 col-sm-12">
    <form action="" method="post"/>
  <label for="certificate" >Select Certificate:<span >*</span></label><br/>
  <select id="certificate" name="certificate" >
    <option value="certificate1" >Certificate 1</option>
    <option value="certificate2">Certificate 2</option>
    <option value="certificate3">Certificate 3</option>
    <option value="certificate3">Certificate 3</option>
    <option value="certificate3">Certificate 3</option>
    <option value="certificate3">Certificate 3</option>

    <option value="certificate3">Certificate 3</option>
    


    



  </select><br/><br/>

  <label for="firstName">First Name:<span >*</span></label><br/>
  <input type="text" id="firstName" name="firstName"/>  <br /> <br />
  <label for="lastName">Last Name:<span >*</span></label><br/>
  <input type="text" id="lastName" name="lastName"/> <br /> <br />

  <label for="email">Email:<span >*</span></label><br/>
  <input type="email" id="email" name="email"/><br/><br/>

  <label for="phone">Phone Number: <span >*</span></label><br/>
  <input type="tel" id="phone" name="phone" required/><br/><br/>

<button className='btn btn-primary'>Submit</button>
<form />
    </div>
</div>

        </div>
        
        
    </div>


    <div className="empower_section">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
<img className='img-fluid' src={em} alt="" />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                <span className="sub-title5 aos-init aos-animate   " data-aos="fade-up" data-aos-delay="0">EMPOWERING BUSINESSES, ENSURING EXCELLENCE</span>
<h2 className=' mt-2'>Plan your business strategy
with Our Experts</h2>
<p>At Quick ISO Certification, we pride ourselves on empowering businesses with ISO certification. With 235+ organizations certified and 9,000+ satisfied clients, we ensure excellence and compliance in the global marketplace</p>
<p>Our commitment to quality and professionalism has earned us the trust of businesses of all sizes. Trust in our expertise to guide you through the certification process and unlock new opportunities for growth and success.</p>
<p>At Quick ISO Certification, we pride ourselves on empowering businesses with ISO certification. With 235+ organizations certified and 9,000+ satisfied clients, we ensure excellence and compliance in the global marketplace</p>

                </div>
            </div>
        </div>
    </div>


   <div className="contact_section">
    <div className="container">
        <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 call  mx-2">
            <LuPhoneCall /> <span>Call For More Info <br />+91 95483 50112</span>

            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
<h2>Let’s Request a Schedule For Free Consultation</h2>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
<button className='btn btn-primary'>Contact Us </button>
            </div>
        </div>
    </div>
   </div>

   <div className="request_section">
    <div className="container">
        <div className="row">
<div className="col-lg-6 col-md-6 col-sm-12">
    <h2>Request a Call Back</h2>
    <p>Ever find yourself staring at your computer screen <br /> a good consulting slogan to come to mind? <br /> Oftentimes.</p>
</div>
<div className="col-lg-6 col-md-6 col-sm-12">
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
  )
}

export default Banner
