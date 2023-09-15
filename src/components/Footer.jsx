import React from 'react'
import Icons from './Icons'
import Links from './Links'
import Copywright from './Copywright'

const Footer = () => {
  return (
    <div className='footer' style={{textAlign: 'center', paddingTop: '50px'}}>
        <Icons />
        <Links />
        <Copywright />
    </div>
  )
}

export default Footer