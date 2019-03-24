
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
        square(cell);
    }

  }
}

/*

function makeSquares() {
  //
  var parentNode = document.getElementById("board");


  for(var i=0; i<9; i++) {
    for(var j=0; j<9; j++){
      if(j%3 == 0) s++;
      square(parentNode);

    }

  }

}
*/
