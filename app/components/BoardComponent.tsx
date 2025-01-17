import React, {FC, useEffect, useState} from 'react';
import {Board} from "../models/Board";
import CellComponent from "./CellComponent";
import {Cell} from "../models/Cell";
import {Player} from "../models/Player";
import {Colors} from "../models/Colors";

interface BoardProps {
    board: Board;
    currentPlayer: Player | null;
    setBoard: (board: Board) => void;
    swapPlayer: () => void;
}

const BoardComponent: FC<BoardProps> = ({board, setBoard, currentPlayer, swapPlayer}) => {
    const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

    function click(cell: Cell) {
        if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
            selectedCell.moveFigure(cell);
            swapPlayer();
            setSelectedCell(null);
            updateBoard()
        } else {
            if(cell.figure?.color === currentPlayer?.color) {
                setSelectedCell(cell);
            }
        }
    }

    useEffect(() => {
        highlightCells()
    }, [selectedCell])

    function highlightCells() {
        board.highlightCells(selectedCell)
        updateBoard()
    }

    function updateBoard() {
        const newBoard = board.getCopyBoard()
        setBoard(newBoard)
    }

    const letters = ["A", "B", "C", "D", "E", "F", "G", "H"];
    const nums = ["8", "7", "6", "5", "4", "3", "2", "1"];

    return (
            <div className="board">
                {board.cells.map((row, y) =>
                    <React.Fragment key={y}>
                        {row.map((cell, x) => {
                            const isBottomRow = y === 7;
                            const isLeftColumn = x === 0;
                            return (
                                <CellComponent
                                    click={click}
                                    cell={cell}
                                    key={cell.id}
                                    selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y
                                    }
                                >
                                    {isBottomRow && <span className="letters">{letters[x]}</span>}
                                    {isLeftColumn && <span className="nums">{nums[y]}</span>}
                                </CellComponent>
                            )
                        })}
                    </React.Fragment>
                )}
        </div>
    );
};

export default BoardComponent;