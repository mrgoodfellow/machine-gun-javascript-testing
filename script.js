obj=document.getElementsByTagName("object");
var mouseDown = 0;
document.onmousedown = function() { 
    ++mouseDown;
}
document.onmouseup = function() {
  --mouseDown;
}

var touchDown = 0;
document.addEventListener("touchstart", start);
document.addEventListener("touchend", end);
function start() { 
    ++touchDown;
}
function end() {
  --touchDown;
}

for(i = 0; i < obj.length; i++) {
obj[i].addEventListener("mouseover", colorred ,false);
obj[i].addEventListener("touchmove", colorred ,false);
}
function colorred(){
    if(mouseDown>0|touchDown>0){
        this.className = "red";
    }
}
