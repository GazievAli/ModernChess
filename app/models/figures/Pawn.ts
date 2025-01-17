import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";

import blackLogo from "../../assets/BP.svg";
import whiteLogo from "../../assets/WP.svg";

export class Pawn extends Figure {

    isFirstStep: boolean = true;

    constructor(color: Colors, cell: Cell) {
        super(color, cell, color === Colors.BLACK ? blackLogo : whiteLogo, FigureNames.PAWN);
    }

     private isAttackMove(target: Cell): boolean {
        const direction = this.cell.figure?.color === Colors.BLACK ? 1 : -1;
      return  target.y === this.cell.y + direction
        && Math.abs(target.x - this.cell.x) === 1
        && this.cell.isEnemy(target);
    }

    canMove(target: Cell): boolean {
        if(!super.canMove(target)) {
            return false;
        }
        const direction = this.cell.figure?.color === Colors.BLACK ? 1 : -1;
        const firstStepDirection = this.cell.figure?.color === Colors.BLACK ? 2 : -2;

        if ((target.y === this.cell.y + direction || (this.isFirstStep && target.y === this.cell.y + firstStepDirection))
            && target.x === this.cell.x
            && !target.figure
           ) {
            return true;
        }

        if(this.isAttackMove(target)) {
              return true
        }
         return false;
    }

    moveFigure(target: Cell): void {
        super.moveFigure(target);
        this.isFirstStep = false;
    }
}
