"use client";
import React, {FC} from 'react';
import {Cell} from "../models/Cell";
import {getCoords} from "../models/CoordinatesX";
import Image from 'next/image';

interface CellProps {
    cell: Cell;
    selected: boolean;
    click: (cell: Cell) => void;
    showCoordinates: boolean;
}

const CellComponent: FC<CellProps> = ({cell, selected, click, showCoordinates}) => {
    return (
        <div
            className={['cell', cell.color, selected ? "selected" : ''].join(' ')}
            onClick={() => click(cell)}
            style={{background: cell.available && cell.figure ? '#8c5d8e' : ''}}
        >
            {showCoordinates && (<span className="coordinates">{getCoords(cell.x)}{8 - cell.y}</span>)}
            {cell.available && !cell.figure && <div className={"available"}/>}
            {cell.figure?.logo && <Image src={cell.figure.logo} alt={cell.figure.name}/> }
        </div>
    );
};

export default CellComponent;