import React from 'react';
import Logo from '../../assets/logo-transp.png';
import { FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import './styles.css';

export default function Header() {
    return(
        <header id="header-container">
            <div id="header-left">
                <img src={Logo} alt="logo"/>
            </div>
            <div id="midle-header">
                <h2><FaMapMarkerAlt style={{ color: '#CC0000' }}/> Juazeiro - Ba</h2>
                <a href="//"><FaWhatsapp style={{ color: '#25d366' }}/> (87) 99618-3427</a>
            </div>
            <div id="header-right">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/acting">Atuação</a></li>
                    <li><a href="/about">Sobre</a></li>
                    <li><a href="/contact">Contato</a></li>                      
                </ul>
            </div>
        </header>
        
    );
}