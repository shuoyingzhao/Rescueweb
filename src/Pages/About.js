import React from "react";
import './About.css';
import { Titlebar } from "./Webcomponents";
import liu from '../imgs/CSE-Liu.png'
import fu from '../imgs/proffu.jpg'
import ou from '../imgs/oulogo.png'
import nsf from '../imgs/nsf-logo.png'
import msgc from '../imgs/msgc_jpg_color.jpg'
function About(){



return(
    <div className="Aboutwrapper">
        <Titlebar>Members</Titlebar>
     <div className="faculty">
     <div className="faculty-title">Faculty</div>
        <div className="prof">
            
        <div className="faculty-img"><img className="liu-img" src={liu} alt="Prof.Liu"/></div>
        <div className="prof-detial">
                <li>Anyi Liu</li>
                <li>Assistant Professor</li>
                <li>Computer Science and Engineering Department</li>
                <li>Phone: (248) 370-2137</li>
                <li>Email: anyiliu at oakland dot edu</li>


        </div>

        </div>
        <div className="prof">
        <div className="faculty-img"><img className="fu-img" src={fu} alt="Prof.Fu"/></div>
        <div className="prof-detial">
                <li>Huirong Fu</li>
                <li>Professor</li>
                <li>Computer Science and Engineering Department</li>
                <li>Phone: (248) 370-4456</li>
                <li>Email: fu at oakland dot edu</li>


        </div>

        </div>
     </div>
     <div className="students">

     <div className="student-title">Student</div>
    <div className="student-part">
        <ul className="student-ul">
                <li>Josh Abu</li>
                <li>Karan Arora</li>
                <li>Balakrishan Dharmalingam</li>
                <li>Dong Han</li>
                <li>Hisham Kanaan</li>
          </ul>

          <ul className="student-ul">
                <li>Xinyi Li</li>
                <li>James Lynott</li>
                <li>Melissa Nichols</li>
                <li>Nathan Torrez</li>	
                <li>Tianhuan Tu</li>
            </ul>

            <ul className="student-ul">
                    <li>Frank Wang</li>
                    <li>Favid Werden</li>
                    <li>Shuoying Zhao</li>
                </ul> 
            </div>
     </div>
     <div className="about-intro">
        <div className="about-intro-text">We appreciate the following institutions for adopting or considering ReScuE labs in their cybersecurity-related courses:</div>

        <ul className="about-ul">
            <li>Bowling Green State University</li>
            <li>California State University, Sacramento</li>
            <li>Kettering University</li>
      </ul>

     </div>
     <div className="about-intro1">
        <div className="about-intro-text">We also appreciate the great educational materials in cybersecurity education shared by following institutions:</div>

        <ul className="about-ul">
            <li>College of Charleston</li>
            <li>Kennesaw State University</li>
            <li>North Carolina A{'&'}T State University</li>
            <li>Syracuse University</li>
            <li>The University of North Carolina at Chapel Hill</li>
      </ul>

     </div>

     <Titlebar>Fundings</Titlebar>
        <div className="funding">
            <div className="funding-text">This work is supported in part by the National Science Foundation under awards Grants No. DGE-1723707, DGE-1623713, CNS-1460897, the Michigan Space Grant Consortium, and Oakland University. Any opinions, findings, and conclusions or recommendations expressed in this material are those of the authors and do not necessarily reflect the views of the National Science Foundation.</div>
        <div className="funding-logo">

        
        <img className="funding-logo1" src={nsf} alt="NSF"/>
        <img className="funding-logo1" src={msgc} alt="MSGC"/>
        <img className="funding-logo1" src={ou} alt="OaklandUniversity"/>



        </div>




        </div>
    </div>





);


}

export default About;