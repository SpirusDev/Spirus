import { Transform, ObjectType, Vector, Vector2, Color, Collision, Options, Font, Fonts } from "../types";

export default class GameObject {
	constructor (
		public transform: Transform,
		public objType: ObjectType,

		public options?: Options,
	) {}
		
	public color: Color = Color.white
	public callback(tick: number, objects: GameObject[], canvas: any) {}
	
	get position(): Vector2 {
		return this.transform.position;
	}
	
	get rotation(): Vector {
		return this.transform.rotation;
	}
	
	get scale(): Vector2 {
		return this.transform.scale;
	}
}