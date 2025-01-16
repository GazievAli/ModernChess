"use client";
import React, {FC} from 'react';
import LostFigures from "./LostFigures";
import {Board} from "../models/Board";
import { Player } from '../models/Player';
import { Colors } from '../models/Colors';


interface AsideProps {
    board: Board;
    currentPlayer: Player | null;
}

const RightAside:FC<AsideProps> = ({ board, currentPlayer }) => {

    const enemyName = "Robert"
    const playerName = "AliGaziev"
    const buttos = ["1", "2", "3", "4", "5", "6"]
    const movesList = [{
        moves: 1,
        firstPlayer: "a3",
        secondPlayer: "e7"
    },
    {
        moves: 2,
        firstPlayer: "c6",
        secondPlayer: "e4"
    },
    {
        moves: 3,
        firstPlayer: "ng4",
        secondPlayer: "e5"
    },
    {
        moves: 4,
        firstPlayer: "a3",
        secondPlayer: "e7"
    },
    {
        moves: 5,
        firstPlayer: "c6",
        secondPlayer: "e4"
    },{
        moves: 6,
        firstPlayer: "a3",
        secondPlayer: "e7"
    },
    {
        moves: 7,
        firstPlayer: "c6",
        secondPlayer: "e4"
    },]

    return (
        <div className="lost">

            <div className="enemy">
                <div className='status' /><h1 className={['player_title', currentPlayer?.color !== Colors.WHITE ? "active" : ''].join(' ')}>{enemyName}</h1>
            </div>
            <div className="main">
                <nav>
                    <ul>
                        {buttos.map((el, index) => {
                            return (
                                <li key={index}>{el}</li>
                            )
                        })}
                    </ul>
                </nav>
                <div className="content">

                    {
                        movesList.map((el, index) => {
                            return (
                                <div className='line' key={index}>
                                    <div>{el.moves}</div>
                                    <div>{el.firstPlayer}</div>
                                    <div>{el.secondPlayer}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="player">
                <div className='status' /><h1 className={['player_title', currentPlayer?.color !== Colors.BLACK ? "active" : ''].join(' ')}>{playerName}</h1>
            </div>

        </div>
    );
};

export default RightAside;