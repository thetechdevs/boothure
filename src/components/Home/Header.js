import React from 'react';
import './Home.css';

// fontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

// data
// import data from '../../data/data'

const Header = () => {
    // const title = data.home.title;
    return (
        <section className='header'>
            {/* <h1>{title}</h1> */}
            <span className='header__searchIcon'><FontAwesomeIcon icon={faSearch} /></span> 
            <input className='header__searchBox' type="text" placeholder='Search Episode'/>
            {/* <button className='header__searchButton'>Search</button> */}
        </section>
    )
}

export default Header;
