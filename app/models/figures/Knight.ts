import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";

import blackLogo from "../../assets/BN.svg";
import whiteLogo from "../../assets/WN.svg";

export class Knight extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell, color === Colors.BLACK ? blackLogo : whiteLogo, FigureNames.KNIGHT);
    }

    canMove(target: Cell): boolean {
        if(!super.canMove(target)) {
            return false;
        }
        const dx = Math.abs(this.cell.x - target.x);
        const dy = Math.abs(this.cell.y - target.y);
        return (dx === 1 && dy === 2) || (dx === 2 && dy === 1);
    }
}
