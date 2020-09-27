import React from 'react';
import './BoothFM.css';
import { Link } from "react-router-dom";

import boothImage from '../../img/booth.png'
import { BoothDotComTemplate } from '../BoothDotCom/BoothDotCom';


const BoothFMTemplate = ({ image, title, year }) => {
    return (
        <BoothDotComTemplate image={image} title={title} year={year}/>
    )
};

const BoothFM = () => {
    return (
        <section className="boothFM">
            <Link to={"/Episode/2019"}>
                <BoothFMTemplate image={boothImage} title='Booth FM' year='2019'/>
            </Link>
            <Link to={"/Episode/2013"}>
                <BoothFMTemplate image={boothImage} title='Booth FM' year='2013'/>
            </Link>
            <Link to={"/Episode/2012"}>
                <BoothFMTemplate image={boothImage} title='Booth FM' year='2012'/>
            </Link>
            <Link to={"/Episode/2011"}>
                <BoothFMTemplate image={boothImage} title='Booth FM' year='2011'/>
            </Link>
            <Link to={"/Episode/2010"}>
                <BoothFMTemplate image={boothImage} title='Booth FM' year='2010'/>
            </Link>
            
        </section>
    )
}

export default BoothFM;
