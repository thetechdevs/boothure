import React from 'react';
import './Home.css';

// images
import boothFm from '../../img/boothFm.png'
import boothDotCom from '../../img/boothDotCom.png'
import home from '../../img/home2.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <section className='footer'>
            {/* <Link to='/boothFM'> */}
                <input className='footer__input' type="radio" name="s" id="s1" />
            {/* </Link> */}
            {/* <Link to='/'> */}
                <input className='footer__input' type="radio" name="s" id="s2" checked="checked" />
            {/* </Link> */}
            {/* <Link to='/boothDotCom'> */}
                <input className='footer__input' type="radio" name="s" id="s3" />
            {/* </Link> */}

            <label className='footer__label' for="s1"><img src={boothFm} alt="boothFm" /></label>
            <label className='footer__label' for="s2"><img src={home} alt="home" /></label>
            <label className='footer__label' for="s3"><img src={boothDotCom} alt="boothDotCom" /></label>

            <div className="footer__circle"></div>

            <div className="footer__content">
                <div className="footer__bottom">
                    <span className="footer__indicator"></span>
                </div>
            </div>
        </section>
    )
}

export default Footer;
