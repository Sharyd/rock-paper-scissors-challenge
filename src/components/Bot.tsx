import React from 'react'
import BackgroundEffect from './ui/BackgroundEffect'
import { LoseDrawWin, RockPaperScissors } from './steps/MainStep'
import PickPaper from './steps/PickPaper'
import PickRock from './steps/PickRock'
import PickScissors from './steps/PickScissors'

interface Props {
    randomBotPicked: string
    winnerOrLoserOrDraw: string
    seconds: number
}

const Bot = ({ randomBotPicked, seconds, winnerOrLoserOrDraw }: Props) => {
    return (
        <div className="flex gap-10 md:flex-col flex-col-reverse relative items-center">
            {winnerOrLoserOrDraw === LoseDrawWin.LOSE && <BackgroundEffect />}
            <h2 className="uppercase w-max font-[700] tracking-widest text-white text-xl">
                The House Picked
            </h2>
            <div className="flex flex-col gap-10 items-center justify-center">
                {!randomBotPicked && (
                    <div className="flex items-center justify-center w-44 h-44 rounded-full bg-black/20">
                        <p className="text-white text-xl">{seconds}</p>
                    </div>
                )}
                {randomBotPicked === RockPaperScissors.SCISSORS && (
                    <PickScissors
                        scissors={
                            randomBotPicked === RockPaperScissors.SCISSORS
                        }
                    />
                )}
                {randomBotPicked === RockPaperScissors.PAPER && (
                    <PickPaper
                        paper={randomBotPicked === RockPaperScissors.PAPER}
                    />
                )}
                {randomBotPicked === RockPaperScissors.ROCK && (
                    <PickRock
                        rock={randomBotPicked === RockPaperScissors.ROCK}
                    />
                )}
            </div>
        </div>
    )
}

export default Bot
