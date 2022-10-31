import React, { useEffect } from 'react'
import ReactDom from 'react-dom'


export default function Modal({ open, children, onClose }) {

    if (!open) return null

  return ReactDom.createPortal(
    <>
        <div className='overlay-style'></div>
        <div className='modal-styles'>
            {children}
            <button onClick={onClose}>Close Modal</button>
        </div>
    </>,
    document.getElementById('portal')
  )
}
