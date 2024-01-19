import React from 'react';
import './WastingTime.css';
import { AnaClock } from 'web-clocks';
import {FaTwitter, FaFacebook, FaSnapchat, FaLinkedin, FaReddit, FaInstagram, FaDiscord, FaSoundcloud, FaWhatsapp, FaSpotify, FaYoutube, FaPinterest} from 'react-icons/fa';

function WastingTime (){
    return (
        <div className="App">
            
            <body>
                <h1>It's Procrastination Time!</h1>
                <div className="Clock">
                    <ana-clock></ana-clock>
                    <div className="Clock12">
                    <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                        <FaLinkedin size='100%'color="B3E5FC"/>
                    </a>
                </div>
                <div className="Clock1">
                    <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                        <FaFacebook size='100%'color="B3E5FC"/>
                    </a>
                </div>
                <div className="Clock2">
                    <a href="https://www.discord.com" target="_blank" rel="noreferrer">
                        <FaDiscord size='100%'color="B3E5FC"/>
                    </a>
                </div>
                <div className="Clock3">
                    <a href="https://www.snapchat.com" target="_blank" rel="noreferrer">
                        <FaSnapchat size='100%'color="B3E5FC"/>
                    </a>
                </div>
                <div className="Clock4">
                    <a href="https://www.pinterest.com" target="_blank" rel="noreferrer">
                        <FaPinterest size='100%'color="B3E5FC"/>
                    </a>
                </div>
                <div className="Clock5">
                    <a href="https://www.reddit.com" target="_blank" rel="noreferrer">
                        <FaReddit size='100%'color="B3E5FC"/>
                    </a>
                </div>
                <div className="Clock6">
                    <a href="https://www.spotify.com" target="_blank" rel="noreferrer">
                        <FaSpotify size='100%'color="B3E5FC"/>
                    </a>
                </div>
                <div className="Clock7">
                    <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
                        <FaYoutube size='100%'color="B3E5FC"/>
                    </a>
                </div>
                <div className="Clock8">
                    <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                        <FaTwitter size='100%'color="B3E5FC"/>
                    </a>
                </div>
                <div className="Clock9">
                    <a href="https://www.instagram.com"  target="_blank" rel="noreferrer">
                        <FaInstagram size='100%' color="B3E5FC"/>
                    </a>
                </div>
                <div className="Clock10">
                    <a href="https://www.whatsapp.com"  target="_blank" rel="noreferrer">
                        <FaWhatsapp size='100%' color="B3E5FC"/>
                    </a>
                </div>
                <div className="Clock11">
                    <a href="https://www.soundcloud.com"  target="_blank" rel="noreferrer">
                        <FaSoundcloud size='100%'color="B3E5FC"/>
                    </a>
                </div>
                </div>
                
                
            </body>
        </div> 
    )
}

export default WastingTime;