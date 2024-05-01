import React from 'react'
import Navbar from '../component/navbar/Navbar'
import Banner from '../component/navbar/banner/Banner'
import Footer from '../component/footer/Footer'
import { render } from 'react-dom';
import ReactWhatsapp from 'react-whatsapp';
import { FloatingWhatsApp } from 'react-floating-whatsapp'

const Home = () => {
  return (
    <div>
      <Navbar/>
<Banner/>

<Footer/>
        <FloatingWhatsApp phoneNumber={localStorage.getItem('Whatsapp_number')}
                          accountName={localStorage.getItem(' Whatsapp_Account_name')}
                          message={localStorage.getItem('Whatsapp_wellcome_message')} />
    </div>
  )
}

export default Home
