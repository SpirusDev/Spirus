import { ObjectType } from "../types";
import GameObject from "./object";
import { Blank } from "./objects/blank";
import { Mouse } from "./objects/mouse";
import { Text } from "./objects/text";

export const objects: GameObject[] = [
	new Blank({position: {x: 0,y: 0},rotation: {x: 0},scale: {x: 25,y: 25},}, ObjectType.square),
	new Mouse({position: {x: 0,y: 0},rotation: {x: 0},scale: {x: 25,y: 25},}, ObjectType.square),
	new Text({position: {x: (1920 / 2) - 48 * 2.5,y: 1080 / 2},rotation: {x: 0},scale: {x: 5,y: 5},}, "Hello world!", "48px Arial")
];