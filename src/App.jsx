import {useEffect, useState} from 'react'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import axios from "axios";



const client = axios.create({
  baseURL: import.meta.env.VITE__APP_URL,
  headers:{
    'Content-Type': 'application/json',

  },
});
function App() {
  useEffect ( () => {
  client.get('/details/').then((r)=>{
    if(r.status===200){
      const data=r.data.find((obj)=>obj.name==='oneiso')
      console.log(data)
      Object.keys(data).map((obj)=>localStorage.setItem(obj,data[obj]))

    }
  })
  }, [] );
  return (
    <>
{/* <Navbar/>
<Banner/>
  <Route path='/' element={<Home home={true}/>}/>
<Footer/> */}
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home></Home>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/services' element={<Services/>}/>




</Routes>
</BrowserRouter>
    </>
  )
}

export default App
