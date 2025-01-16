"use client";
import React, {FC} from 'react';
import LostFigures from "./LostFigures";
import {Board} from "../models/Board";

interface AsideProps {
    board: Board;
}

const RightAside:FC<AsideProps> = ({ board }) => {
    return (
        <div>
            <LostFigures
                title="Черные фигуры"
                figures={board.lostBlackFigures}
            />
            <LostFigures
                title="Белые фигуры"
                figures={board.lostWhiteFigures}
            />
        </div>
    );
};

export default RightAside;