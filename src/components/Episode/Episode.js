import React from 'react';
import { Latest5EpisodeTemplate } from '../Home/Latest5Episode';
import EpisodeImage from '../../img/vhoot-hand.jpg'

const Episode = () => {
    return (
        <section className='Episode'>
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
        </section>
    );
};

export default Episode;