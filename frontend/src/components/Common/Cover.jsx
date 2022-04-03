import React from 'react'
import Header from './Header'
import button from '../../assets/img/button.png'

function Cover() {
  return (
    <div>
        <Header/>
        <section class="cover">
            <div class="cover-info">
                <img src={button} alt="" />
                <pre>
                    October 1st
                    In Cinemas
                </pre>
                <br />
                <br />
                <div class="description">
                    James Bond has left active service. His peace is short-lived when Felix Leiter,<br />
                    an oldfriend from the CIA, turns up asking for help, leading Bond ontobr <br />
                    the trail of a mysterious villain armed with dangerous new technology.
                </div>
            </div>      
        </section>
    </div>
  )
}

export default Cover