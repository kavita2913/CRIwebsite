import React from 'react';
import './header.css';
import Image from '../Image/trophy.png';  
import Logo from '../Image/logo.png';  
import Get from '../Image/get.png'; 

const Header = () => {
    return (
        <div className='header'>
            <div className='headerImg'>
                <img src={Image} alt="Header Image" />
            </div>
            <div className='ClheaderImg'>
                <img src={Logo} />
                <h3>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h3>
                <div className='list'>
                    <ul className='eeficientList'>
                        <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                        <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
                    </ul>
                    <img src={Get} alt="GetImage" /></div>
                <p> Government of India has awarded the <span class="award-text">"National Energy Conservation Award 2018".</span>
                    Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt.
                    Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
                </p>

            </div>
        </div>
    );
};

export default Header;
