var ingame = true;

// sample board:
var values = [
[0,0,0,0,0,0,0,7,3],
[0,0,0,0,2,0,0,0,0],
[0,0,2,1,5,0,0,0,0],
[5,0,1,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0],
[0,0,0,9,0,3,0,0,4],
[0,0,0,0,7,0,1,0,0],
[0,8,0,0,0,0,0,0,0],
[3,4,0,0,0,6,0,0,0]
];



function setAtt(obj,table) {
	for(var i=0; i<table.length; i++) {
		obj.setAttribute(table[i][0],table[i][1]);
	}
}

//Creates a single square on the board
function square(node) {
  var e = document.createElement('input');
  setAtt(e,[["pattern", "[0-9]{1,2}"],["style","text-align: center; width: 43px; height: 34px; border: solid; border-width: 0px; background-color: white"]]);
  node.appendChild(e);
  return e;
}

//Makes the individual squares into a 9x9 grid
function makeSquares() {
  var gtable = document.createElement("Table");
  document.getElementById("board").appendChild(gtable);
  setAtt(gtable,[["style","padding: 0px; margin: 0px; width: 100%; height: 100%;"]])

  for(var y=0; y<9; y++) { // y
    var row = gtable.insertRow(y);

    for(var x = 0; x<9; x++) {
        var cell = row.insertCell(x);
				if(values[y][x] != 0) {
					setAtt(cell,[["value",String(values[y][x])]]);
				}
        setAtt(cell, [["style", "padding: 0px;"],["pattern","[0-9]{1,2}"]])
        var sq = square(cell);
    }
  }
}

//Generates the the background for the sudoku board (the big # looking one that changes colors)
function boxSquares() {
  var bd = document.getElementById("board");

  for(var i=0; i<4; i++) {
    var lnx = document.createElement("div");
    var lny = document.createElement("div");
    setAtt(lnx,[["class","borders"],["style","background-color: #606060; width: 405px; height: 10px; position: absolute; top: "+String(i*113)+"px;"]]);
    setAtt(lny,[["class","borders"],["style","background-color: #606060; width: 10px; height: 349px; position: absolute; top: 0; left: "+String(i*133)+"px;"]])
    bd.appendChild(lny);
    bd.appendChild(lnx);
  }
}

//Changes the color of the board as the timer runs
function bg (e,rgb) {
	if (rgb[0] <= 255 && rgb[1] == 0 && rgb[2] == 0)
		rgb[0] ++;
	if (rgb[0] == 255 && rgb[2] == 0 && rgb[1] <= 255)
		rgb[1] ++;
	if (rgb[0] == 255 && rgb[1] == 255 && rgb[2] <= 255)
		rgb[2] ++;
	if (rgb[2] == 255 && rgb[1] == 255 && rgb[0] > 0)
		rgb[0] --;
	if (rgb[0] == 0 && rgb[2] == 255 && rgb[1] > 0)
		rgb[1] --;
	if (rgb[0] == 0 && rgb[1] == 0 && rgb[2] > 0)
		rgb[2] --;

	setTimeout(function() {
		bg(e, rgb);
	}, 1);
	e.style.background = 'rgb('+rgb[0]+','+rgb[1]+','+rgb[2]+')';
	return rgb;
}

//Converts the timer to a minute and second system instead of MS
function format(t) {
  var min = Math.floor(t/60);
  var sec = Math.floor(t%60);

  let m = min < 10 ? "0" + String(min) : String(min);
  let s = sec < 10 ? "0" + String(sec) : String(sec);

  return m + ":" + s;
}

//Starts the Timer and checks for a lose game condition
function timer(start_time) {
  document.getElementById("timer").innerHTML = format(start_time--);

  setTimeout(function() {
    if(start_time > 0 && ingame == true) {
      timer(start_time);
    } else if(ingame == false) {
			// TODO check solutions
			alert("The board you have entered is incorrect");
		} else {
      alert("Time's up!");
	  window.location.replace("./index.html");
    }
  }, 1000);
}

//Changes the state of the game when the board is submitted
function submitbutton() {
	ingame = false;
}

//Calls the entire board creation program when the main page loads
window.addEventListener("load",function() {
  makeSquares();
  boxSquares();

  // TODO get difficulty and use that to determine time:
  timer(600);

  
  var borders = document.getElementsByClassName("borders");
  for (let i = 0; i < borders.length; i++) {
    let rgb = [0,0,0];
    rgb = bg(borders[i], rgb);
  }
});
