import "./style/main.scss";
import { Color, ObjectType } from "./types";
import { objects } from "./classes/object"

let canvas: HTMLCanvasElement = document.querySelector("canvas")!;

// @ts-ignore
import * as config from "../spirus.config";

export function render() {
    const ctx = canvas.getContext('2d')!;
    ctx.imageSmoothingEnabled = false;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    objects.forEach(obj => {
        if (obj.color != null) {
            ctx.fillStyle = obj.color.toString();
        } else ctx.fillStyle = Color.black;

        if (obj.objType == ObjectType.square) {
            ctx.fillRect(obj.position.x + canvas.width * 0.5, canvas.height - (obj.position.y + canvas.height * 0.5), obj.scale.x, obj.scale.y);
        } else if (obj.objType == ObjectType.text && obj.options != null && obj.options.text != null) {
            ctx.font = obj.options.text.font;
            ctx.fillText(obj.options.text.text, obj.position.x, obj.position.y);
        } else if (obj.objType == ObjectType.blank) {
            // literally dont do anything lol?????
        }

        ctx.fillStyle = Color.white;
    });
}

export function update(delta: number): void {
    objects.forEach(obj => {
        if (!obj._loaded) {
            obj.load(canvas);
            obj._loaded = true;
        }
        obj.update(delta, objects, canvas);
    });
    render();
}

export function run(fn: /*(delta: number) => void*/ any): void {
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

export function fixSize() {
    const ratio = window.devicePixelRatio;
    canvas.width = config.window.width * ratio;
    canvas.height = config.window.height * ratio;
}

export default function setup() {
    canvas = document.querySelector("canvas")!;
    if (canvas == null) throw new Error("Canvas is null!");

    run(update);

    window.addEventListener("resize", fixSize);
    fixSize();

    console.log("%c✨Spirus✨\n", "font-size: 2em; font-weight: bold; color: #ffffff;", "\tThank you for using Spirus~!\n\nhttps://github.com/SpirusDev/Spirus");
}
