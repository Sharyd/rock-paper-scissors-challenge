import { useState } from 'react'
import Layout from './components/Layout'
import MainStep from './components/steps/MainStep'
import { ScoreContextProvider } from './context/scoreContext'

function App() {
    return (
        <ScoreContextProvider>
            <Layout>
                <MainStep />
            </Layout>
        </ScoreContextProvider>
    )
}

export default App
