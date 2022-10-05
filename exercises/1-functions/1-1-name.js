"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

context.beginPath();
context.moveTo(10,20);
context.lineTo(10,100);
context.moveTo(10,20);
context.lineTo(50,20);
context.lineTo(50,50);
context.lineTo(10,50);
context.lineTo(50,95);

//A
context.moveTo(100,25);
context.lineTo(70,100);
context.moveTo(100,25);
context.lineTo(130,100);
context.moveTo(115,60);
context.lineTo(85,60);


//Y
context.moveTo(150,20);
context.lineTo(175,50);
context.lineTo(175,100);
context.moveTo(200,20);
context.lineTo(175,50);

//A
context.moveTo(225,25);
context.lineTo(200,100);
context.moveTo(225,25);
context.lineTo(250,100);
context.moveTo(240,60);
context.lineTo(215,60);
context.strokeStyle = 'red'
context.stroke();













