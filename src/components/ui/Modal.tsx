import React, { ReactNode } from 'react'
import ReactDOM from 'react-dom'
import Backdrop from './Backdrop'

interface Props {
    children: ReactNode
}

const Modal = ({ children }: Props) => {
    return (
        <div>
            {ReactDOM.createPortal(
                <Backdrop />,
                document.getElementById('backdrop')!
            )}
            <div className="absolute z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                {children}
            </div>
        </div>
    )
}

export default Modal
