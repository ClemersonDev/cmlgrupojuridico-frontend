import React from 'react';
import Logo from '../../assets/logo-transp.png';
import Map from '../Map/Map';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaPhone, FaMailBulk } from 'react-icons/fa';
import './styles.css';

export default function Footer() {
    return(
        <footer id="footer-container">
            <div id="footer-left">
                <img src={Logo} alt="logo-footer"/>
                <p>Todos os direitos reservados | Castro, Moura & Lima<br/>Grupo Jurídico</p>
                <p>copyright ©</p>
            </div>

            <div id="footer-center">
                <p>Visite nossas redes sociais:</p>
                <div id="socials-icons">
                    <a href="//"> <FaFacebook size={28} /> </a>
                    <a href="//"> <FaInstagram size={28} /> </a>
                    <a href="//"> <FaLinkedin size={28} /> </a>
                    <a href="//"> <FaYoutube size={28} /> </a>
                </div>
                <p> <FaPhone /> (87) 99618-3427 </p>
                <p> <FaMailBulk /> CMLGRUPOJURIDICO@GMAIL.COM</p>
            </div>

            <div id="footer-right">
                <Map 
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAPS_KEY}`}
                    loadingElement={ <div style={{ height: "100%" }} /> }
                    containerElement={ <div style={{ height: "100%" }} /> }
                    mapElement={ <div style={{ height: "100%" }} /> }
                />
            </div>
        </footer>
    );
}