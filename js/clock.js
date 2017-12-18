var h, m, s;
var buttonHasBeenPressed = false;
var defaultTimeFormat = true;
var formatString = "";

window.onload = init;

function init() {
  document.getElementById("utcbtn").onclick = function() {
    buttonHasBeenPressed = !buttonHasBeenPressed; // reverses boolean
  };

  document.getElementById("timeformat").onclick = function() {
    defaultTimeFormat = !defaultTimeFormat;
  };

  document.getElementById("infobtn").onclick = function() {
    infoAlert();

  };

  startTime();
}

// MAIN LOOP //
function startTime() {
  var today = new Date();

  if (buttonHasBeenPressed == true) {
    getUTCTime(today);
  } else {
    getNormalTime(today);
  }

  if(!defaultTimeFormat) {
    convertTime();
  } else {
    if (formatString.length > 0) {
      formatString = "";
    }
  }

  h = checkTimeHour(h);
  m = checkTime(m);
  s = checkTime(s);

  var timeString = "" + h + ":" + m + ":" + s + formatString;
  var colorString = "#" + h + m + s;

  drawPage(timeString, colorString);

  setTimeout(startTime, 500);
};

// HELPER METHODS //
function checkTime(i) {
  if (i < 10) {
      i = "0" + i;
  } // add zero in front of numbers < 10

  return i;
}

function checkTimeHour(i) {
  if (defaultTimeFormat) { // if 24hr format, use regular checktime
    return checkTime(i);
  }

  return i; // else no zeros need to be added
}

function drawPage(timeString, colorString) {
  // Formats the color string correctly to work with all combinations of 12/24hr clock
  if (!defaultTimeFormat) {
    if (h.length < 2 || h < 10) { // Variable could be either string or int
      colorString = colorString.slice(0, 1) + "0" + colorString.slice(1);
    } else {
      colorString = colorString.slice(0,1) + colorString.slice(1);
    }
  }

  document.getElementById("main").innerHTML = timeString;
  document.getElementById("hexcolor").innerHTML = colorString;
  document.body.style.backgroundColor = colorString;
}

function getUTCTime(today) {
  h = today.getUTCHours();
  m = today.getUTCMinutes();
  s = today.getUTCSeconds();
}

function getNormalTime(today) {
  h = today.getHours();
  m = today.getMinutes();
  s = today.getSeconds();
}

function convertTime() {
  if (h > 12) {
    h = h - 12;
    formatString = " PM";
  } else if (h < 12) {
    formatString = " AM";
  } 
}

function infoAlert() {
  sweetAlert("Hex Clock", "To toggle color code, click the time.\n"
    + "To switch to UTC or back, click the UTC button.\n" +
    "To switch between 12 and 24 hour format, click the type button.\n"
    + "To toggle buttons except the \"hide\" button, click hide.\n" +
    "- Noah K.\n");
}
