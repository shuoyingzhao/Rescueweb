import React from "react";
import './Home.css';
import { Titlebar } from "./Webcomponents";
import handon from '../imgs/hol-logo.png'
import learnmore from '../imgs/learnmore.png'
import youtube from '../imgs/youtube.png'
import vm from '../imgs/vm-container.png'
import cloud from '../imgs/cloud-emulator.png'
import {NavLink} from 'react-router-dom';
import setup from '../Documents/Setup Environment for Android Malware Construction.pdf'
import guide from '../Documents/ReScuE-User-Guide.pdf'
function Home(){



return(
   
    <div className="homewrapper">
        <div className="block"></div>
        <div className="home-intro">
            <div className="home-intro-title">Welcome to ReScuE </div>
            <div className="home-intro-text">ReScuE (Range for Security Education) is a cloud-based networked virtual environment dedicated to cybersecurity education. It leverages <a href="https://www.cloudlab.us/">CloudLab</a>, a state-of-the-art software-defined networking (SDN) and network function virtualization (NFV) infrastructure, and deployes cybersecurity-related virtual machines and containers. On top of ReScuE, we have developed a series of hands-on labs covering a broad spectrum of cybersecurity topics in pervasive computing.</div>

        </div>
        <Titlebar>Highlights of ReScuE  </Titlebar>
        <div className="home-ul">

            <ul className="home-ul-detial">
                <li>Adaptive to large-scale and complicated network settings.</li>
                <li>Allows exploits to be constrained.</li>
                <li>Gives instructors a privilege to use the physical machines.</li>
                <li>100% free and has zero cost for maintenance.</li>
                <li>Adoptive to various educational purposes.</li>
            </ul>

        </div>
        <Titlebar>What Does ReScuE Provide?</Titlebar>
        <div className="home-provide">
            <div className="home-part">
            <div className='home-part-img1'><img className="part-img1" src={handon} alt='Handon' /></div>
            <div className="part-title">Hands-on Labs.</div>
            <div className="part-text">We have developed cybersecurity hands-on labs in the area of pervasive computing. They cover a wide range of cloud-based cryptography, SDN and NFV, mobile security, and forensic technologies. More labs are under finalization.</div>
            <div className="home-part-img2" ><NavLink to="/labs"><img className="part-img2" src={learnmore} alt='Learnmore' /></NavLink></div>
            </div>

            <div className="home-part">
            <div className='home-part-img1'><img className="part-img1" src={cloud} alt='Cloud' /></div>
            <div className="part-title">ReScuE Cloud Environment</div>
            <div className="part-text">Built upon <a href="https://www.cloudlab.us/">CloudLab</a>, ReScuE provides a user-friendly interface and critical components allowing educators to set up and maintain the virtual environment. Meanwhile, ReScuE provides the web interface to monitor students' activities and resource usage for virtual artifacts.</div>
            <div className="home-part-img2"><a href={guide}><img className="part-img2" src={learnmore} alt='Learnmore' /></a></div>
            </div>

            <div className="home-part">
            <div className='home-part-img1'><img className="part-img1" src={vm} alt='Vm' /></div>
            <div className="part-title">VMs and Containers</div>
            <div className="part-text">ReScuE labs rely on our customized virtual machines (VMs) and containers. As educators and students, you can download them from the repository. They are free. For more information on how to build them from scratch, please get in touch with us.</div>
            <div className="home-part-img2"><a href={setup}><img className="part-img2" src={learnmore} alt='Learnmore' /></a></div>
            </div>

            <div className="home-part">
            <div className='home-part-img1'><img className="part-img1" src={youtube} alt='Youtube' /></div>
            <div className="part-title">YouTube Channel</div>
            <div className="part-text">We developed YouTube channels for educators and students to get familiar with the ReScuE platform. In addition, for each hands-on lab, we provide videos, which articulate learning objectives and provide demonstration.</div>
            <div className="home-part-img2"><a href="https://www.youtube.com/channel/UC0Z5YeChCNubOgv0GJVO7fg"><img className="part-img2" src={learnmore} alt='Learnmore' /></a></div>
            </div>



        </div>

    </div>
    





);


}

export default Home;
