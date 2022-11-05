var canvas = document.getElementById("myCanvas"); 
var context = canvas.getContext("2d"); 
context.strokeStyle = "red";
context.fillStyle = "rgba(0, 0, 255, 0.5)";
context.fillRect(10, 10, 100, 100);   
context.strokeRect(10, 10, 100, 100);


function drawPattern() {
    var canvas = document.getElementById("demo2");
    var context = canvas.getContext("2d");
    context.strokeStyle = "red";

    var img = new Image(); 
    img.src = "data:image/jpeg;base64,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";
    img.onload = function() { 
        var pattern = context.createPattern(img, "repeat"); 
        context.fillStyle = pattern;                        
        context.fillRect(10, 10, 100, 100);                  
        context.strokeRect(10, 10, 100, 100);
    };    
}
drawPattern()


function drawGradient() {
    var canvas = document.getElementById("demo3");
    var context = canvas.getContext("2d");
    context.strokeStyle = "red";
    var gradient = context.createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, "green"); 
    gradient.addColorStop(1, "white"); 
    context.fillStyle = gradient; 
    context.fillRect(10, 10, 100, 100); 
    context.strokeRect(10, 10, 100, 100);  
}
drawGradient()

function drawCircle(canvas) {
    var canvas = document.getElementById("demo4");
    var context = canvas.getContext("2d");
    context.beginPath();
    context.arc(50, 50, 30, 0, Math.PI*2, true);
    context.closePath();
    context.strokeStyle = "blue";
    context.fillStyle = "purple";
    context.lineWidth = 3; 
    context.fill(); 
    context.stroke(); 
}
drawCircle()

function saveDrawing() {
    var canvas5 = document.getElementById("demo5");
    window.open(canvas5.toDataURL("image/png"));
}

function drawImageToCanvas() {
    var canvas = document.getElementById("demo6");
    var context = canvas.getContext("2d");
    var image = document.getElementById("myImageElem");
    context.drawImage(image, 0, 0); 
}
var button = document.getElementById("saveButton");
button.addEventListener("click", saveDrawing, false);
window.addEventListener("load", drawImageToCanvas, false);


var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
var image = document.getElementById("myImageElem");
// draw the image at x=0 and y=0 on the canvas
context.drawImage(image, 68, 68);
var imageData = context.getImageData(0, 0, 1, 1);
var pixelData = imageData.data;
console.log(pixelData.length);

