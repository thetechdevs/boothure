import React from 'react';
import './Home.css';

// images
import BoothFM from '../../img/booth.png';
import BoothDotCom from '../../img/booth.png';

const CategoryOfEpisodeTemplate = ({ image, title, description }) => {
    return (
        <section className='categoryOfEpTemp'>

        </section>
    )
};

const CategoryOfEpisode = () => {
    return (
        <section className='categoryOfEp'>
            <CategoryOfEpisodeTemplate
                image={BoothFM}
                title='Booth FM'
                description='Here you can find all booth fm'
            />
            <CategoryOfEpisodeTemplate
                image={BoothDotCom}
                title='Booth Dot Com'
                description='Here you can find all booth dot com'
            />
        </section>
    )
};

export default CategoryOfEpisode;
