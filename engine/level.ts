import { GameObject, UpdateEvent } from "./objects";
import { Renderer } from "./rendering";
import { GameView } from "./view";

export class Level {

    private objects: GameObject[] = [];
    private _gameView: GameView;

    constructor() {

    }

    init(view: GameView) {
        if (this._gameView) {
            throw "Level already initialized";
        }
        this._gameView = view;
    }

    update(event: UpdateEvent) {
        //Update objects
        for (let obj of this.objects) {
            obj.update(event)
        }
    }

    render(renderer: Renderer) {
        //Update objects
        for (let obj of this.objects) {
            obj.render(renderer)
        }
    }

    addObject(obj: GameObject) {
        obj.init(this);
        this.objects.push(obj)
    }

    get gameView() {
        return this._gameView;
    }

}