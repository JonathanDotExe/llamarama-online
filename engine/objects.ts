import { Input } from "./input";
import { Level } from "./level";
import { Renderer } from "./rendering";
import { Vector3D } from "./util";

export interface UpdateEvent {
    time: number;
    input: Input;
}

export class ObjectComponent {

    private obj: GameObject = null;

    init(obj: GameObject) {
        if (this.obj) {
            throw "Component already initialized";
        }
        this.obj = obj;
    }

    update(event: UpdateEvent) {

    }

    render(renderer: Renderer) {

    }

}

export class GameObject {

    public position: Vector3D = {x: 0, y: 0, z: 0};
    public rotation: Vector3D = {x: 0, y: 0, z: 0};
    private _level: Level;

    constructor() {

    }

    update(event: UpdateEvent) {

    }

    render(renderer: Renderer) {

    }

    init(level: Level) {
        if (this._level) {
            throw "Object already initialized";
        }
        this._level = level;
    }

    get level() {
        return this._l;
    }

}