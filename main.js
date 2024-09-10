function incrementSize(){
    var size =document.querySelector("h2").style.fontSize;
    size =(parseInt(size) + 1) + 'px';
    document.querySelector("h2").style.fontSize = size;
     size = document.querySelector("p").style.fontSize;
    size =(parseInt(size) + 1) + 'px';
    document.querySelector("p").style.fontSize = size;

}
function decrementSize(){
    var size =document.querySelector("h2").style.fontSize;
    size =(parseInt(size) - 1) + 'px';
    document.querySelector("h2").style.fontSize = size;
     size = document.querySelector("p").style.fontSize;
    size =(parseInt(size) - 1) + 'px';
    document.querySelector("p").style.fontSize = size;

}

document.querySelector(".incremant").onclick = incrementSize;
document.querySelector(".decrement").onclick = decrementSize;

