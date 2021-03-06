import React from 'react';
import './WastingTime.css';
import {FaWater, FaNewspaper, FaReact, FaWikipediaW, FaUniversity, FaRunning, FaGoogleDrive, FaBook, FaGraduationCap, FaPen, FaLanguage, FaCoins} from 'react-icons/fa';

function WastingTimeMoreEfficiently (){
    return (
        <div className="App">
            <body>
                <h1>It's Procrastination Time!</h1>
                <div className="Clock">
                    <ana-clock></ana-clock>

                    <div className="Clock12">
                    <a href="https://en.wikipedia.org/wiki/Special:Random" target="_blank">
                        <FaWikipediaW size='100%'color="B3E5FC"/>
                    </a>
                </div>
                <div className="Clock1">
                    <a href="https://www.nzherald.co.nz" target="_blank">
                        <FaNewspaper size='100%'color="B3E5FC"/>
                    </a>
                </div>
                <div className="Clock2">
                    <a href="https://www.drive.google.com" target="_blank">
                        <FaGoogleDrive size='100%'color="B3E5FC"/>
                    </a>
                </div>
                <div className="Clock3">
                    <a href="https://reactjs.org/" target="_blank">
                        <FaReact size='100%'color="B3E5FC"/>
                    </a>
                </div>
                <div className="Clock4">
                    <a href="https://www.auckland.ac.nz/en.html" target="_blank">
                        <FaUniversity size='100%'color="B3E5FC"/>
                    </a>
                </div>
                <div className="Clock5">
                    <a href="https://www.marketwatch.com/" target="_blank">
                        <FaCoins size='100%'color="B3E5FC"/>
                    </a>
                </div>
                <div className="Clock6">
                    <a href="https://canvas.auckland.ac.nz/" target="_blank">
                        <FaPen size='100%'color="B3E5FC"/>
                    </a>
                </div>
                <div className="Clock7">
                    <a href="https://www.duolingo.com" target="_blank">
                        <FaLanguage size='100%'color="B3E5FC"/>
                    </a>
                </div>
                <div className="Clock8">
                    <a href="https://www.youtube.com/watch?v=ziUCPDv2vBI" target="_blank">
                        <FaWater size='100%'color="B3E5FC"/>
                    </a>
                </div>
                <div className="Clock9">
                    <a href="https://www.overstellar.se/random-exercise/" target="_blank">
                        <FaRunning size='100%' color="B3E5FC"/>
                    </a>
                </div>
                <div className="Clock10">
                    <a href="https://scholar.google.com/" target="_blank">
                        <FaGraduationCap size='100%' color="B3E5FC"/>
                    </a>
                </div>
                <div className="Clock11">
                    <a href="https://www.audible.com.au/" target="_blank">
                        <FaBook size='100%'color="B3E5FC"/>
                    </a>
                </div>
                </div>
                
            </body>
        </div> 
    )
}

export default WastingTimeMoreEfficiently;