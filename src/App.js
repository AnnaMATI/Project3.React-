import React from "react";
import Nav from "./Header/Navbar";
import {Routes,Route, Form} from 'react-router-dom';
import About from "./Header/About"
import Economy from "./Header/Economy"
import './App.css'
import { Main, Item }  from "./Header/Main";
import Sub from "./Footer/Subscription"

function App() {
  return (
    <div>
    <Nav />
    <Routes>
    <Route path="/" element={<Main/>}/>
    <Route path="/about" element={<About />}/>
    <Route path="/economy" element={<Economy />}/>
    <Route path="/item/:id" element={<Item />} />
    </Routes>
    <Sub/> 
 
    </div>
  )
}
export default App;
