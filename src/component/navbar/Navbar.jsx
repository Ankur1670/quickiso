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
    <div className="navbar-logo img-fluid"><img src={logoq} alt="" /></div>
    <ul className={isOpen ? "navbar-links active" : "navbar-links "}>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/services">Services</a></li>
      <li><a href="/contact">Contact</a></li>
      <li>
                                           
                                            
                                            <span>Hot Line Number</span> 
                                            <a href={"tel:+"+import.meta.env.VITE__PHONE_NUMBER}>+{import.meta.env.VITE__PHONE_NUMBER}</a>
                                            
                                        </li>
    </ul>
    <button className="navbar-toggle" onClick={toggleNavbar}>
      <span className="navbar-toggle-icon"></span>
    </button>
  </nav>
  )
}

export default Navbar
