import React from 'react'
import ReactDom from 'react-dom'


export default function Modal({ open, children, onClose }) {

    if (!open) return null

  return ReactDom.createPortal(
    <>
        <div className='overlay-style'></div>
        <div className='modal-styles'>
          <button onClick={onClose}>Close Project</button>
            {children}
        </div>
    </>,
    document.getElementById('portal')
  )
}
