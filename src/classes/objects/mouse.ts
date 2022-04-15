import { Color, ObjectType } from "../../types";
import { checkIfTwoGameObjectsAreColliding } from "../../utils";
import GameObject from "../object";

export class Mouse extends GameObject {
    public color: Color = Color.light_blue;
    public callback(objects: GameObject[], canvas: any): void {
        canvas.addEventListener("mousemove", (e: any) => {
            let rect = canvas.getBoundingClientRect();
            let cx = canvas.width * 0.5;
            let cy = canvas.height * 0.5;
            this.transform.position.x = ((e.clientX - rect.left) / (rect.right - rect.left) * canvas.width) - cx,
            this.transform.position.y = -(((e.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height) - cy)
        })

        objects.forEach(obj => {
            if (obj.transform != this.transform && obj.objType == ObjectType.square) {
                if (checkIfTwoGameObjectsAreColliding(this, obj).overall) {
                    this.color = Color.light_blue;
                } else {
                    this.color = Color.red;
                }
            }
        });
    }
}
