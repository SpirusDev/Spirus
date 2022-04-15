import { Color } from "../../types";
import GameObject from "../object";

export class Blank extends GameObject {
    public color: Color = Color.white;
    public callback(_objects: GameObject[], _canvas: any): void {
        // does nothing
    }
}
