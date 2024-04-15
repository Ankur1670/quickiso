import React, {useState} from 'react'
import './contactus.css'
import { IoIosArrowForward } from "react-icons/io";
import i4 from '../../assets/contact-1.png'
import axios from "axios";

const client = axios.create({
    baseURL: import.meta.env.VITE__APP_URL,
    headers:{
        'Content-Type': 'application/json',

    },
});
const Contactus = () => {
    const [type, setType] = useState ([])
    const [data, setData] = useState ({})
    const handelSubmit = (e) => {
        e.preventDefault()
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
<span>Phone: {localStorage.getItem('mobile_number')} <br />
</span>
<span>{localStorage.getItem('email')}</span>

</div>
<div className="form_sec">
<form action="" method='post'>
    <label for="firstName" >Name:<span >*</span></label><br/>
  <input type="text" id="name" onChange={handelChange} name="firstName" className={'form-control'}/>
  <label for="lastName">Email:<span >*</span></label><br/>
  <input type="email" id="email" onChange={handelChange} name="email" className={'form-control'}/>

  <label for="phone">Phone:<span >*</span></label><br/>
  <input type="text" id="phone" onChange={handelChange} name="phone" className={'form-control'}/>
  <button className='btn btn-primary my-3 ' type={'submit'} onClick={handelSubmit}>Submit</button>

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
