import { Level } from "./level";
import THREE from 'three.js';
import { UpdateEvent } from "./objects";
import { Renderer } from "./rendering";
import { Game } from "./game";

export class GameView {

    private _level: Level;
    private _game: Game;
    private _scene: THREE.Scene;
    private _camera: THREE.Camera;

    constructor(level: Level) {
        this._level = level;
    }

    init(game: Game) {
        if (this._game) {
            throw "Game already initialized";
        }
        this._game = game;

        this._scene = new THREE.Scene();
        this._camera = new THREE.PerspectiveCamera(90, window.innerWidth, window.innerHeight, 0.1, 1000); //TODO allow level to create cam

        this.level.init(this);
    }

    update(event: UpdateEvent) {
        this.level.update(event);
    }

    render(renderer: THREE.Renderer) {
        renderer.render(this.scene, this.camera);
    }

    get level() {
        return this._level;
    }

    get scene() {
        return this._scene;
    }

    get camera() {
        return this._camera;
    }

}