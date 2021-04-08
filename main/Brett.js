const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.font = "30px Arial";
let x = 0;
let y = 0;
let width = 4;
let counter = 0;
let matrix = [];
let textInput=[];
let listOfWhite=[];
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
function twoDimensional(){
    for(let x=0;x<width;x++){
        for(let y=0;y<width;y++){
            if(valueRect[amountOfRects]===0 || valueRect[amountOfRects]===1 || valueRect[amountOfRects]===2){
                console.log(valueRect[amountOfRects]);
                matrix.push([x,y,0]);
            } else if(valueRect[amountOfRects]===3){
                console.log(valueRect[amountOfRects]);
                matrix.push([x,y,1]);
            }
            amountOfRects++;
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
    for(let i=0; i<width; i++){
        console.log(i);
        for(let j=0; j<width; j++){
            ctx.strokeRect(x,y,60,60);
            for(let k=0; i<matrix.length; i++){
                if(matrix[k]==1){
                    ctx.strokeRect(x,y,60,60);
                }else if(matrix[k]==0){
                    ctx.fillRect(x,y,60,60);
                }
            }
            // for (let k=0;k<listOfWhite.length;k++) {
            //     if(listOfWhite[k]===amountOfRects){
            //         if(textInput.length<=counter){
            //             ctx.fillText("X",x+20,y+40);
            //         }else if(counter<=textInput.length){
            //             ctx.fillText(textInput[k],x+21,y+40);
            //             counter++;
            //         }
            //     }
            // }
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
function rotateCanvas(){
}
