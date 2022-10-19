"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');


drawReact(0,0,700,700);
drawReact(50,50,600,600);
drawReact(100,100,500,500);
drawReact(150,150,400,400);
drawReact(200,200,300,300);
drawReact(250,250,200,200);
drawReact(300,300,100,100);

function drawRect (x,y, size)
context.beginPath();
let red = Math.floor (Math.random() *255)
let blue = Math.floor (Math.random() *255)
let green = Math.floor (Math.random() *255)
let color = "rgb(" + red + "," + blue + "," + green + ")"
context.moveTo(50,50);
context.fillstyle-color;
context.rect(x,y,size,size);
context.stroke();
context.fill();