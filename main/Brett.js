var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.font = "30px Arial";
let x = 0;
let y = 0;
let textInput=[];
var hasStarted=false;
//------------------------------------------------------------
function saveValue(){
    const inputValue = document.getElementById('input').value
    textInput = Array.from(inputValue);
    hasStarted=true;
}
//------------------------------------------------------------
// Methode für die Random Erstellung von Schwarze Rectangles
const amountOfRds = 64;
const valueRect = [];
for(let l=0; l<amountOfRds; l++){
    const randomNumber = Math.floor(Math.random()*4);
    valueRect.push(randomNumber);
}
let xRect = 0;
let yRect = 0;
var valueOfLetter = 0;
for(let k=0;k<valueRect.length;k++){
    const brect = valueRect[k];
    if(brect===0 || brect===1 || brect===2){
        ctx.fillRect(xRect,yRect,60,60);
    } else if(brect===3 && hasStarted===true){
        //console.log(textInput[valueOfLetter]);
        // ctx.fillText(textInput[valueOfLetter],xRect+20,yRect+40);
        valueOfLetter++;
    }
    xRect+=60;
    if(k===7 || k===15 || k===23 || k===31 || k===39 || k===47 || k===55 || k===63){
        xRect=0;
        yRect+=60;
    }
}
//------------------------------------------------------------
// Methode zum Zeichnen des Textes
for(let i=0; i<8; i++){
    for(let j=0; j<8; j++){
        ctx.strokeRect(x,y,60,60);
        ctx.fillText("0",x+22,y+40);
        x+=60;
        if(j===7){
            x=0;
            y+=60;
        }
    }
}
//------------------------------------------------------------