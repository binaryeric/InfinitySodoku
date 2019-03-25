var timer = document.getElementById("timer");

function format(t) {
  var min = Math.floor(t/60);
  var sec = Math.floor(t%60);

  let m = min < 10 ? "0" + String(min) | String(min);
  let s = sec < 10 ? "0" + String(sec) | String(sec);

  return m + ":" + s;
}

function timer(start_time) {

  setTimeout(function() {
    timer.innerHTML = format(start_time--);
  }, 1000);
}

$(document).on('click','body *',function(){
  timer(1200);
    //  $(this) = your current element that clicked.
    // additional code
});
