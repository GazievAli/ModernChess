import { Figure, FigureNames } from "./Figure";
import { Colors } from "../Colors";
import { Cell } from "../Cell";
import {Rook} from "./Rook";

import blackLogo from "../../assets/BK.svg";
import whiteLogo from "../../assets/WK.svg";

export class King extends Figure {
    isFirstStep: boolean = true;

    constructor(color: Colors, cell: Cell) {
        super(color, cell, color === Colors.BLACK ? blackLogo : whiteLogo, FigureNames.KING);
    }


    canMove(target: Cell): boolean {
        if (!super.canMove(target)) return false;
        //Обычный ход короля
        const dx = Math.abs(target.x - this.cell.x);
        const dy = Math.abs(target.y - this.cell.y);
          if (dx <= 1 && dy <= 1) return true;

        //Проверка на рокировку
        return this.canCastle(target)
    }

     canCastle(target: Cell): boolean {
        if (!this.isFirstStep) return false
            if(target.y !== this.cell.y) return false
       const rook = this.getRook(target)
           if(!rook) return false;
           if (!rook.isFirstStep) return false;
           const direction = target.x > this.cell.x ? 1 : -1;

           for(let x = this.cell.x + direction; x !== target.x; x += direction) {
              if(!this.cell.board.getCell(x, this.cell.y).isEmpty()) return false
           }

        
        return true;
    }

    getRook(target: Cell): Rook | undefined {
        if (target.y !== this.cell.y) return undefined;

        if (target.x === 2) {
            const rook = this.cell.board.getCell(0, this.cell.y).figure
            return rook instanceof Rook ? rook : undefined;
        }
         if (target.x === 6) {
           const rook = this.cell.board.getCell(7, this.cell.y).figure
           return rook instanceof Rook ? rook : undefined;
        }

         return undefined
    }

   moveFigure(target: Cell): void {
        super.moveFigure(target);
        this.isFirstStep = false;
        if(this.canCastle(target)){
           const rook = this.getRook(target);
             if(rook) {
                 const rookTargetX = target.x > this.cell.x ? target.x - 1 : target.x + 1;
                 const rookTarget = this.cell.board.getCell(rookTargetX, this.cell.y);
                 const rookCell = rook.cell
                 rook.cell.moveFigure(rookTarget);
             }
        }
    }
}

