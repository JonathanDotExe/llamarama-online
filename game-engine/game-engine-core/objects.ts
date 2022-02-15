import { Input } from "./input";
import { Level } from "./level";
import { Renderer } from "./rendering";

export interface UpdateEvent {
    time: number;
    input: Input;
}

class ObjectComponent {

}


export class GameObject {

    private xPos = 0.0;
    private yPos = 0.0;
    private zPos = 0.0;

    constructor() {

    }

    update(level: Level, event: UpdateEvent) {

    }

    render(renderer: Renderer) {

    }

    get x() {
        return this.xPos;
    }

    set x(val) {
        this.xPos = val;
    }

    get y() {
        return this.yPos;
    }

    set y(val) {
        this.yPos = val;
    }

    get z() {
        return this.zPos;
    }

    set z(val) {
        this.zPos = val;
    }

}