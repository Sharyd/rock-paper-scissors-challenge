import React, { Component, useEffect, useRef, useState } from 'react'
import { useScore } from '../../context/scoreContext'
import Bot from '../Bot'
import LoserOrWinner from '../LoserOrWinner'
import User from '../User'
import PickPaper from './PickPaper'
import PickRock from './PickRock'
import PickScissors from './PickScissors'

export enum RockPaperScissors {
    SCISSORS = 'scissors',
    ROCK = 'rock',
    PAPER = 'paper',
}
export enum LoseDrawWin {
    LOSE = 'lose',
    DRAW = 'draw',
    WIN = 'win',
}

const MainStep = () => {
    const stepsType = [
        RockPaperScissors.SCISSORS,
        RockPaperScissors.ROCK,
        RockPaperScissors.PAPER,
    ]

    const [userPicked, setUserPicked] = useState('')
    const [randomBotPicked, setRandomBotPicked] = useState('')

    const [winnerOrLoserOrDraw, setWinnerOrLoserOrDraw] = useState('')
    const { setScore, score } = useScore()
    const [seconds, setSeconds] = useState(3)

    const handleRandomPick = () => {
        const random = Math.floor(Math.random() * stepsType.length)
        if (random === 0) {
            setRandomBotPicked(RockPaperScissors.SCISSORS)
        } else if (random === 1) {
            setRandomBotPicked(RockPaperScissors.ROCK)
        } else {
            setRandomBotPicked(RockPaperScissors.PAPER)
        }
    }

    const handleLoserOrWinner = () => {
        if (
            userPicked === RockPaperScissors.SCISSORS &&
            randomBotPicked === RockPaperScissors.SCISSORS
        ) {
            setWinnerOrLoserOrDraw(LoseDrawWin.DRAW)
            setScore(score)
        } else if (
            userPicked === RockPaperScissors.SCISSORS &&
            randomBotPicked === RockPaperScissors.ROCK
        ) {
            setWinnerOrLoserOrDraw(LoseDrawWin.LOSE)
            setScore((prev) => prev - 1)
        } else if (
            userPicked === RockPaperScissors.SCISSORS &&
            randomBotPicked === RockPaperScissors.PAPER
        ) {
            setWinnerOrLoserOrDraw(LoseDrawWin.WIN)
            setScore((prev) => prev + 1)
        } else if (
            userPicked === RockPaperScissors.PAPER &&
            randomBotPicked === RockPaperScissors.PAPER
        ) {
            setWinnerOrLoserOrDraw(LoseDrawWin.DRAW)
            setScore(score)
        } else if (
            userPicked === RockPaperScissors.PAPER &&
            randomBotPicked === RockPaperScissors.ROCK
        ) {
            setWinnerOrLoserOrDraw(LoseDrawWin.WIN)
            setScore((prev) => prev + 1)
        } else if (
            userPicked === RockPaperScissors.PAPER &&
            randomBotPicked === RockPaperScissors.SCISSORS
        ) {
            setWinnerOrLoserOrDraw(LoseDrawWin.LOSE)
            setScore((prev) => prev - 1)
        } else if (
            userPicked === RockPaperScissors.ROCK &&
            randomBotPicked === RockPaperScissors.ROCK
        ) {
            setWinnerOrLoserOrDraw(LoseDrawWin.DRAW)
            setScore(score)
        } else if (
            userPicked === RockPaperScissors.ROCK &&
            randomBotPicked === RockPaperScissors.PAPER
        ) {
            setWinnerOrLoserOrDraw(LoseDrawWin.LOSE)
            setScore((prev) => prev - 1)
        } else if (
            userPicked === RockPaperScissors.ROCK &&
            randomBotPicked === RockPaperScissors.SCISSORS
        ) {
            setWinnerOrLoserOrDraw(LoseDrawWin.WIN)
            setScore((prev) => prev + 1)
        }
    }

    const handlePlayAgain = () => {
        setWinnerOrLoserOrDraw('')
        setUserPicked('')
        setRandomBotPicked('')
        setSeconds(3)
    }

    useEffect(() => {
        if (!userPicked) return
        const timer = setTimeout(() => {
            handleRandomPick()
        }, 3000)
        return () => clearTimeout(timer)
    }, [userPicked])

    useEffect(() => {
        if (userPicked) {
            const timer = setTimeout(() => {
                setSeconds((prev) => (prev === 0 ? 0 : prev - 1))
            }, 1000)
            return () => clearTimeout(timer)
        }
    })

    useEffect(() => {
        if (!userPicked && !randomBotPicked) return
        const timer = setTimeout(() => {
            handleLoserOrWinner()
        }, 1000)
        return () => clearTimeout(timer)
    }, [randomBotPicked, userPicked])

    return (
        <div className="w-[400px] flex flex-col gap-8  items-center justify-center h-full relative">
            {!userPicked ? (
                <>
                    <div className="flex  gap-10 relative">
                        <PickPaper
                            onClick={() =>
                                setUserPicked(RockPaperScissors.PAPER)
                            }
                        />

                        <span className="absolute top-16 right-36 md:right-36 -z-10 h-3 w-20 bg-black/30"></span>
                        <PickScissors
                            onClick={() =>
                                setUserPicked(RockPaperScissors.SCISSORS)
                            }
                        />
                        <span className="absolute top-40 left-20 rotate-[60deg] -z-10 h-3 w-20 bg-black/30"></span>
                        <span className="absolute top-40 right-20 rotate-[-60deg] -z-10 h-3 w-20 bg-black/30"></span>
                    </div>
                    <PickRock
                        onClick={() => setUserPicked(RockPaperScissors.ROCK)}
                    />
                </>
            ) : (
                <div className="flex gap-6  md:gap-16 mb-20 md:mb-0 items-center justify-center">
                    {/* user */}

                    <User
                        winnerOrLoserOrDraw={winnerOrLoserOrDraw}
                        userPicked={userPicked}
                    />

                    {winnerOrLoserOrDraw && (
                        <LoserOrWinner
                            winnerOrLoserOrDraw={winnerOrLoserOrDraw}
                            handlePlayAgain={handlePlayAgain}
                        />
                    )}
                    {/* bot */}
                    <Bot
                        randomBotPicked={randomBotPicked}
                        seconds={seconds}
                        winnerOrLoserOrDraw={winnerOrLoserOrDraw}
                    />
                </div>
            )}
        </div>
    )
}

export default MainStep
