import { Color, Font, ObjectType, Transform } from "../../types"
import GameObject from "../object"

export class Text extends GameObject {
    constructor (
        public transform: Transform,
        public text: string,
        public font: Font,

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
    public callback(_objects: GameObject[], _canvas: any): void {}
}
