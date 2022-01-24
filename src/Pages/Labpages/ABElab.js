import React from "react";
import { Titlebar } from "../Webcomponents";
import './labpage.css'
import abelab from '../../imgs/access-control-lab.jpg'
import abemanual from './Labdoc/Lab_Attribute_based_Encryption.pdf'
import abecontext from './Labdoc/ABE-lab-context.rar'
function ABElab(){



    return(
        <div className="labwrapper">
           <Titlebar>Attribute-based Encryption (ABE) Lab</Titlebar>
            <div className="labpage-part">
                <div className="labpage-subtitle">Overview</div>
                <div className="overview-detial">
            <div className="overview-imge"><img className="section-img" src={abelab} alt='ABElab' /></div>
                <div className="overview-text">This lab will help students better understand Role-based Access Control (RBAC) and cryptographic technologies of Attribute-based Encryption (ABE). Students will be introduced to two different ABE: Ciphertext-Policy ABE (CP-ABE) and Key-Policy ABE (KP-ABE) and their applications.</div>

            </div>

            </div>

            <div className="labpage-part">
                <div className="labpage-subtitle">Learning Objectives</div>
                <ul className="labpage-ul1">
                    <li>Describe attribute-based encryption, including CP-ABE and KP-ABE.</li>
                    <li>Compose the security policies according to various realistic scenarios.</li>
                    <li>Integrate security policies into crypto-keys.</li>
                    <li>Encrypt and decrypt data using correct crypto-keys.</li>
                </ul>
                <ul className="labpage-ul2">
                    <li><a href={abemanual}>Lab manual</a></li>
                    <li><a href={abecontext}>HE cyptographic context</a></li>
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
                    <li><a href="https://www.youtube.com/watch?v=9JX7ShrUYyQ&t=5s">YouTube Video</a></li>
                    
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
    
    export default ABElab;