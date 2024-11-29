var clockE1 = document.getElementsByClassName('clock')[0];

// Create and append dial lines
for (var i = 1; i < 60; i++) {
    var dial = document.createElement('div');
    dial.className = 'dials';
    dial.style.transform = "rotate(" + 6 * i + "deg)";
    clockE1.appendChild(dial);
  }
  
  function clock() {
    var weekDay = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    var date = d.getDate();
    var month = d.getMonth() + 1; // Increment month by 1
    var year = d.getFullYear();
  
    var hDeg = h * 30 + m * (360 / 720);
    var mDeg = m * 6 + s * (360 / 3600);
    var sDeg = s * 6;
  
    var hE1 = document.querySelector('.hour');
    var mE1 = document.querySelector('.minute');
    var sE1 = document.querySelector('.second');
    var dateE1 = document.querySelector('.date');
    var dayE1 = document.querySelector('.day');
  
    var day = weekDay[d.getDay()];
  
    if (month < 10) {
      month = "0" + month; // Prefix '0' for months less than 10
    }
  
    hE1.style.transform = "rotate(" + hDeg + "deg)";
    mE1.style.transform = "rotate(" + mDeg + "deg)";
    sE1.style.transform = "rotate(" + sDeg + "deg)";
    dateE1.innerHTML = date + "/" + month + "/" + year;
    dayE1.innerHTML = day;
  }
  
  setInterval(clock, 1000); // Update every second
      