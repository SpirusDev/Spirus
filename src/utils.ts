import GameObject from "./classes/object";
import { Collision } from "./types";
import { objects } from './classes/object';

export function isColliding(object1: GameObject, object2: GameObject): Collision {
    let aLeftOfB = (object1.position.x + object1.scale.x) < object2.position.x;
    let aRightOfB = object1.position.x > (object2.position.x + object2.scale.x);
    let aBelowB = (object1.position.y + object1.scale.y) < object2.position.y;
    let aAboveB = object1.position.y > (object2.position.y + object2.scale.y);

    return {
        left: aLeftOfB,
        right: aRightOfB,
        up: aAboveB,
        down: aBelowB,

        overall: !(aLeftOfB || aRightOfB || aAboveB || aBelowB)
    };
}

export function isVectorOOB(vector: number) {
    return vector <= -70 || vector >= 70;
}

export function findObjectOfClass(classType: Function) {
    return objects.find(c => c instanceof classType)
}
