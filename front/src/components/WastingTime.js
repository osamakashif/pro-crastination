import React from 'react';
import './WastingTime.css';
import {IconContext} from "react-icons";
import {FaTwitter, FaFacebook, FaSnapchat, FaLinkedin, FaReddit, FaInstagram, FaDiscord, FaSoundcloud, FaWhatsapp, FaSpotify, FaYoutube, FaPinterest, FaTumblr} from 'react-icons/fa';
import { AnaClock, DigiClock } from 'web-clocks';
import { icons } from 'react-icons/lib';

function WastingTime (){
    return (
        <div className="App">
            <header>  
                <title>Analog Clock</title>  
            </header>  
            <body>
                <div className="clockthing"><ana-clock className="clockthing"></ana-clock></div>
                <div className="LinkedIn">
                    <a href="https://www.linkedin.com">
                        <FaLinkedin size='60px'color="B3E5FC"/>
                    </a>
                </div>
                <div className="Facebook">
                    <a href="https://www.facebook.com">
                        <FaFacebook size='60px'color="B3E5FC"/>
                    </a>
                </div>
                <div className="Discord">
                    <a href="https://www.discord.com">
                        <FaDiscord size='60px'color="B3E5FC"/>
                    </a>
                </div>
                <div className="Snapchat">
                    <a href="https://www.snapchat.com">
                        <FaSnapchat size='60px'color="B3E5FC"/>
                    </a>
                </div>
                <div className="Pinterest">
                    <a href="https://www.pinterest.com">
                        <FaPinterest size='60px'color="B3E5FC"/>
                    </a>
                </div>
                <div className="Reddit">
                    <a href="https://www.reddit.com">
                        <FaReddit size='60px'color="B3E5FC"/>
                    </a>
                </div>
                <div className="Spotify">
                    <a href="https://www.spotify.com">
                        <FaSpotify size='60px'color="B3E5FC"/>
                    </a>
                </div>
                <div className="Youtube">
                    <a href="https://www.youtube.com">
                        <FaYoutube size='60px'color="B3E5FC"/>
                    </a>
                </div>
                <div className="Tumblr">
                    <a href="https://www.tumblr.com">
                        <FaTumblr size='60px'color="B3E5FC"/>
                    </a>
                </div>
                <div className="Instagram">
                    <a href="https://www.instagram.com">
                        <FaInstagram size='60px' color="B3E5FC"/>
                    </a>
                </div>
                <div className="Whatsapp">
                    <a href="https://www.whatsapp.com">
                        <FaWhatsapp size='60px' color="B3E5FC"/>
                    </a>
                </div>
                <div className="Soundcloud">
                    <a href="https://www.soundcloud.com">
                        <FaSoundcloud size='60px'color="B3E5FC"/>
                    </a>
                </div>
            </body>
        </div> 
    )
}

export default WastingTime;