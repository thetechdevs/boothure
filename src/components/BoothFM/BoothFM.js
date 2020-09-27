import React from 'react';
import './BoothFM.css';
import '../Episode/Episode.css'
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
            <h2 className='Episode__page-head'><Link to='/' className='Episode__linkText'>Vhoot FM</Link> / year</h2>
            <div className='Episode__body'>
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
            </div>
        </section>
    )
}

export default BoothFM;
