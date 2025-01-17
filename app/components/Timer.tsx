"use client";
import React, {FC, useEffect, useRef} from 'react';
import {Player} from "../models/Player";
import {Colors} from "../models/Colors";

interface TimerProps {
    currentPlayer: Player | null;
    restart: () => void;
    handleCoordinates: () => void;
    showCoordinates: boolean;
}

const Timer: FC<TimerProps> = ({currentPlayer, restart, handleCoordinates, showCoordinates}) => {
    const [blackTime, setBlackTime] = React.useState(300);
    const [whiteTime, setWhiteTime] = React.useState(300);
    const timerRef = useRef<null | ReturnType<typeof setInterval>>(null); // Используем useRef правильно

    useEffect(() => {
        startTimer();
        return () => { // Добавляем cleanup функцию
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, [currentPlayer]);

    function startTimer() {
        if (timerRef.current) {
            clearInterval(timerRef.current);
        }

        const callback = currentPlayer?.color === Colors.WHITE ? decrementWhiteTimer : decrementBlackTimer;
        timerRef.current = setInterval(callback, 1000);
    }

    function decrementBlackTimer() {
        setBlackTime(prev => Math.max(0, prev - 1)); // Предотвращаем отрицательные значения
    }

    function decrementWhiteTimer() {
        setWhiteTime(prev => Math.max(0, prev - 1)); // Предотвращаем отрицательные значения
    }

    const handleRestart = () => {
        setWhiteTime(300);
        setBlackTime(300);
        restart();
    };

    return (
        <div className="timer">
            <div>
                <div className="buttons">
                    <button onClick={handleCoordinates}>{showCoordinates ? "Скрыть кординаты" : "Показать кординаты"}</button>
                    <button onClick={handleRestart}>Перезапустить игру</button>
                </div>
                <h2>Черные - {blackTime}</h2>
                <h2>Белые - {whiteTime}</h2>
            </div>
        </div>
    );
};

export default Timer;
