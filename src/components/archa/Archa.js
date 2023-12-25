import React from 'react'
import archa from "../../assets/nav.gif"
import "./Archa.css"
import { useLocation } from 'react-router-dom';
function Archa() {
    const location = useLocation();
    if (location.pathname.includes('login') || location.pathname.includes('admin')) {
      return <></>;
    }
    return (
        <div className="container">
            <img
             src={archa}
              alt="" 
              className='uzum'
              />
        </div>
    )
}

export default Archa
