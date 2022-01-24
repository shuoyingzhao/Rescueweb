import React from "react";
import './Labs.css';
import helab from '../imgs/he-lab.png'
import access from '../imgs/access-control-lab.jpg'
import android from '../imgs/android_malware_construction.png'
import icon from '../imgs/icon.webp'
import { Titlebar } from "./Webcomponents";
import {NavLink} from 'react-router-dom';

function Labs(){



return(
    <div className="Labswrapper">
        <div className="lab-container">
        <div className="lab-part">
        <div className="lab-section">
        <div className="lab-section-img"><img className="section-img" src={helab} alt='Helab' /></div>
        <div className="lab-section-title"><NavLink to="/">Homomorphic Encryption (HE) Lab</NavLink></div>

        </div>

        <div className="lab-section">
        <div className="lab-section-img"><img className="section-img" src={access} alt='Access' /></div>
        <div className="lab-section-title"><NavLink to="/">Attribute-based Encryption (ABE) Lab</NavLink></div>

        </div>
        </div>
        <div className="lab-part">
        <div className="lab-section">
        <div className="lab-section-img"><img className="section-img" src={android} alt='Android' /></div>
        <div className="lab-section-title"><NavLink to="/">Developing Mobile Malware</NavLink></div>

        </div>

        <div className="lab-section">
        <div className="lab-section-img"><img className="section-img" src={icon} alt='Icon' /></div>
        <div className="lab-section-title"><NavLink to="/">Mobile Malware Analysis and Detection</NavLink></div>

        </div>
        
    </div>
    </div>
    
    <Titlebar>More labs are ready upon your requst.</Titlebar>
    <div className="lab-contact">If you are interested in our ReScuE labs, please <a href="mailto:anyiliu@oakland.edu">contact us</a> for more labs.</div>

    </div>





);


}

export default Labs;