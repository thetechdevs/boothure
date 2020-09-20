import React from 'react';
import './Home.css';

// images
import BoothFM from '../../img/booth.png';
import BoothDotCom from '../../img/booth.png';

const CategoryOfEpisodeTemplate = ({ image, title, description }) => {
    return (
        <section className='categoryOfEpTemp'>
            <div className='latest5Eptemp__containerDiv categoryOfEpTemp__flex'>
                    <div className='categoryOfEpTemp__img'>
                        <img src={image} alt="img"/>
                    </div>
                    
                    <div className='categoryOfEpTemp__DetailSection'>
                        <h2 className='categoryOfEpTemp__title'><strong>{title}</strong></h2>
                        <p>{description}</p>
                    </div>
                </div>
        </section>
    )
};

const CategoryOfEpisode = () => {
    return (
        <section className='categoryOfEp'>
            <h1 className='categoryOfEp__heading'>Category</h1>
            <CategoryOfEpisodeTemplate
                image={BoothFM}
                title='Booth FM'
                description='Here you can find all booth fm (2010 - 2019)'
            />
            <CategoryOfEpisodeTemplate
                image={BoothDotCom}
                title='Booth .Com'
                description='Here you can find all booth dot com'
            />
        </section>
    )
};

export default CategoryOfEpisode;
