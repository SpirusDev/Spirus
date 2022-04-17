import { run } from "./utils";
import { Color, GameConfig, ObjectType } from "./types";
import GameObject from "./GameObject";

export class Game {
    public readonly canvas: HTMLCanvasElement;
    public readonly config: GameConfig;
    public readonly objects: GameObject[];
    public loaded: boolean;
    public readonly ctx: CanvasRenderingContext2D;

    constructor(canvas: HTMLCanvasElement, config: GameConfig) {
        this.canvas = canvas;
        this.config = config;
        this.objects = [];
        this.loaded = false;

        this._fixSize();
        window.addEventListener("resize", () => this._fixSize());

        this.ctx = this.canvas.getContext("2d")!;
        this.ctx.imageSmoothingEnabled = false;
    }

    private _fixSize(): void {
        const ratio = window.devicePixelRatio;
        this.canvas.width = this.config.size.width * ratio;
        this.canvas.height = this.config.size.height * ratio;
    }

    public start(): void {
        this._preload();
        run(this._tick.bind(this));

        console.log("%c✨Spirus✨\n", "font-size: 2em; font-weight: bold; color: #ffffff;", "\tThank you for using Spirus~!\n\nhttps://github.com/SpirusDev/Spirus");
    }

    private _preload(): void {
        if (this.loaded) return;
        this.objects.forEach(obj => {
            obj.preload(this.canvas);
        });
        this.loaded = true;
    }

    private _tick(delta: number): void {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // update
        this.objects.forEach(obj => {
            obj.update(delta, this.objects, this.canvas);
        });

        // draw
        this.objects.forEach(obj => {
            if (obj.color != null) {
                this.ctx.fillStyle = obj.color.toString();
            } else this.ctx.fillStyle = Color.black;

            this.ctx.rotate(obj.rotation.x * Math.PI / 180);

            if (obj.objType == ObjectType.square) {
                this.ctx.fillRect(obj.position.x + this.canvas.width * 0.5, this.canvas.height - (obj.position.y + this.canvas.height * 0.5), obj.scale.x, obj.scale.y);
            } else if (obj.objType == ObjectType.text && obj.options != null && obj.options.text != null) {
                this.ctx.font = obj.options.text.font;
                this.ctx.fillText(obj.options.text.text, obj.position.x, obj.position.y);
            } else if (obj.objType == ObjectType.blank) {
                // literally dont do anything lol?????
            }

            this.ctx.fillStyle = Color.white;
            // reset context
            this.ctx.rotate(0 * Math.PI / 180);
        });
    }

    public findObjectOfType(classType: abstract new() => GameObject) {
        return this.objects.find(c => c instanceof classType);
    }
}
