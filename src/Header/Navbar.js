import React from "react";
import {Link} from "react-router-dom"; 


export default function Nav() {
     return <nav>
          <div className="leftcorner">
               <h1>Economic news </h1>
               <Link to='/'> Home </Link>
               <Link to='/about'> About </Link>
               <Link to='/economy'>Economy</Link>
               <Link to='/contact'> Contant </Link>
               <input className="inp" />
          </div>
     </nav >
}