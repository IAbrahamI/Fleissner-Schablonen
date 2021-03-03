var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var x = 0;
var y = 0;
for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
        ctx.strokeRect(x, y, 60, 60);
        x += 60;
        if (j == 7) {
            x = 0;
            y += 60;
        }
    }
}