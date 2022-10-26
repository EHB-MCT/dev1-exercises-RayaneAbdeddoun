"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let horizontalLines = 700;

let verticalLines = 500;

let width = 600;

let height = 300;

drawLine();

function drawLine() {
	let step = width / horizontalLines;

	for (let i = 0; i < horizontalLines; i++) {
		Utils.drawLine(0 + step * i, 0, width - step * i, height);
	}

	for (let i = 0; i < verticalLines; i++) {
		Utils.drawLine(0, 0 + step * i, width, height - step * i);
	}
}
