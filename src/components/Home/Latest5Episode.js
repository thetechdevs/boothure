import React from 'react';
import './Home.css';

// image
import boothImage from '../../img/vhoot-hand.jpg'
import download from '../../img/Downloads-icon.png'

export const Latest5EpisodeTemplate = ({ image, title, date, btn, audio }) => {
    return (
        <section className='latest5EpTemp'>
                <div className='latest5Eptemp__containerDiv latest5EpTemp__flex'>
                    <div className='latest5Eptemp__img'>
                        <img src={image} alt="img"/>
                    </div>
                    
                    <div className='latest5EpTemp__DetailSection'>
                        <h2 className='latest5EpTemp__title'><strong>{title}</strong></h2>
                        <p>date: {date}</p>
                        <div className='latest5EpTemp__flex'>
                            <img className='latest5EpTemp__downloadIcon' src={download} alt="download"/>
                              
                            {/* <audio controls >
                                <source src='' type='audio/ogg'/>
                                <source src='' type='audio/mpeg'/>
                            </audio> */}         
                        </div>
                    </div>
                </div> 
        </section>
    )
};

const Latest5Episode = () => {
    return (
        <section className='latest5Ep'>
            <Latest5EpisodeTemplate image={boothImage} date="20/07/2020" title="Vhoot.com"/>
            <Latest5EpisodeTemplate image={boothImage} date="20/07/2020" title="Vhoot.com"/>
            <Latest5EpisodeTemplate image={boothImage} date="20/07/2020" title="Vhoot.com"/>
            <Latest5EpisodeTemplate image={boothImage} date="20/07/2020" title="Vhoot.com"/>
        </section>
    )
}

export default Latest5Episode;
