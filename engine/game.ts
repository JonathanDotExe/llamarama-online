import { GameView } from "./view";

export class Game {

    _gameView: GameView;

    constructor() {

    }

    get gameView() {
        return this._gameView;
    }

    updateGameView(_gameView: GameView) {
        //TODO dispose scene
        this._gameView = _gameView;
    }

}