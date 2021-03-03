var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.font = "30px Arial";
var x = 0;
var y = 0;
var amountOfRds = 6;
let values = [];
for(var l=0;l<amountOfRds;l++){
    values.push(Math.floor(Math.random()*1));
}

for(var i=1; i<8;i++){
    for(var j=1;j<8;j++){
        ctx.strokeRect(x,y,60,60);
        for(var u=0;u<values;u++){
            if(values.find(u)==0){
                ctx.fillRect(x+20,y+40);
                ctx.fillText("0",x+20,y+40);
            }else if (values.find(u)==1){
                ctx.fillText("1",x+20,y+40);
            }
        }
        x+=60;
        if(j==7){
            x=0;
            y+=60;
        }
    }
}