import { Color, ObjectType, Options, Transform } from "../../types";
import { isColliding } from "../../utils";
import GameObject from "../object";

export class Mouse extends GameObject {
    constructor(
        transform: Transform,
        objType: ObjectType,

        options?: Options,
    ) {
        super(transform, objType, options);
        this.color = Color.red;
    }

    public override load(canvas: HTMLCanvasElement): void {
        canvas.addEventListener("mousemove", (e: any) => {
            let rect = canvas.getBoundingClientRect();
            let cx = canvas.width * 0.5;
            let cy = canvas.height * 0.5;
            this.transform.position.x = ((e.clientX - rect.left) / (rect.right - rect.left) * canvas.width) - cx,
            this.transform.position.y = -(((e.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height) - cy)
        });
    }

    public override update(_delta: number, objects: GameObject[]): void {
        objects.forEach(obj => {
            if (obj.transform != this.transform && obj.objType == ObjectType.square) {
                if (isColliding(this, obj).overall) {
                    this.color = Color.light_blue;
                } else {
                    this.color = Color.red;
                }
            }
        });
    }
}
