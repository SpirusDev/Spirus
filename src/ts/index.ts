import { Color, Font, ObjectType } from "./types";
import { objects } from "./classes/listofobjects"

import * as config from "../../spirus.config";

const canvas = document.querySelector("canvas")
let t = 0;

function render() {
	let ctx = canvas.getContext('2d')
	let ratio = window.devicePixelRatio;

	// Hooray! No more stupid browser scaling!
	canvas.width = config.window.width * ratio;
    canvas.height = config.window.height * ratio;
    canvas.style.width = canvas.width + "px";
    canvas.style.height = canvas.height + "px";
	ctx.scale(ratio, ratio)

	ctx.clearRect(0, 0, canvas.width, canvas.height);

	ctx.imageSmoothingEnabled = false;

	objects.forEach(function(v, i, a) {
		if (v.color != null) {
			ctx.fillStyle = v.color.toString();
		} else ctx.fillStyle = Color.black;

		if (v.objType == ObjectType.square) {
			ctx.fillRect(v.position.x + canvas.width * 0.5, canvas.height - (v.position.y + canvas.height * 0.5), v.scale.x, v.scale.y);
		}else if (v.objType == ObjectType.text) {
			ctx.font = v.options.text.font
			ctx.fillText(v.options.text.text, v.position.x, v.position.y)
		}
		ctx.fillStyle = Color.white;
	}, false)
}

function update(): void {
	objects.forEach(function(v, i, a) {
		v.callback(t, objects, canvas)
	}, false)
	render();

	t++;
}

function start(): void {
	update();
	requestAnimationFrame(start);
}

if (!config.spirusOptions.madeWithSpirusWatermark) {
	document.getElementById("watermark").style.display = 'none';
}

start();
