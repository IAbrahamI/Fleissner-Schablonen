const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.font = "30px Arial";
let x = 0;
let y = 0;
let textInput=[];
let listOfWhite=[];
//------------------------------------------------------------
// Methode für die Random Erstellung von Schwarze Rectangles
const amountOfRds = 64;
const valueRect = [];
for(let l=0; l<amountOfRds; l++){
    const randomNumber = Math.floor(Math.random()*4);
    valueRect.push(randomNumber);
}
//------------------------------------------------------------
let xRect = 0;
let yRect = 0;
for(let k=0;k<valueRect.length;k++){
    const brect = valueRect[k];
    if(brect===0 || brect===1 || brect===2){
        ctx.fillRect(xRect,yRect,60,60);
    }else if(brect===3){
        listOfWhite.push(k);
    }
    xRect+=60;
    if(k===7 || k===15 || k===23 || k===31 || k===39 || k===47 || k===55 || k===63){
        xRect=0;
        yRect+=60;
    }
}
//------------------------------------------------------------
// Methode zum Zeichnen des Bretts
for(let i=0; i<8; i++){
    for(let j=0; j<8; j++){
        ctx.strokeRect(x,y,60,60);
        x+=60;
        if(j===7){
            x=0;
            y+=60;
        }
    }
}
//------------------------------------------------------------
function saveValue(){
    const inputValue = document.getElementById('input').value;
    textInput = Array.from(inputValue);
    let x = 0;
    let y = 0;
    let counter = 0;
    let amountOfRects = 0;
    for(let i=0; i<8; i++){
        for(let j=0; j<8; j++){
            for (let k=0;k<listOfWhite.length;k++) {
                if(listOfWhite[k]===amountOfRects){
                    if(textInput.length<=counter){
                        ctx.fillText("X",x+20,y+40);
                    }else if(counter<=textInput.length){
                        ctx.fillText(textInput[k],x+21,y+40);
                        counter++;
                    }
                }
            }
            amountOfRects++;
            x+=60;
            if(j===7){
                x=0;
                y+=60;
            }
        }
    }
}
//------------------------------------------------------------
