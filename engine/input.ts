import { Vector2D } from "./util";

export interface Input {

    /**
     * Returns whether a button is pressed
     * @param button 
     * @returns 
     */
    getButton(button: string): boolean;
    /**
     * Returns the direction of an axis
     * @param axis
     */
    getAxis(axis: string): Vector2D;

}

