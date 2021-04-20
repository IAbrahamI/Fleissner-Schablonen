const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.font = "30px Arial";
let xForRect = 0;
let yForRect = 0;
let width = 4;
let textValue = 0;
let matrix = [];

let TempArray = [];
let textInput = [];
const valueRect = [];
let amountOfRects = 0;
//------------------------------------------------------------
// Methode für die Random Erstellung von Schwarze Rectangles
function addRandomValues() {
    const amountOfRds = width * width;
    for (let l = 0; l < amountOfRds; l++) {
        const randomNumber = Math.floor(Math.random() * 4);
        valueRect.push(randomNumber);
    }
}

//------------------------------------------------------------
// Methode um die Schablone zu zeichnen und Werte richtig zu speichern
function threeDimensional() {
    for (let x = 0; x < width; x++) {
        let array = [];
        for (let y = 0; y < width; y++) {
            if (valueRect[amountOfRects] === 0 || valueRect[amountOfRects] === 1 || valueRect[amountOfRects] === 2) {
                TempArray = [x, y, 0];
                ctx.fillRect(xForRect, yForRect, 60, 60);
                console.log("Black")
            } else if (valueRect[amountOfRects] === 3) {
                TempArray = [x, y, 1];
                ctx.strokeRect(xForRect, yForRect, 60, 60);
                console.log("White")
                if (textInput.length <= textValue) {
                    ctx.fillText("X", xForRect + 24, yForRect + 40);
                } else {
                    ctx.fillText(textInput[textValue], xForRect + 24, yForRect + 44);
                }
                textValue++;
            }
            amountOfRects++;
            xForRect += 60;
            if (y === (width - 1)) {
                xForRect = 0;
                yForRect += 60;
            }
            array.push(TempArray);
        }

        matrix.push(array)
    }
    console.log(matrix)
    amountOfRects = 0;
}

//------------------------------------------------------------
// Funktion um die Werte zu ersetzten
let counter = 0;
function rotateValues() {
    rotate(matrix)
    if (counter < 3) {
        counter++;
        for (let i = 0; i < width; i++) {
            for (let j = 0; j < width; j++) {
                if (matrix[i][j][2] == 0) {
                    console.log("Black " + matrix[i][j][2])
                    ctx.fillRect(xForRect, yForRect, 60, 60);
                } else if (matrix[i][j][2] == 1) {
                    console.log("White" + matrix[i][j][2])
                    ctx.strokeRect(xForRect, yForRect, 60, 60);
                    if (textInput.length <= textValue) {
                        ctx.fillText("X", xForRect + 24, yForRect + 40);
                    } else {
                        ctx.fillText(textInput[textValue], xForRect + 24, yForRect + 44);
                    }
                    textValue++;
                }
                amountOfRects++;
                xForRect += 60;
                if (j === (width - 1)) {
                    xForRect = 0;
                    yForRect += 60;
                }
            }
        }
        console.log(matrix)
    }else{
        document.getElementById("rotationButton").disabled = true;
    }

}

//Die mathematische RotationsFunktion
function rotate(matrix) {
    const n = matrix.length;
    const x = Math.floor(n / 2);
    const y = n - 1;
    for (let i = 0; i < x; i++) {
        for (let j = i; j < y - i; j++) {
            k = matrix[i][j];
            matrix[i][j] = matrix[y - j][i];
            matrix[y - j][i] = matrix[y - i][y - j];
            matrix[y - i][y - j] = matrix[j][y - i]
            matrix[j][y - i] = k
        }
    }
}

//------------------------------------------------------------
// Speichert und zeichnet alle Buchstaben
function saveValues() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const inputValue = document.getElementById('textInput').value;
    textInput = Array.from(inputValue);
    if (textInput.length > (width * 4)) {
        width = width + 2;
    }
    addRandomValues();
    threeDimensional();
}

//------------------------------------------------------------
function rotateCanvas() {
    rotateValues();
}