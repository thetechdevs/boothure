import React from 'react';
import './Home.css';

const Latest5EpisodeTemplate = ({ image, title, data, btn, audio }) => {
    return (
        <section className='latest5EpTemp'>
                <div className='latest5Eptemp__containerDiv latest5EpTemp__flex'>
                    <div className='latest5Eptemp__img'>
                        <img src="https://resize.indiatvnews.com/en/resize/newbucket/715_-/2017/11/shutterstock-185032865-700x467-1509523022.jpg" alt="img"/>
                    </div>
                    
                    <div className='latest5EpTemp__DetailSection'>
                        <h2 className='latest5EpTemp__title'><strong>Vhoot.com</strong></h2>
                        <p>date: 20/07/2020</p>
                        <div className='latest5EpTemp__flex'>
                            <img className='latest5EpTemp__downloadIcon' src="https://icons.iconarchive.com/icons/dtafalonso/android-lollipop/512/Downloads-icon.png" alt="download"/>
                              
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
            <Latest5EpisodeTemplate />
            <Latest5EpisodeTemplate />
            <Latest5EpisodeTemplate />
        </section>
    )
}

export default Latest5Episode;
