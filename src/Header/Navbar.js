import React from "react";
import {  BrowserRouter as Router, Link} from "react-router-dom"; 



export default function Nav() {
     return <nav>
          <div className="leftcorner">
               <h1>Economic news </h1>
               <Link to='/'> Home </Link>
               <Link to='/about'> About Industry </Link>
               <Link to='/economy'>Economy</Link>
               <input className="inp" />
          </div>
     </nav >
}