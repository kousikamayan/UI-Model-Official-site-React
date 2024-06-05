import React from 'react'
import './Navbar.css';
import search_icon from '../../assets/images/search.svg';
import filter from '../../assets/images/filter.svg'

function Navbar() {
  return (
    <div className='navbar'>
        <div className="navbar-logo">
            <p>LOGO</p>
        </div>
        <div className="navbar-search">
            <img src={search_icon} alt="" />
            <input type="text" name="search" id="" placeholder='search here' />
            <img src={filter} alt="" />
            <p>Filters</p>
        </div>
        <div className='navbar-content'>
            <p>Become a Seller</p>
        </div>

    </div>
  )
}

export default Navbar
