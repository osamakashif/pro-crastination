import './WastingTime.css';
import { AnaClock, DigiClock } from 'web-clocks';

function WastingTime (){
    return (
        <div className="clock">
            {/* <header>  
                <title>Analog Clock</title>  
            </header>  
            <body>  
                
                <ana-clock></ana-clock>
            </body> */}
                    <div class="clock">
        <div>
            <div class="info date"></div>
            <div class="info day"></div>
        </div>
        <div class="dot"></div>
        <div>
            <div class="hour-hand"></div>
            <div class="minute-hand"></div>
            <div class="second-hand"></div>
        </div>
        <div>
            <span class="h3">3</span>
            <span class="h6">6</span>
            <span class="h9">9</span>
            <span class="h12">12</span>
        </div>
        <div class="diallines"></div>
        </div>
        </div> 
    )
    var dialLines = document.getElementsByClassName('diallines');
var clockEl = document.getElementsByClassName('clock')[0];

for (var i = 1; i < 60; i++) {
  clockEl.innerHTML += "<div class='diallines'></div>";
  dialLines[i].style.transform = "rotate(" + 6 * i + "deg)";
}

function clock() {
  var weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      d = new Date(),
      h = d.getHours(),
      m = d.getMinutes(),
      s = d.getSeconds(),
      date = d.getDate(),
      month = d.getMonth() + 1,
      year = d.getFullYear(),
           
      hDeg = h * 30 + m * (360/720),
      mDeg = m * 6 + s * (360/3600),
      sDeg = s * 6,
      
      hEl = document.querySelector('.hour-hand'),
      mEl = document.querySelector('.minute-hand'),
      sEl = document.querySelector('.second-hand'),
      dateEl = document.querySelector('.date'),
      dayEl = document.querySelector('.day');
  
      var day = weekday[d.getDay()];
  
  if(month < 9) {
    month = "0" + month;
  }
  
  hEl.style.transform = "rotate("+hDeg+"deg)";
  mEl.style.transform = "rotate("+mDeg+"deg)";
  sEl.style.transform = "rotate("+sDeg+"deg)";
  dateEl.innerHTML = date+"/"+month+"/"+year;
  dayEl.innerHTML = day;
}

setInterval("clock()", 100);
}




export default WastingTime;