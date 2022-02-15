import { GameObject, UpdateEvent } from "./objects";
import { Renderer } from "./rendering";

export class Level {

    private objects: GameObject[] = [];

    constructor() {

    }

    update(event: UpdateEvent) {
        //Update objects
        for (let obj of this.objects) {
            obj.update(this, event)
        }
    }

    render(renderer: Renderer) {
        //Update objects
        for (let obj of this.objects) {
            obj.render(renderer)
        }
    }

    addObject(obj: GameObject) {
        this.objects.push(obj)
    }

}