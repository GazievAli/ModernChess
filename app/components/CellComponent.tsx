"use client";
import React, {FC} from 'react';
import {Cell} from "../models/Cell";
import {getCoords} from "../models/CoordinatesX";
import Image from 'next/image';

interface CellProps {
    cell: Cell;
    selected: boolean;
    click: (cell: Cell) => void;
    children?: React.ReactNode;
}

const CellComponent: FC<CellProps> = ({cell, selected, click}) => {
    const isBottomRow = cell.y === 7;
    const isLeftColumn = cell.x === 7;

    return (
        <div
            className={['cell', cell.color, selected ? "selected" : ''].join(' ')}
            onClick={() => click(cell)}
            style={{background: cell.available && cell.figure ? '#829769' : ''}}
        >
             {isLeftColumn && <span className="nums">{8 - cell.y}</span>}
            {isBottomRow && <span className="letters">{getCoords(cell.x)}</span>}
            {cell.available && !cell.figure && <div className={"available"}/>}
            {cell.figure?.logo && <Image src={cell.figure.logo} alt={cell.figure.name}/> }
        </div>
    );
};

export default CellComponent;