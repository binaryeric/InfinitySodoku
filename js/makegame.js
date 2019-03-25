
function setAtt(obj,table) {
	for(var i=0; i<table.length; i++) {
		obj.setAttribute(table[i][0],table[i][1]);
	}
}

function square(node) {
  var e = document.createElement('input');
  //e.setAttribute("pattern","[0-9]{1,2}");else
  setAtt(e,[["pattern", "[0-9]{1,2}"],["style","text-align: center; width: 43px; height: 34px; border: solid; border-width: 0px; background-color: white"]]);
  node.appendChild(e);
  return e;
}


function makeSquares() {
  var gtable = document.createElement("Table");
  document.getElementById("board").appendChild(gtable);
  setAtt(gtable,[["style","padding: 0px; margin: 0px; width: 100%; height: 100%;"]])

  for(var y=0; y<9; y++) { // y
    var row = gtable.insertRow(y);

    for(var x = 0; x<9; x++) {
        var cell = row.insertCell(x);
        setAtt(cell, [["style", "padding: 0px;"]])
        var sq = square(cell);
    }

  }
}

function boxSquares() {
  var bd = document.getElementById("board");

  for(var i=0; i<4; i++) {
    var lnx = document.createElement("div");
    var lny = document.createElement("div");
    setAtt(lnx,[["class","rainbow"],["style","background-color: #606060; width: 405px; height: 10px; position: absolute; top: "+String(i*113)+"px;"]]);
    setAtt(lny,[["class","rainbow"],["style","background-color: #606060; width: 10px; height: 349px; position: absolute; top: 0; left: "+String(i*133)+"px;"]])
    bd.appendChild(lny);
    bd.appendChild(lnx);
  }
}

window.addEventListener("load",function() {
  makeSquares();
  boxSquares();
});
