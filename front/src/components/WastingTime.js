import React from 'react';
import './WastingTime.css';
import { AnaClock, DigiClock } from 'web-clocks';
import {FaTwitter, FaFacebook, FaSnapchat, FaLinkedin, FaReddit, FaInstagram, FaDiscord, FaSoundcloud, FaWhatsapp, FaSpotify, FaYoutube, FaPinterest} from 'react-icons/fa';

function WastingTime (){
    return (
        <div className="App">
            <header>  
                <title>Analog Clock</title>  
            </header>  
            <body>
                <div className="Clock"><ana-clock></ana-clock></div>
                <div className="Clock12">
                    <a href="https://www.linkedin.com">
                        <FaLinkedin size='60px'color="B3E5FC"/>
                    </a>
                </div>
                <div className="Clock1">
                    <a href="https://www.facebook.com">
                        <FaFacebook size='60px'color="B3E5FC"/>
                    </a>
                </div>
                <div className="Clock2">
                    <a href="https://www.discord.com">
                        <FaDiscord size='60px'color="B3E5FC"/>
                    </a>
                </div>
                <div className="Clock3">
                    <a href="https://www.snapchat.com">
                        <FaSnapchat size='60px'color="B3E5FC"/>
                    </a>
                </div>
                <div className="Clock4">
                    <a href="https://www.pinterest.com">
                        <FaPinterest size='60px'color="B3E5FC"/>
                    </a>
                </div>
                <div className="Clock5">
                    <a href="https://www.reddit.com">
                        <FaReddit size='60px'color="B3E5FC"/>
                    </a>
                </div>
                <div className="Clock6">
                    <a href="https://www.spotify.com">
                        <FaSpotify size='60px'color="B3E5FC"/>
                    </a>
                </div>
                <div className="Clock7">
                    <a href="https://www.youtube.com">
                        <FaYoutube size='60px'color="B3E5FC"/>
                    </a>
                </div>
                <div className="Clock8">
                    <a href="https://www.twitter.com">
                        <FaTwitter size='60px'color="B3E5FC"/>
                    </a>
                </div>
                <div className="Clock9">
                    <a href="https://www.instagram.com">
                        <FaInstagram size='60px' color="B3E5FC"/>
                    </a>
                </div>
                <div className="Clock10">
                    <a href="https://www.whatsapp.com">
                        <FaWhatsapp size='60px' color="B3E5FC"/>
                    </a>
                </div>
                <div className="Clock11">
                    <a href="https://www.soundcloud.com">
                        <FaSoundcloud size='60px'color="B3E5FC"/>
                    </a>
                </div>
            </body>
        </div> 
    )
}

export default WastingTime;