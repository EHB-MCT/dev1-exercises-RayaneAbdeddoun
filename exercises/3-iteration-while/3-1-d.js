"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawDiagonalLines();
}

function drawDiagonalLines() {
    let i = 0;
    let step = 30;
    while (i <= 5) {
        Utils.drawLine(50+(step*i),200+(step*i),200 + i+= 1; 
        i = ;
    }
}