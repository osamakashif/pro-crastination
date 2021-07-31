import React from 'react';
import './WastingTime.css';
import {FaWater, FaNewspaper, FaReact, FaWikipediaW, FaUniversity, FaRunning, FaStackOverflow, FaBook, FaGraduationCap, FaPen, FaLanguage, FaDollarSign} from 'react-icons/fa';

function WastingTimeMoreEfficiently (){
    return (
        <div className="App">
            <header>  
                <title>Analog Clock</title>  
            </header>  
            <body>
                <div className="Clock"><ana-clock></ana-clock></div>
                <div className="Clock12">
                    <a href="https://www.wikipedia.com">
                        <FaWikipediaW size='60px'color="B3E5FC"/>
                    </a>
                </div>
                <div className="Clock1">
                    <a href="https://www.nzherald.co.nz">
                        <FaNewspaper size='60px'color="B3E5FC"/>
                    </a>
                </div>
                <div className="Clock2">
                    <a href="https://www.stackoverflow.com">
                        <FaStackOverflow size='60px'color="B3E5FC"/>
                    </a>
                </div>
                <div className="Clock3">
                    <a href="https://reactjs.org/">
                        <FaReact size='60px'color="B3E5FC"/>
                    </a>
                </div>
                <div className="Clock4">
                    <a href="https://www.auckland.ac.nz/en.html">
                        <FaUniversity size='60px'color="B3E5FC"/>
                    </a>
                </div>
                <div className="Clock5">
                    <a href="https://www.marketwatch.com/">
                        <FaDollarSign size='60px'color="B3E5FC"/>
                    </a>
                </div>
                <div className="Clock6">
                    <a href="https://canvas.auckland.ac.nz/">
                        <FaPen size='60px'color="B3E5FC"/>
                    </a>
                </div>
                <div className="Clock7">
                    <a href="https://www.duolingo.com">
                        <FaLanguage size='60px'color="B3E5FC"/>
                    </a>
                </div>
                <div className="Clock8">
                    <a href="https://www.youtube.com/watch?v=ziUCPDv2vBI">
                        <FaWater size='60px'color="B3E5FC"/>
                    </a>
                </div>
                <div className="Clock9">
                    <a href="https://www.cityfitness.co.nz/memberships">
                        <FaRunning size='60px' color="B3E5FC"/>
                    </a>
                </div>
                <div className="Clock10">
                    <a href="https://scholar.google.com/">
                        <FaGraduationCap size='60px' color="B3E5FC"/>
                    </a>
                </div>
                <div className="Clock11">
                    <a href="https://www.audible.com.au/">
                        <FaBook size='60px'color="B3E5FC"/>
                    </a>
                </div>
            </body>
        </div> 
    )
}

export default WastingTimeMoreEfficiently;