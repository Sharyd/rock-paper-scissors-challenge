import React from 'react'
import { useScore } from '../context/scoreContext'

const ScoreScreen = () => {
    const { score } = useScore()
    return (
        <header className="flex w-full justify-center">
            <div className="flex w-[600px] justify-between items-center px-6 py-4 border-2 rounded-xl border-HeaderOutline">
                <div className="flex flex-col text-2xl md:text-3xl font-[600] leading-[0.80] uppercase md:leading-[0.85] text-white">
                    <h2>Rock</h2>
                    <h2>Paper</h2>
                    <h2>Scissors</h2>
                </div>
                <div className="flex items-center justify-center leading-[0.95] flex-col rounded-lg bg-white py-4 px-6 lg:px-9">
                    <p className="uppercase text-ScoreText tracking-wider">
                        Score
                    </p>
                    <span className="text-HeaderOutline text-5xl">{score}</span>
                </div>
            </div>
        </header>
    )
}

export default ScoreScreen
