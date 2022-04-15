import { Transform, ObjectType, Vector, Vector2, Color, Options } from "../types";

export default class GameObject {
    constructor (
        public transform: Transform,
        public objType: ObjectType,

        public options?: Options,
    ) {}

    public color: Color = Color.white
    public callback(_objects: GameObject[], _canvas: any) {}

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
