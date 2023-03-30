import { createContext, useContext, ReactNode, useState } from 'react'

type scoreProviderProps = {
    children: ReactNode
}

type scoreItem = {
    score: number
    setScore: React.Dispatch<React.SetStateAction<number>>
}

const ScoreContext = createContext({} as scoreItem)

export const useScore = () => {
    return useContext(ScoreContext)
}

export const ScoreContextProvider = ({ children }: scoreProviderProps) => {
    const [score, setScore] = useState(0)

    return (
        <ScoreContext.Provider
            value={{
                score,
                setScore,
            }}
        >
            {children}
        </ScoreContext.Provider>
    )
}
