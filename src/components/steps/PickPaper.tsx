import React, { MouseEventHandler } from 'react'
import iconPaper from '/images/icon-paper.svg'

interface Props {
    onClick?: MouseEventHandler<HTMLDivElement>
    paper?: string | boolean
}

const PickPaper = ({ onClick, paper }: Props) => {
    return (
        <div
            onClick={onClick}
            className={`${
                paper ? 'p-8' : ''
            } bg-PaperGradient cursor-pointer active:scale-105 shadow-customInnerBottom flex items-center justify-center p-6  rounded-full`}
        >
            <div
                className={`${
                    paper ? 'w-26 h-26 md:w-40 md:h-40' : ''
                } bg-white w-28 shadow-customInnerTop h-28 flex items-center justify-center rounded-full`}
            >
                <img
                    className={paper ? 'w-14 h-16 md:w-18 md:h-20' : ''}
                    src={iconPaper}
                    alt="icon-paper"
                />
            </div>
        </div>
    )
}

export default PickPaper
