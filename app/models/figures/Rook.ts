import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";

import blackLogo from "../../assets/BR.svg";
import whiteLogo from "../../assets/WR.svg";

export class Rook extends Figure {
    isFirstStep: boolean = true;

    constructor(color: Colors, cell: Cell) { // Изменено здесь
        super(color, cell, color === Colors.BLACK ? blackLogo : whiteLogo, FigureNames.ROOK);
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
        return false;
    }

    moveFigure(target: Cell): void {
        super.moveFigure(target);
        this.isFirstStep = false;
    }
}