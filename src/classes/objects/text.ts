import { Color, Font, ObjectType, Transform } from "../../types"
import GameObject from "../object"

export class Text extends GameObject {
    constructor(
        transform: Transform,
        public text: string,
        public font: Font,
    ) {
        super(transform, ObjectType.text);
        this.objType = ObjectType.text;
        this.options = { text: { text, font } };
        this.color = Color.white;
    }
}
