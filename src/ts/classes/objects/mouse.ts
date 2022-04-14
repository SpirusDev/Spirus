import { Color, ObjectType } from "../../types";
import { checkIfTwoGameObjectsAreColliding } from "../../utils";
import GameObject from "../object";

export class Mouse extends GameObject {
	public color: Color = Color.blue;
	public callback(tick: number, objects: GameObject[], canvas: any): void {
		const clone = new Mouse(this.transform, this.objType, this.options)
		canvas.addEventListener("mousemove", (e: any) => {
			let rect = canvas.getBoundingClientRect();
			let cx = canvas.width * 0.5;
			let cy = canvas.height * 0.5;
			this.transform.position.x = ((e.clientX - rect.left) / (rect.right - rect.left) * canvas.width) - cx,
			this.transform.position.y = -(((e.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height) - cy)
		})

		objects.forEach(function(v,i,a) {
			if (v.transform != clone.transform && v.objType == ObjectType.square) {
				console.log(v)	
				if (checkIfTwoGameObjectsAreColliding(clone, v).overall) {
					clone.color = Color.red;
				} else {
					clone.color = Color.brown;
				}
			}
		})

	}
}