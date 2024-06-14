import React, {useEffect, useState} from 'react';
import './banner.css';
import img1 from '../../../assets/7358610.png';
import get from '../../../assets/7450159.png'
import c from '../../../assets/c.png'
import em from '../../../assets/7450186.png'
import { LuPhoneCall } from "react-icons/lu";
import axios from "axios";
import {useNavigate} from "react-router-dom";


const client = axios.create({
    baseURL: import.meta.env.VITE__APP_URL,
    headers:{
        'Content-Type': 'application/json',

    },
});
const Card = (obj) => {

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
const Banner = () => {
    const navigate =useNavigate();
    const [type, setType] = useState ([])
    const [data, setData] = useState ({})
    const [happy_customer, setHappy_customer] = useState ([])
    useEffect ( () => {
        client.get('/details/').then((r)=>{
            if(r.status===200){
                console.log(r.data)
                const data=r.data.find((obj)=>obj.name==='oneiso')
                console.log(data)
                setHappy_customer(data.happy_customer)
            }
        })
    }, [] );
    useEffect ( () => {
        client.get('/certificate/type/views/').then((r)=>{
            if(r.status===200){
                setType(r.data)
            }
        })
    }, [] );
    const handelSubmit = (e) => {
console.log(data)
        const form =new FormData()
        form.append('name',data['name'])
        form.append('email',data['email'])
        form.append('phone',data['phone'])
        form.append('certificate_type',data['certificate_type'])
        console.log(form)
        client.post('/requestview/',data).then((r)=>{
            if(r.status===200){
                alert(r.data.message)
            }
        })
    }
    const handelChange = (e) => {
        setData( {...data,[e.target.id]:e.target.value})
    }
  return (
   <div className="banner-section">
    <div className="container ">
    <span className="sub-title aos-init aos-animate" data-aos="fade-up" data-aos-delay="0">We Are Expert In This Field</span>
    <div className="row">
        <div className="col-lg-5 col-md-5 col-sm-12">
            <h2>Grow your business using ISO certification . <br /> One certifications will help you</h2>
            <p>we specialize in guiding businesses through the ISO certification process, helping them achieve excellence in quality management, environmental responsibility, occupational health and safety, and more.</p>
            <button className="  service_btn" onClick={()=>navigate('/services')}>Our Services</button>
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
<h2>Why Choose ONE Iso <br />
Certification for Your ISO <br />
Certificate?</h2>  

</div>
<p>ONE Iso Certification is committed to excellence, ensuring each project receives our full expertise. We prioritize cost-effectiveness, foster teamwork for fresh ideas, and maintain an uncompromising standard of excellence. With a customer-first approach, we guarantee on-time delivery and expert guidance.</p>


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
                    <button onClick={()=>navigate('/services')} className=' service_btn s_btn'>See All Services</button>
                </div>
            </div>
        </div>

    </div>
    


    <div className="card_section">
        <div className="container">
            <div className="row">
                {type.map(Card)}

            </div>
        </div>
    </div>



    <div className="certification_section">
        <div className="container">
        <span className="sub-title4 aos-init aos-animate   " data-aos="fade-up" data-aos-delay="0">We Are Expert In This Field</span>
<h2 className='text-center mt-2'>REQUEST A QUOTE FOR ISO CERTIFICATION</h2>
<div className="row">
    <div className="col-lg-12 col-md-12 col-sm-12">
    <form action={import.meta.env.VITE__APP_URL+'/requestview'} method="post"/>
        
      <label form="certificate" >Select Certificate:<span >*</span></label><br/>
      <select id="certificate_type" name="certificate_type"
              onChange={handelChange}
              // onClick={handelChange}
              required={true}>
          <option value={"none"}  >-------</option>
          {type?.map((obj,key)=><option value={obj.id} key={key} >{obj.name}</option>)}









      </select><br/><br/>

      <label for="name" name={'name'}>Name:<span >*</span></label><br/>
      <input type="text" id="name" name="firstName" onChange={handelChange} required={'true'}/>  <br /> <br />


      <label for="email">Email:<span >*</span></label><br/>
      <input type="email" id="email" name="email" onChange={handelChange} required={'true'}/><br/><br/>

      <label for="phone">Phone Number: <span >*</span></label><br/>
      <input type="tel" id="phone" name="phone" onChange={handelChange} required={'true'}/><br/><br/>

    <button className='service_btn' onClick={handelSubmit} type='submit'>Submit</button>
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
<p>At ONE Iso Certification, we pride ourselves on empowering businesses with ISO certification. With 235+ organizations certified and 9,000+ satisfied clients, we ensure excellence and compliance in the global marketplace</p>
<p>Our commitment to quality and professionalism has earned us the trust of businesses of all sizes. Trust in our expertise to guide you through the certification process and unlock new opportunities for growth and success.</p>
<p>At ONE Iso Certification, we pride ourselves on empowering businesses with ISO certification. With 235+ organizations certified and 9,000+ satisfied clients, we ensure excellence and compliance in the global marketplace</p>

                </div>
            </div>
        </div>
    </div>


   <div className="contact_section">
    <div className="container">
        <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 call  mx-2">
            <LuPhoneCall /> <span>Call For More Info <br />{localStorage.getItem('mobile_number')}</span>

            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
<h2>Let’s Request a Schedule For Free Consultation</h2>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
<button className='service_btn' onClick={()=>navigate('/contact')}>Contact Us </button>
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
    <form action="" method='post' className={''}>
    <label for="firstName">Name:<span >*</span></label>
  <input type="text" id="name" name="name" onChange={handelChange} className={'form-control'}/>

  <label for="email">Email:<span >*</span></label><br/>
  <input type="email" id="email" name="email" onChange={handelChange} className={'form-control'}/>

        <label for="email">Phone:<span >*</span></label><br/>
  <input type="email" id="phone" name="email" onChange={handelChange} className={'form-control'}/>
    
  <button className=' service_btn mt-3' onClick={handelSubmit}>Submit</button>

    </form>
</div>
        </div>
    </div>
   </div>
       <div>
           <h2 className={'text-center'}>Happy Customer</h2>
           <div className={'row px-4'}>
               {happy_customer?.map((obj,key)=><div key={key} className={'col-md-1 col-12'}> <img  className={'w-100'} src={obj.img}/></div>)}


           </div>
       </div>
   </div>
  )
}

export default Banner
