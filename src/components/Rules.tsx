import React from 'react'
import iconCross from '/images/icon-close.svg'
import imagesRules from '/images/image-rules.svg'

interface Props {
    setModal: React.Dispatch<React.SetStateAction<boolean>>
}

const Rules = ({ setModal }: Props) => {
    return (
        <div className="bg-white rounded-md h-screen w-screen md:w-[400px] md:h-[400px]">
            <div className="flex flex-col items-center gap-3 h-full md:h-max justify-around md:justify-center">
                <div className="flex justify-between w-full items-center p-7">
                    <p className="text-3xl md: w-full font-bold text-DarkText text-center md:text-start uppercase">
                        Rules
                    </p>
                    <button
                        className="hidden md:block"
                        onClick={() => setModal(false)}
                    >
                        <img
                            onClick={() => setModal(false)}
                            className="w-4 h-4 cursor-pointer"
                            src={iconCross}
                            alt="icon-cross"
                        />
                    </button>
                </div>
                <div>
                    <img src={imagesRules} alt="" />
                </div>
                <button
                    className="block md:hidden"
                    onClick={() => setModal(false)}
                >
                    <img
                        className="w-4 h-4 cursor-pointer"
                        src={iconCross}
                        alt="icon-cross"
                    />
                </button>
            </div>
        </div>
    )
}

export default Rules
