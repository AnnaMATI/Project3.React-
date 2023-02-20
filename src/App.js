import React from "react";
import Nav from "./Header/Navbar";
import {Routes,Route, useParams} from 'react-router-dom';
import About from "./Header/About"
import Economy from "./Header/Economy"
import Contact from "./Header/Contact"
import './App.css'
import Main from "./Header/Main";


function App() {
  return (
    <div>
    <Nav />
    <Routes>
    <Route path="/" element={<Main/>}/>
    <Route path="/about" element={<About />}/>
    <Route path="/contact" element={<Contact />}/>
    <Route path="/economy" element={<Economy />}/>
    </Routes>
    </div>
  )
}
export default App;
