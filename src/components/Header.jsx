import React from 'react';
import Logo from './Logo'
import SearchBar from './SearchBar';
import Navbar from './Navbar';

const Header = ({data}) => {
  return (
    <div className='header'>
        <Logo />
        <SearchBar data={data}/>
        <Navbar />
    </div>
  )
}

export default Header