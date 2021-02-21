function swStart() {
  document.stopwatch.startbutton.disabled = true;
  document.stopwatch.stopbutton.disabled = false;
  document.stopwatch.resetbutton.disabled = true;
  var nowValue = document.stopwatch.display.value;
  var hms = nowValue.split(":");
  var secmsec = hms[2].split(".");
  var prevTime = (hms[0] * 60 * 60 + hms[1] * 60 + secmsec[0] * 1) * 1000 + secmsec[1] * 1;
  var startTime = Date.now();
  swid = setInterval(function() {
    var nowTime = Date.now();
    displayTime(nowTime - startTime + prevTime);
  }, 10);
}

function swStop() {
  document.stopwatch.startbutton.disabled = false;
  document.stopwatch.stopbutton.disabled = true;
  document.stopwatch.resetbutton.disabled = false;
  clearInterval(swid);
}

function swReset() {
  document.stopwatch.resetbutton.disabled = true;
  displayTime(0);
}

function setDigit(value, digits) {
  res = value;
  var times = digits - value.toString().length;
  if(times > 0) {
    for(var i = 0; i < times; i++) {
      res = "0" + res;
    }
  }
  return res;
}

function displayTime(msTime) {
  var msec = msTime % 1000;
  msTime = (msTime - msec) / 1000;
  var sec = msTime % 60;
  msTime = (msTime - sec) / 60;
  var min = msTime % 60;
  var hour = (msTime - min) / 60;
  document.stopwatch.display.value = setDigit(hour, 2) + ":" + setDigit(min, 2) + ":" + setDigit(sec, 2) + "." + setDigit(msec, 3);
}