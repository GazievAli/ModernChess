import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";

import blackLogo from "../../assets/BR.svg";
import whiteLogo from "../../assets/WR.svg";

export class Rook extends Figure {
    constructor(color: Colors, cells: Cell) {
        super(color, cells);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.ROOK;
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
}