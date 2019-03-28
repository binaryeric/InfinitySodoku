var ingame = true;

// sample board:
var sampleValues = [
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

var veryEasy = [ 
[0,1,5,4,2,6,0,0,9],
[0,7,0,1,5,9,0,2,0],
[0,4,2,8,3,0,1,0,5],
[0,9,0,6,0,3,0,8,7],
[5,0,7,0,4,2,3,0,6],
[1,0,3,7,0,5,0,9,4],
[0,0,1,0,9,8,6,4,0],
[6,2,0,0,0,4,9,5,1],
[0,5,9,2,0,0,8,7,0]
];

var easy = [
[0,3,9,8,0,0,6,4,0],
[2,0,1,6,5,4,9,0,0],
[0,0,0,0,0,9,1,8,0],
[5,0,8,0,4,0,3,0,0],
[1,7,0,0,2,8,4,0,6],
[4,6,2,1,9,3,0,0,7],
[8,0,0,0,6,0,0,3,0],
[0,0,5,2,0,0,0,0,9],
[9,0,0,0,3,7,0,0,0]
];

var medium = [
[6,8,9,0,0,2,0,0,1],
[7,0,0,0,0,4,0,0,0],
[0,4,5,0,1,0,0,3,7],
[0,0,0,0,0,3,8,0,0],
[3,0,0,0,0,1,0,4,0],
[0,0,0,9,5,7,0,0,2],
[1,0,0,0,3,9,5,0,0],
[0,0,0,0,4,0,0,0,0],
[4,0,7,1,8,5,6,0,9]
];

var hard = [
[9,5,0,0,0,0,1,0,0],
[0,0,0,0,8,5,0,0,0],
[0,6,0,0,3,1,0,0,4],
[0,7,9,5,0,0,0,0,0],
[0,0,0,1,0,0,9,0,0],
[0,3,0,0,0,0,4,8,0],
[1,2,0,0,0,9,0,0,0],
[4,0,0,0,1,2,0,0,6],
[0,0,0,0,7,0,0,3,0]
];

var veryHard = [
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

var veryEasySol = [ 
[8,1,5,4,2,6,7,3,9],
[3,7,6,1,5,9,4,2,8],
[9,4,2,8,3,7,1,6,5],
[2,9,4,6,1,3,5,8,7],
[5,8,7,9,4,2,3,1,6],
[1,6,3,7,8,5,2,9,4],
[7,3,1,5,9,8,6,4,2],
[6,2,8,3,7,4,9,5,1],
[4,5,9,2,6,1,8,7,3],
];

var easySol = [
[7,3,9,8,1,2,6,4,5],
[2,8,1,6,5,4,9,7,3],
[6,5,4,3,7,9,1,8,2],
[5,9,8,7,4,6,3,2,1],
[1,7,3,5,2,8,4,9,6],
[4,6,2,1,9,3,8,5,7],
[8,1,7,9,6,5,2,3,4],
[3,4,5,2,8,1,7,6,9],
[9,2,6,4,3,7,5,1,8]
];

var mediumSol = [
[6,8,9,3,7,2,4,5,1],
[7,1,3,5,9,4,2,6,8],
[2,4,5,6,1,8,9,3,7],
[5,7,1,4,2,3,8,9,6],
[3,9,2,8,6,1,7,4,5],
[8,6,4,9,5,7,3,1,2],
[1,2,6,7,3,9,5,8,4],
[9,5,8,2,4,6,1,7,3],
[4,3,7,1,8,5,6,2,9]
];

var hardSol = [
[9,5,8,4,6,7,1,2,3],
[3,1,4,2,8,5,6,7,9],
[7,6,2,9,3,1,8,5,4],
[6,7,9,5,4,8,3,1,2],
[8,4,5,1,2,3,9,6,7],
[2,3,1,7,9,5,4,8,5],
[1,2,3,6,5,9,7,4,8],
[5,9,6,8,7,4,2,3,1]
];

var veryHardSol = [
[8,1,5,6,9,4,2,7,3],
[9,7,4,3,2,8,6,5,1],
[6,3,2,1,5,7,8,4,9],
[5,9,1,7,4,2,3,8,6],
[4,6,3,5,8,1,7,9,2],
[7,2,8,9,6,3,5,1,4],
[2,5,6,4,7,9,1,3,8],
[1,8,9,2,3,5,4,6,7],
[3,4,7,8,1,6,9,2,5]
];

function setAtt(obj,table) {
	for(var i=0; i<table.length; i++) {
		obj.setAttribute(table[i][0],table[i][1]);
	}
}

//Creates a single square on the board
function square(node, y, x) {
  var e = document.createElement('input');
  setAtt(e,[["type","text"],["id",String(y)+String(x)],["pattern", "[0-9]{1,2}"],["style","text-align: center; width: 43px; height: 34px; border: solid; border-width: 0px; background-color: white"]]);
  node.appendChild(e);
  return e;
}

//Makes the individual squares into a 9x9 grid
function makeSquares() {
  var gtable = document.createElement("Table");
  document.getElementById("board").appendChild(gtable);
  setAtt(gtable,[["style","padding: 0px; margin: 0px; width: 100%; height: 100%;"]])

  //select which board to use based on difficulty selected by user
  var boardDif = localStorage.getItem("difficulty");
  if(boardDif == "veryeasy") {
	  var values = veryEasy;
  } else if (boardDif == "easy") {
	  var values = easy;
  } else if (boardDif == "medium") {
	  var values = medium;
  } else if (boardDif == "hard") {
	  var values = hard;
  } else if (boardDif == "veryhard") {
	  var values = veryHard;
  } else {
	  var values = sampleValues;
  }
  
  for(var y=0; y<9; y++) { // y
    var row = gtable.insertRow(y);

    for(var x = 0; x<9; x++) {
        var cell = row.insertCell(x);
		if(values[y][x] != 0) {
			setAtt(cell,[["value",String(values[y][x])],["id",String(y)+String(x)],["style","text-align: center; width: 43px; height: 34px; border: solid; border-width: 0px; background-color: white"]]);
			document.getElementById(String(y)+String(x)).innerHTML = String(values[y][x]);
		} else {
			setAtt(cell, [["style", "padding: 0px;"]/*,["id",String(y)+String(x)]*/,["pattern","[0-9]{1,2}"]])
			var sq = square(cell, y, x);
		}
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
			var boardDif = localStorage.getItem("difficulty");
			if(boardDif == "veryeasy") {
				var valuesol = veryEasySol;
			} else if (boardDif == "easy") {
				var valuesol = easySol;
			} else if (boardDif == "medium") {
				var valuesol = mediumSol;
			} else if (boardDif == "hard") {
				var valuesol = hardSol;
			} else if (boardDif == "veryhard") {
				var valuesol = veryHardSol;
			} else {
				var valuesol = veryHardSol;
			}
				
			var win = true;	
			for (var y=0; y<9; y++) {			
				for (var x=0; x<9; x++) {
					var cell = document.getElementById(String(y)+String(x));
					/*alert("cell is: "+y+x+" // value is: "+cell.value+"// inner text is :"+cell.innerText+"solvalue: "+valuesol[y][x]);*/
					if (cell.innerText == "") {
						if (cell.value == valuesol[y][x]) {
							/*alert("cell is: "+y+x+" // value is: "+cell.value+"// inner text is :"+cell.innerText);*/
						} else {
							alert("The board you have entered is incorrect");
							x = 10;
							y = 10;
							win = false;
						}
					} 				
				}
			}
			if(win == true) {
				alert("You have entered a CORRECT board!");
			}
			
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
  // complete -peter
  var difficulty = localStorage.getItem("difficulty");
  document.getElementById("test").innerHTML = "Game Difficulty: "+difficulty;
  if (difficulty == "easy") {
	timer(500);
  } else if (difficulty == "medium") {
	timer(400);  
  } else if (difficulty == "hard") {
	timer(300);  
  } else if (difficulty == "veryhard") {
	timer(200);  
  } else {
	timer(600);
  }

  
  var borders = document.getElementsByClassName("borders");
  for (let i = 0; i < borders.length; i++) {
    let rgb = [0,0,0];
    rgb = bg(borders[i], rgb);
  }
});
