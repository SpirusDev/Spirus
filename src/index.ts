import "./style/main.scss";
import { Color, ObjectType } from "./types";
import { objects } from "./classes/listofobjects"

// @ts-ignore
import * as config from "../spirus.config";

const canvas = document.querySelector("canvas")!;
const ctx = canvas.getContext("2d")!;
if (ctx == null) throw new Error("Canvas context is null");

function render() {

    const ratio = window.devicePixelRatio;

    // Hooray! No more stupid browser scaling!
    canvas.width = config.window.width * ratio;
    canvas.height = config.window.height * ratio;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.imageSmoothingEnabled = false;

    objects.forEach(obj => {
        if (obj.color != null) {
            ctx.fillStyle = obj.color.toString();
        } else ctx.fillStyle = Color.black;

        if (obj.objType == ObjectType.square) {
            ctx.fillRect(obj.position.x + canvas.width * 0.5, canvas.height - (obj.position.y + canvas.height * 0.5), obj.scale.x, obj.scale.y);
        } else if (obj.objType == ObjectType.text && obj.options != null && obj.options.text != null) {
            ctx.font = obj.options.text.font;
            ctx.fillText(obj.options.text.text, obj.position.x, obj.position.y);
        }

        ctx.fillStyle = Color.white;
    });
}

function update(): void {
    objects.forEach(obj => {
        obj.callback(objects, canvas);
    });
    render();
}

function run(fn: (delta: number) => void): void {
    let last = performance.now();
    let delta = 0;

    function loop(now: number) {
        delta = now - last;
        last = now;

        fn(delta);

        requestAnimationFrame(loop);
    }

    loop(performance.now());
}

run(update);
