import React,{useEffect, useState} from "react";
import './Layouts.css';
import {FaBars, FaTimes} from 'react-icons/fa';
import {NavLink} from 'react-router-dom';
import oulogo from '../imgs/oulogo.png'
function Header(){
    const [click, setClick] = useState(false);
    const [mobileView, setMobileView] = useState(false)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    const showButton = () => {
        window.innerWidth <= 1400 ? setMobileView(true) : setMobileView(false);
        
    };

    useEffect(() => {
        showButton();

        window.addEventListener('resize', showButton);
        return () => {
            window.removeEventListener('resize', showButton)
        }
    }, []);


return(
    <div className="headerwrapper">

    <div className='navbar-container'>
          <div className='header-logo'>
            <div className='img1'>
            <img className="oulogo" src={oulogo} alt='OUlogo' /></div>
            <div className='navbar-logo' >
                    ReScuE Labs 
                </div>
            
            </div>
            

         <div className="navigation">
        <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="nav-container">
        
            <ul className={click ? 'navbar-ul active' : 'navbar-ul'}>
              <li className="nav-item">
                <NavLink className="nav-link" to="/home" onClick={closeMobileMenu} activeclassname='nav-links-avtive'>
                  Home
                  
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink  to="/labs" className="nav-link" onClick={closeMobileMenu} activeclassname='nav-links-avtive'>
                  Labs
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink  to="/publications" className="nav-link" onClick={closeMobileMenu} activeclassname='nav-links-avtive'>
                  Publications
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink  to="/about" className="nav-link" onClick={closeMobileMenu} activeclassname='nav-links-avtive'>
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        
      </nav>
    </div>
                   

            </div>

    
            <div className='menu-icon' onClick={handleClick}>
                    <i>{mobileView ?  click ? <FaTimes/> :<FaBars/> : null} </i>
                </div>


    </div>





);


}

export default Header;