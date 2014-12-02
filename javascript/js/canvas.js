var x,y;
var dibujo;
function dibuja()
{
var area= document.getElementById("dibujito");
dibujo=area.getContext("2d");
dibujo.moveTo(0,0);
dibujo.lineTo(300,300);
dibujo.strokeStyle="00F";
dibujo.stroke();
x=300;
y=300;
}