import React, { ReactNode, useState } from 'react'
import ReactDOM from 'react-dom'
import Backdrop from './ui/Backdrop'
import Modal from './ui/Modal'
import ScoreScreen from './ScoreScreen'

import Rules from './Rules'

interface Props {
    children: ReactNode
}

const Layout = ({ children }: Props) => {
    const [modal, setModal] = useState(false)

    return (
        <div className="flex flex-col min-h-screen py-10 px-10 justify-start gap-10 items-center">
            <ScoreScreen />
            <main className="flex items-center h-[50vh] w-full justify-center ">
                {children}
            </main>
            <button
                onClick={() => setModal(true)}
                className="uppercase tracking-widest text-md text-white bottom-10 rounded-md border absolute py-2 px-7 lg:right-16 lg:bottom-16"
            >
                Rules
            </button>
            {modal && (
                <Modal>
                    <Rules setModal={setModal} />
                </Modal>
            )}
        </div>
    )
}

export default Layout
