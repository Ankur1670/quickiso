import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import {BrowserRouter, Routes, Route,} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

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
