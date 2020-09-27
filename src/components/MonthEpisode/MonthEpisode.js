import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import './MonthEpisode.css'
import './../Episode/Episode.css'


import boothImage from '../../img/booth.png'
import { BoothDotComTemplate } from '../BoothDotCom/BoothDotCom';



const MonthEpisode = () => {
    
    console.log('dfgdsfg')
    useEffect(() => console.log(window.location.href))

    return (
        <section className='MonthEpisode'>
            <h4 className='Episode__page-head'><Link to='/' className='Episode__linkText'>Vhoot.com</Link> / year</h4>
            <div className='Episode__body'>
            <Link to={"/episode/year/January"}>
                <BoothDotComTemplate 
                    image = {boothImage} 
                    title = ''
                    month = 'January' 
                    year = ''>
                </BoothDotComTemplate>
            </Link>
            
            <Link to={"/episode/year/February"}>
                <BoothDotComTemplate 
                    image = {boothImage} 
                    title = ''
                    month = 'February' 
                    year = ''>
                </BoothDotComTemplate>
            </Link>

            <Link to={"/episode/year/March"}>
                <BoothDotComTemplate 
                    image = {boothImage} 
                    title = ''
                    month = 'March' 
                    year = ''>
                </BoothDotComTemplate>
            </Link>

            <Link to={"/episode/year/April"}>
                <BoothDotComTemplate 
                    image = {boothImage} 
                    title = ''
                    month = 'April' 
                    year = ''>
                </BoothDotComTemplate>
            </Link>

            <Link to={"/episode/year/May"}>
                <BoothDotComTemplate 
                    image = {boothImage} 
                    title = ''
                    month = 'May' 
                    year = ''>
                </BoothDotComTemplate>
            </Link>

            <Link to={"/episode/year/June"}>
                <BoothDotComTemplate 
                    image = {boothImage} 
                    title = ''
                    month = 'June' 
                    year = ''>
                </BoothDotComTemplate>
            </Link>

            <Link to={"/episode/year/July"}>
                <BoothDotComTemplate 
                    image = {boothImage} 
                    title = ''
                    month = 'July' 
                    year = ''>
                </BoothDotComTemplate>
            </Link>

            <Link to={"/episode/year/August"}>
                <BoothDotComTemplate 
                    image = {boothImage} 
                    title = ''
                    month = 'August' 
                    year = ''>
                </BoothDotComTemplate>
            </Link>

            <Link to={"/episode/year/September"}>
                <BoothDotComTemplate 
                    image = {boothImage} 
                    title = ''
                    month = 'September' 
                    year = ''>
                </BoothDotComTemplate>
            </Link>

            <Link to={"/episode/year/October"}>
                <BoothDotComTemplate 
                    image = {boothImage} 
                    title = ''
                    month = 'October' 
                    year = ''>
                </BoothDotComTemplate>
            </Link>

            <Link to={"/episode/year/November"}>
                <BoothDotComTemplate 
                    image = {boothImage} 
                    title = ''
                    month = 'November' 
                    year = ''>
                </BoothDotComTemplate>
            </Link>

            <Link to={"/episode/year/December"}>
                <BoothDotComTemplate 
                    image = {boothImage} 
                    title = ''
                    month = 'December' 
                    year = ''>
                </BoothDotComTemplate>  
            </Link>
            </div>       
        </section>
    );
};

export default MonthEpisode;