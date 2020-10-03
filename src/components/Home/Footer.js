import React from 'react';
import './Home.css';
import { useHistory } from 'react-router-dom';

// images
import boothFm from '../../img/boothFm.png';
import boothDotCom from '../../img/boothDotCom.png';
import home from '../../img/home2.png';

// state
import { useStateValue } from '../../state/StateProvider';

const Footer = () => {
    const [{ page }, dispatch] = useStateValue();
    const history = useHistory();
    
    const boothFMClick = () => {
        dispatch({
            type: 'SET_PAGE',
            pageName: 'boothFM'
        });
        history.push("/boothFM");
    };

    const homeClick = () => {
        dispatch({
            type: 'SET_PAGE',
            pageName: 'home'
        });
        history.push("/");
    };

    const boothDotComClick = () => {
        dispatch({
            type: 'SET_PAGE',
            pageName: 'boothDotCom'
        });
        history.push("/boothDotCom");
    };

    return (
        <section className='footer'>
            <input className='footer__input' type="radio" name="s" id="s1" onClick={boothFMClick} />
            <input className='footer__input' type="radio" name="s" id="s2" checked="checked" onClick={homeClick} />
            <input className='footer__input' type="radio" name="s" id="s3" onClick={boothDotComClick} />

            <label className='footer__label' htmlFor="s1"><img src={boothFm} alt="boothFm" /></label>
            <label className='footer__label' htmlFor="s2"><img src={home} alt="home" /></label>
            <label className='footer__label' htmlFor="s3"><img src={boothDotCom} alt="boothDotCom" /></label>

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
