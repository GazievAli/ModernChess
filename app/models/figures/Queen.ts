import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";

import blackLogo from "../../assets/BQ.svg";
import whiteLogo from "../../assets/WQ.svg";

export class Queen extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell, color === Colors.BLACK ? blackLogo : whiteLogo, FigureNames.QUEEN);
    }

    canMove(target: Cell): boolean {
        if(!super.canMove(target)) {
            return false;
        }
         if(this.cell.isEmptyVertical(target)) {
            return true;
        }
        if(this.cell.isEmptyHorizontal(target)) {
             return true;
        }
       if(this.cell.isEmptyDiagonal(target)) {
            return true;
        }
        return false;
    }
}
