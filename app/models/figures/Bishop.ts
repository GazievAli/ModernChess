import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";

import blackLogo from "../../assets/BB.svg";
import whiteLogo from "../../assets/WB.svg";

export class Bishop extends Figure {

    constructor(color: Colors, cell: Cell) {
        super(color, cell, color === Colors.BLACK ? blackLogo : whiteLogo, FigureNames.BISHOP);
    }

    canMove(target: Cell): boolean {
        if(!super.canMove(target)) return false;
        if(this.cell.isEmptyDiagonal(target)) {
            return true;
        }
        return false;
    }
}
