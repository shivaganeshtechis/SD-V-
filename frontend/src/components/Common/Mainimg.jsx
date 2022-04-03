import React from 'react'
import Header from './Header'
import nodie from '../../assets/img/no-time-to-die-poster.png'

function Mainimg() {
  return (
    <div className='main'>
        <Header/>
        <img src={nodie} className="main-img" alt="" />
        <div className='Text'>
            <p>
            James Bond has left active service. His peace is short-lived when Felix Leiter, an old friend from the CIA.
            </p>
        </div>
    </div>
  )
}

export default Mainimg