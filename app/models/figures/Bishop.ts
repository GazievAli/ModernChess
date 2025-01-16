import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";

import blackLogo from "../../assets/BB.svg";
import whiteLogo from "../../assets/WB.svg";

export class Bishop extends Figure {

    constructor(color: Colors, cells: Cell) {
        super(color, cells);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.BISHOP;
    }

    canMove(target: Cell): boolean {
        if(this.cell.isEmptyDiagonal(target)) {
            return true;
        }
        return false;
    }
}