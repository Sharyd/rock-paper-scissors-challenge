import React from 'react'
import BackgroundEffect from './ui/BackgroundEffect'
import { LoseDrawWin, RockPaperScissors } from './steps/MainStep'
import PickPaper from './steps/PickPaper'
import PickRock from './steps/PickRock'
import PickScissors from './steps/PickScissors'

interface Props {
    userPicked: string
    winnerOrLoserOrDraw: string
}

const User = ({ userPicked, winnerOrLoserOrDraw }: Props) => {
    return (
        <div className="flex md:flex-col flex-col-reverse gap-10 items-center relative">
            <div className="flex md:flex-col flex-col-reverse gap-10 items-center relative">
                {winnerOrLoserOrDraw === LoseDrawWin.WIN && (
                    <BackgroundEffect />
                )}
                <h2 className="uppercase  font-[700] tracking-widest text-white text-xl">
                    You Picked
                </h2>
                {userPicked === RockPaperScissors.SCISSORS && (
                    <PickScissors
                        scissors={userPicked === RockPaperScissors.SCISSORS}
                    />
                )}
                {userPicked === RockPaperScissors.PAPER && (
                    <PickPaper paper={userPicked === RockPaperScissors.PAPER} />
                )}
                {userPicked === RockPaperScissors.ROCK && (
                    <PickRock rock={userPicked === RockPaperScissors.ROCK} />
                )}
            </div>
        </div>
    )
}

export default User
