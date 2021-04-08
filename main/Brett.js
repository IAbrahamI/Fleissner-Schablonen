const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.font = "30px Arial";
let xForRect = 0;
let yForRect = 0;
let width = 4;
let textValue = 0;
let matrix = [];
let textInput=[];
const valueRect = [];
let amountOfRects = 0;
//------------------------------------------------------------
// Methode für die Random Erstellung von Schwarze Rectangles
function addRandomValues(){
    const amountOfRds = width*width;
    for(let l=0; l<amountOfRds; l++){
        const randomNumber = Math.floor(Math.random()*4);
        valueRect.push(randomNumber);
    }
}
//------------------------------------------------------------
// Methode um die Schablone zu zeichnen und Werte richtig zu speichern
function twoDimensional(){
    for(let x=0;x<width;x++){
        for(let y=0;y<width;y++){
            if(valueRect[amountOfRects]===0 || valueRect[amountOfRects]===1 || valueRect[amountOfRects]===2){
                matrix.push([x,y,0]);
                ctx.fillRect(xForRect,yForRect,60,60);

            } else if(valueRect[amountOfRects]===3){
                matrix.push([x,y,1]);
                ctx.strokeRect(xForRect,yForRect,60,60);
                if(textInput.length<=textValue){
                    ctx.fillText("X", xForRect+24, yForRect+40);
                }else {
                    ctx.fillText(textInput[textValue], xForRect+24, yForRect+44);
                }
                textValue++;
            }
            amountOfRects++;
            xForRect+=60;
            if(y===(width-1)){
                xForRect=0;
                yForRect+=60;
            }
        }
    }
    amountOfRects=0;
}

//------------------------------------------------------------
// Funktion um die Werte zu ersetzten
function rotateValues(){
    for(let i=0; i<width; i++){
        for(let j=0; j<width; j++){
            ctx.strokeRect(x,y,60,60);
            if(matrix[amountOfRects][2]==0){
                ctx.fillRect(x,y,60,60);
            }else if(matrix[amountOfRects][2]==1){
                ctx.strokeRect(x,y,60,60);
            }

            amountOfRects++;
            x+=60;
            if(j===(width-1)){
                x=0;
                y+=60;
            }
        }
    }
}
//------------------------------------------------------------
// Speichert und zeichnet alle Buchstaben
function saveValues(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    const inputValue = document.getElementById('textInput').value;
    textInput = Array.from(inputValue);
    if(textInput.length>(width*4)){
        width = width+2;
    }
    addRandomValues();
    twoDimensional();
}
//------------------------------------------------------------
function rotateCanvas(){
    rotateValues();
}