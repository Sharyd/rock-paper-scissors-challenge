import React from 'react'

const BackgroundEffect = () => {
    return (
        <div className="flex -z-10 absolute top-[34%] md:top-[60%] left-1/2 translate-x-1/2 translate-y-1/2 items-center justify-center flex-col">
            <div className="absolute rounded-full   bg-white/5 md:w-[600px] md:h-[600px] w-[350px] h-[350px]"></div>
            <div className="absolute rounded-full   bg-white/5 md:w-[450px] md:h-[450px] w-[250px] h-[250px]"></div>
            <div className="absolute rounded-full  bg-white/5 md:w-[320px] md:h-[320px] w-[180px] h-[180px]"></div>
        </div>
    )
}

export default BackgroundEffect
