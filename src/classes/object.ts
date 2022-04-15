import { Transform, ObjectType, Vector, Vector2, Color, Options } from "../types";

export default class GameObject {
    /** @private */
    _loaded: boolean;

    constructor(
        public transform: Transform,
        public objType: ObjectType,

        public options?: Options,
    ) {
        this._loaded = false;
    }

    public color: Color = Color.white;
    public update(_delta: number, _objects: GameObject[], _canvas: HTMLCanvasElement) {}

    public load(_canvas: HTMLCanvasElement) {}

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
