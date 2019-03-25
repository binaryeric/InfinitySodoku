function generateRainbowText(element) {
  var text = element.innerText;
  while(true) {
    element.innerHTML = "";
    for (let i = 0; i < text.length; i++) {
      let charElem = document.createElement("span");
      charElem.style.color = "hsl(" + (360 * i / text.length) + ",80%,50%)";
      charElem.innerHTML = text[i];
      element.appendChild(charElem);
    }
  }
}

window.addEventListener("load",function() {
  var elements = document.getElementsByClassName("rainbow");
  for (let i = 0; i < elements.length; i++) {
    generateRainbowText(elements[i]);
  }
}
