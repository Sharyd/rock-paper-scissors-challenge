import React, { MouseEventHandler } from 'react'
import iconRock from '/images/icon-rock.svg'

interface Props {
    onClick?: MouseEventHandler<HTMLDivElement>
    rock?: string | boolean
}

const PickRock = ({ onClick, rock }: Props) => {
    return (
        <div
            onClick={onClick}
            className={`${
                rock ? 'p-8' : ''
            } bg-RockGradient cursor-pointer active:scale-105 shadow-customInnerBottom flex items-center justify-center p-6  rounded-full`}
        >
            <div
                className={`${
                    rock ? 'w-28 h-28 md:w-40 md:h-40' : ''
                } bg-white w-28 shadow-customInnerTop h-28 flex items-center justify-center rounded-full`}
            >
                <img
                    className={rock ? 'w-14 h-14 md:w-16 md:h-16' : ''}
                    src={iconRock}
                    alt="icon-rock"
                />
            </div>
        </div>
    )
}

export default PickRock
