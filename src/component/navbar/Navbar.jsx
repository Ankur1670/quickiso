import React ,{useState} from 'react'
import './navbar.css';
import logoq from '../../assets/logoq.png'
import { BiPhoneCall } from "react-icons/bi";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
      };
  return (
    <nav className="navbar ">
    <div className="navbar-logo img-fluid"><img src={localStorage.getItem('logo')} alt="" /></div>
    <ul className={isOpen ? "navbar-links active" : "navbar-links "}>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/services">Services</a></li>
      <li><a href="/contact">Contact</a></li>
      <li>
                                           
                                            
                                            <span>Hot Line Number</span> 
                                            <a href={"tel:+"+localStorage.getItem('mobile_number')}>{localStorage.getItem('mobile_number')}</a>
                                            
                                        </li>
    </ul>
    <button className="navbar-toggle" onClick={toggleNavbar}>
      <span className="navbar-toggle-icon"></span>
    </button>
  </nav>
  )
}

export default Navbar
