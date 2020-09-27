import React from 'react';
import { Latest5EpisodeTemplate } from '../Home/Latest5Episode';
import EpisodeImage from '../../img/vhoot-hand.jpg'
import './Episode.css'
import { Link } from 'react-router-dom';

const Episode = () => {
    return (
        <section className='Episode'>
            <h4 className='Episode__page-head'><Link to='/' className='Episode__linkText'>Vhoot.com</Link> / year</h4>
            <div className='Episode__body'>
                <Latest5EpisodeTemplate 
                    image = {EpisodeImage}
                    title = 'he he'
                    date = '01/09/2020'
                />
                <Latest5EpisodeTemplate 
                    image = {EpisodeImage}
                    title = 'booth'
                    date = '09/09/2020'
                />
                <Latest5EpisodeTemplate 
                    image = {EpisodeImage}
                    title = 'boothure'
                    date = '17/09/2020'
                />
                <Latest5EpisodeTemplate 
                    image = {EpisodeImage}
                    title = 'he he'
                    date = '25/09/2020'
                />
            </div>
        </section>
    );
};

export default Episode;