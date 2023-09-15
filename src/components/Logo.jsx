import React from 'react'
import Moviebox from './images/Moviebox.png'

const Logo = () => {
  return (
    <div className='logo' style={{display: 'flex', flexDirection: 'row', gap: '15px'}}>
        <img src={Moviebox} alt="moviebox" />
        <a href='#' style={{color: 'white', textDecoration: 'none', padding: '10px'}}>MovieBox</a>
    </div>
  )
}

export default Logo