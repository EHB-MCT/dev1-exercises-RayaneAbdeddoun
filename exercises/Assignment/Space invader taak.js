"use script"

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

context.beginPath();
context.rect(20,20,300,300);
context.rect(20,20,50,50);
context.fill();


