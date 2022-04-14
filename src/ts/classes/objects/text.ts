import { Color, Fonts, ObjectType, Transform } from "../../types"
import GameObject from "../object"

export class Text extends GameObject {
	constructor (
		public transform: Transform,
		public text: string,
		public font: Fonts,
		
	) {
		super(transform, ObjectType.text)
		this.objType = ObjectType.text
		this.options = {
			text: {
				text: text,
				font: font
			}
		}
	}
	
	public color: Color = Color.white
	public callback(tick: number, objects: GameObject[], canvas: any): void {}
}