var timer = document.getElementById("timer");

//Converts the time in Milliseconds to Mins and Secs
function format(t) {
  var min = Math.floor(t/60);
  var sec = Math.floor(t%60);

  let m = min < 10 ? "0" + String(min) | String(min);
  let s = sec < 10 ? "0" + String(sec) | String(sec);

  return m + ":" + s;
}

//Starts the timer
function timer(start_time) {

  setTimeout(function() {
    timer.innerHTML = format(start_time--);
  }, 1000);
}

//Sets the max time for the timer system.
$(document).on('click','body *',function(){
  timer(1200);
});
