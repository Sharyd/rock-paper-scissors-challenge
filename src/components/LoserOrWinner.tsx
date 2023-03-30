import React from 'react'
import { LoseDrawWin } from './steps/MainStep'

interface Props {
    winnerOrLoserOrDraw: string
    handlePlayAgain: () => void
}

const LoserOrWinner = ({ winnerOrLoserOrDraw, handlePlayAgain }: Props) => {
    return (
        <div className="w-max -bottom-10 absolute lg:static lg:bottom-0  text-white uppercase flex flex-col gap-3 items-center">
            <h1 className="font-bold text-5xl lg:text-4xl">
                {winnerOrLoserOrDraw === LoseDrawWin.LOSE
                    ? 'you lose'
                    : winnerOrLoserOrDraw === LoseDrawWin.DRAW
                    ? 'draw'
                    : 'you win'}
            </h1>
            <button
                onClick={handlePlayAgain}
                className={`${
                    winnerOrLoserOrDraw === LoseDrawWin.LOSE
                        ? 'text-red-500'
                        : ''
                } bg-white uppercase text-md rounded-md tracking-widest text-DarkText px-10 py-2`}
            >
                Play Again
            </button>
        </div>
    )
}

export default LoserOrWinner
