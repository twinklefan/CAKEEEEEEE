// HTML SET UP
var pupilsHTMLCollection = document.getElementsByClassName('pupil');
var pupilsArray = Array.from(pupilsHTMLCollection);
// INPUT
var input = {
  mouseX: {
    start: 0,
    end: window.innerWidth,
    current: 0,
  },
  mouseY: {
    start: 0,
    end: window.innerHeight,
    current: 0,
  },
}
input.mouseX.range = input.mouseX.end - input.mouseX.start;
input.mouseY.range = input.mouseY.end - input.mouseY.start;
// OUTPUT
var output = {
  x: {
    start: -75,
    end: 75,
    current: 0,
  },
  y: {
    start: -75,
    end: 75,
    current: 0,
  },
}
output.x.range = output.x.end - output.x.start;
output.y.range = output.y.end - output.y.start;
// MOUSE MOVEMENT
var handleMouseMove = function(event) {
  // MOUSE X INPUT
  input.mouseX.current = event.clientX;
  input.mouseX.fraction = (input.mouseX.current - input.mouseX.start) / input.mouseX.range;
  // MOUSE Y INPUT
  input.mouseY.current = event.clientY;
  input.mouseY.fraction = (input.mouseY.current - input.mouseY.start) / input.mouseY.range;
  // OUTPUT X
  output.x.current = output.x.start + (input.mouseX.fraction * output.x.range);
  // OUTPUT Y
  output.y.current = output.y.start + (input.mouseY.fraction * output.y.range);
  // APPLY OUTPUT TO HTML
  pupilsArray.forEach(function(pupil, k) {
    pupil.style.transform = 'translate(' + output.x.current + 'px, ' + output.y.current + 'px)';
  });
  // console.log('output.x.current', output.x.current)
  // console.log('mouseY.fraction', input.mouseY.fraction)
}
var handleResize = function() {
  // X HANDLE RESIZE
  input.mouseX.end = window.innerWidth;
  input.mouseX.range = input.mouseX.end - input.mouseX.start;
  // Y Handle resize
  input.mouseY.end = window.innerHeight;
  input.mouseY.range = input.mouseY.end - input.mouseY.start;
}
window.addEventListener('mousemove', handleMouseMove)
window.addEventListener('resize', handleResize)

// BACKGROUND COLOUR
var numBgColor = Math.floor(Math.random() * 32);
let bgColor;
switch (numBgColor) {
  case 0:
    bgColor = "F2C4DE";
    break;
  case 1:
    bgColor = "F2A477";
    break;
  case 2:
    bgColor = "A9B5D9";
    break;
  case 3:
    bgColor = "B8C6D9";
    break;
  case 4:
    bgColor = "C2E6DF";
    break;
  case 5:
    bgColor = "E5F5DC";
    break;
  case 6:
    bgColor = "F2DEA2";
    break;
  case 7:
    bgColor = "AED8F2";
    break;
  case 8:
    bgColor = "71B1D9";
    break;
  case 9:
    bgColor = "D9BCF2";
    break;
  case 10:
    bgColor = "BDD2B6";
    break;
  case 11:
    bgColor = "F0D9FF";
    break;
  case 12:
    bgColor = "B7E5DD";
    break;
  case 13:
    bgColor = "9ED2C6";
    break;
  case 14:
    bgColor = "AFB4FF";
    break;
  case 15:
    bgColor = "E1FFEE";
    break;
  case 16:
    bgColor = "A5F1E9";
    break;
  case 17:
    bgColor = "7FBCD2";
    break;
  case 18:
    bgColor = "F07DEA";
    break;
  case 19:
    bgColor = "9FC9F3";
    break;
  case 20:
    bgColor = "A084CA";
    break;
  case 21:
    bgColor = "FAF4B7";
    break;
  case 22:
    bgColor = "ECC5FB";
    break;
  case 23:
    bgColor = "AF0171";
    break;
  case 24:
    bgColor = "D2DAFF";
    break;
  case 25:
    bgColor = "C3F8FF";
    break;
  case 26:
    bgColor = "FF9494";
    break;
  case 27:
    bgColor = "FFE3E1";
    break;
  case 28:
    bgColor = "6F38C5";
    break;
  case 29:
    bgColor = "87A2FB";
    break;
  case 30:
    bgColor = "C689C6";
    break;
  case 31:
    bgColor = "DEFFC4";
}
document.body.style.backgroundColor = '#' + bgColor;

//CURSOR IMAGE
var numCursorImg = Math.floor(Math.random() * 11);

let cursorImg;
switch (numCursorImg) {
  case 0:
    cursorImg = "url('images/cake0.png'), auto";
    break;
  case 1:
    cursorImg = "url('images/cake1.png'), auto";
    break;
  case 2:
    cursorImg = "url('images/cake2.png'), auto";
    break;
  case 3:
    cursorImg = "url('images/cake3.png'), auto";
    break;
  case 4:
    cursorImg = "url('images/cake4.png'), auto";
    break;
  case 5:
    cursorImg = "url('images/cake5.png'), auto";
    break;
  case 6:
    cursorImg = "url('images/cake6.png'), auto";
    break;
  case 7:
    cursorImg = "url('images/cake7.png'), auto";
    break;
  case 8:
    cursorImg = "url('images/cake8.png'), auto";
    break;
  case 9:
    cursorImg = "url('images/cake9.png'), auto";
    break;
  case 10:
    cursorImg = "url('images/cake10.png'), auto";
}
var list, index;
list = document.getElementsByClassName("cursor");
for (index = 0; index < list.length; ++index) {
  list[index].setAttribute("style", "cursor: " + cursorImg + ";");
}
