import React, { MouseEventHandler } from 'react'
import iconScissors from '/images/icon-scissors.svg'

interface Props {
    onClick?: MouseEventHandler<HTMLDivElement>
    scissors?: string | boolean
}

const PickScissors = ({ onClick, scissors }: Props) => {
    return (
        <div
            onClick={onClick}
            className={`${
                scissors ? 'p-8' : ''
            } bg-ScissorsGradient cursor-pointer active:scale-105 shadow-customInnerBottom flex items-center justify-center p-6 rounded-full`}
        >
            <div
                className={`${
                    scissors ? 'w-28 h-28 md:w-40 md:h-40' : ''
                } bg-white w-28 shadow-customInnerTop h-28 flex items-center justify-center rounded-full`}
            >
                <img
                    className={scissors ? 'w-16 h-16 md:w-20 md:h-20' : ''}
                    src={iconScissors}
                    alt="icon-scissors"
                />
            </div>
        </div>
    )
}

export default PickScissors
