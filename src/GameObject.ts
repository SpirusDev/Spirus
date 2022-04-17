import { Transform, ObjectType, Vector, Vector2, Color, Options, Font } from './types';

export default abstract class GameObject {
    constructor(
        public transform: Transform,
        public objType: ObjectType,

        public options?: Options,
    ) { }

    public color: Color = Color.white;
    public update(_delta: number, _objects: GameObject[], _canvas: HTMLCanvasElement) {}

    public preload(_canvas: HTMLCanvasElement) {}

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

export class Blank extends GameObject {}
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
