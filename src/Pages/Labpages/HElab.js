import React from "react";
import { Titlebar } from "../Webcomponents";
import './labpage.css'
import helab from '../../imgs/he-lab.png'
import hemanual from './Labdoc/Lab-HE-Manual.pdf'
import hecontext from './Labdoc/HE-lab-context.rar'
function HElab(){



    return(
        <div className="labwrapper">
           <Titlebar>Homomorphic Encryption (HE) Lab</Titlebar>
            <div className="labpage-part">
                <div className="labpage-subtitle">Overview</div>
                <div className="overview-detial">
            <div className="overview-imge"><img className="section-img" src={helab} alt='Helab' /></div>
                <div className="overview-text">This lab will help students better understand the purpose of Homomorphic Encryption (HE) and the confidentiality issues in a supply chain. In particular, students will learn the basic HE operations. The applications of using HE cryptographic operations in the command-line and program level.</div>

            </div>

            </div>

            <div className="labpage-part">
                <div className="labpage-subtitle">Learning Objectives</div>
                <ul className="labpage-ul1">
                    <li>Be able to use HE cryptographic operations at the command-line and program level.</li>
                    <li>Be able to solve real-world problems with HE.</li>
                </ul>
                <ul className="labpage-ul2">
                    <li><a href={hemanual}>Lab manual</a></li>
                    <li><a href={hecontext}>HE cyptographic context</a></li>
                </ul>
            </div>

        <div className="labpage-part">
        <div className="labpage-subtitle">Suggested Duratione</div>
                <ul className="labpage-ul2">
                    <li>Supervised (closely-guided lab session): <p>1 hours</p></li>
                    <li>Unsupervised (take-home project): <p>1.5 hours</p></li>
                </ul>


        </div>

        <div className="labpage-part">
        <div className="labpage-subtitle">Tutorial Videos</div>
                <ul className="labpage-ul2">
                    <li><a href="https://www.youtube.com/watch?v=qxxLchwYyr4&t=3s">YouTube Video</a></li>
                    
                </ul>


        </div>
        <div className="labpage-part">
        <div className="labpage-subtitle">Contact</div>
                <ul className="labpage-ul2">
                    <li>If you are interested in our ReScuE labs, please <a href="mailto:anyiliu@oakland.edu">contact us</a> for more labs.</li>
                    
                </ul>


        </div>

        </div>
    
    
    
    
    
    );
    
    
    }
    
    export default HElab;