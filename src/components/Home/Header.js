import React from 'react';
import './Home.css';

// data
import data from '../../data/data'

const Header = () => {
    const title = data.home.header.title;
    return (
        <section className='header'>
            {/* <h1>{title}</h1> */}
        </section>
    )
}

export default Header;
