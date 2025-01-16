"use client";
import React, {FC} from 'react';
import {Figure} from "../models/figures/Figure";
import Image from 'next/image';

interface LostFigureProps {
    title: string;
    figures: Figure[];
}

const LostFigures: FC<LostFigureProps> = ({title, figures}) => {
    return (
        <div className="lost">
            <h3>{title}</h3>
            {figures.map((figure: Figure) =>
                <div key={figure.id}>
                    {figure.name} {figure.logo && <Image src={figure.logo} width={20} height={20} alt={figure.name} />}
                </div>
            )}
        </div>
    );
};

export default LostFigures;