import React from "react";
import { Titlebar } from "../Webcomponents";
import './labpage.css'
import mmflab from '../../imgs/icon.webp'
import mmfmanual from './Labdoc/Lab_Behavior_based_Mobile_Malware_Analysis_and_Detection.pdf'

function MMFlab(){



    return(
        <div className="labwrapper">
           <Titlebar>Mobile Malware Analysis and Detection</Titlebar>
            <div className="labpage-part">
                <div className="labpage-subtitle">Overview</div>
                <div className="overview-detial">
            <div className="overview-imge"><img className="section-img" src={mmflab} alt='MMFlab' /></div>
                <div className="overview-text">Students will learn how to use program analysis tools to analyze Mobile Apps and report any malicious activities or behaviors in this lab. The analysis includes both static and dynamic analysis. The analysis includes both static and dynamic analysis. Some existing program analysis tools, such as <a href="https://github.com/soot-oss/soot">Soot</a>, <a href="https://github.com/secure-software-engineering/FlowDroid">FlowDroid</a>, and <a href="https://www.virustotal.com/gui/home/upload">VirusTotal</a>, will be introduced.</div>

            </div>

            </div>

            <div className="labpage-part">
                <div className="labpage-subtitle">Learning Objectives</div>
                <ul className="labpage-ul1">
                    <li>Understand technologies that analyze software.</li>
                    <li>Be able to use FlowDroid and MobSF to perform static analysis against mobile malware.</li>
                    <li>Be able to use VirusTotal to perform dynamic analysis against mobile malware.</li>
                </ul>
                <ul className="labpage-ul2">
                    <li><a href={mmfmanual}>Lab manual</a></li>
                    
                </ul>
            </div>

        <div className="labpage-part">
        <div className="labpage-subtitle">Suggested Duratione</div>
                <ul className="labpage-ul2">
                    <li>Supervised (closely-guided lab session): <p>1 hours</p></li>
                    <li>Unsupervised (take-home project): <p>2 hours</p></li>
                </ul>


        </div>

        <div className="labpage-part">
        <div className="labpage-subtitle">Tutorial Videos</div>
                <ul className="labpage-ul2">
                    <li><a href="https://www.youtube.com/watch?v=ebmnJoAOTkE&t=1s">YouTube Video</a></li>
                    
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
    
export default MMFlab;