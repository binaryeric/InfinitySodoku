var boundx = 400;
var boundy = 300;
var size = 81;

var x = Math.round(boundx/size);
var y = Math.round(boundy/size);

function square(node) {
  var e = document.createElement('input');

  e.setAttribute("class","square");
  e.setAttribute("pattern","[0-9]{1,2}");
  e.style.width = x;
  e.style.height = y;
  node.appendChild(e);
  return e;
}

function makeSquares() {
  //
  var parentNode = document.getElementById("board");

  for(var i=0; i<boundx; i+=x) {
    for(var j=0; j<boundy; j+=y){
      var sq = square(parentNode);
      sq.style.left = i;
      sq.style.top = y;
    }
  }

}
