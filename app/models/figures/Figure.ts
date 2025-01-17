import {Colors} from "../Colors";
import {Cell} from "../Cell";

export enum FigureNames {
    FIGURE = 'Фигура',
    KING = 'Король',
    KNIGHT = 'Конь',
    QUEEN = 'Ферзь',
    BISHOP = 'Слон',
    ROOK = 'Ладья',
    PAWN = 'Пешка',
}

export abstract class Figure {
    color: Colors;
    cell: Cell;
    logo: string | null;
    name: string;

    constructor(color: Colors, cell: Cell, logo: string | null, name: string) {
        this.color = color;
        this.cell = cell;
        this.cell.figure = this;
        this.logo = logo;
        this.name = name;
    }

     canMove(target: Cell): boolean {
        if(target.figure?.color === this.color) {
            return false
        }
        return true;
    }

      moveFigure(target: Cell) {

    }
}
