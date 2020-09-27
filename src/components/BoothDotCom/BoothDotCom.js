import React from 'react';
import './BoothDotCom.css';
import { Link } from "react-router-dom";

import bhootImage from '../../img/booth.png'

export const BoothDotComTemplate = ({ image, title, year, month }) => {
    return (
            <section className='BoothDotComTemp'>
                <div className='BoothDotComTemp__containerDiv BoothDotComTemp__flex'>
                        <div className='BoothDotComTemp__img'>
                            <img src={image} alt="img"/>
                        </div>
                        
                        <div className='BoothDotComTemp__DetailSection'>
                            <h2 className='BoothDotComTemp__title'><strong>{title}</strong></h2>
                            <h3>{year}</h3>
                            <h3>{month}</h3>
                        </div>
                    </div>
            </section>  
    )
};

const BoothDotCom = () => {
    return (
        <section className='boothDotCom'>
            <Link to={"/Episode/2022"}>
                <BoothDotComTemplate image={bhootImage} title='Vhoot.com' year='2022' />
            </Link>
            <Link to={"/Episode/2021"}>
                <BoothDotComTemplate image={bhootImage} title='Vhoot.com' year='2021' />
            </Link>
            <Link to={"/Episode/2020"}>
                <BoothDotComTemplate image={bhootImage} title='Vhoot.com' year='2020' />
            </Link>
        </section>
    )
}

export default BoothDotCom;
