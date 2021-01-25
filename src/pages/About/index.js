import React from 'react';
import './styles.css';
import logo from '../../assets/logo-transp.png';
import { FaBullseye, FaHandshake } from 'react-icons/fa';
import { FiEye } from 'react-icons/fi';

export default function About() {
    return(
        <div id="about-container">
            <h1>Sobre</h1>
            <div id="escritorio-firstBox">
                <img src={logo} alt="escritorio-img"/>
                <h3>O escritório</h3>
                <br/>
                <p>O escritório Castro, Moura e Lima – Grupo Jurídico foi fundado por quatro advogados empreendedores que tiveram a ideia de criar o primeiro Grupo Jurídico do Vale do São Francisco com o intuito de ofertar aos clientes que confiam no nosso trabalho, uma prestação de serviços de qualidade.</p>
                <p>O escritório fica sediado na cidade de Juazeiro da Bahia, abrangendo também o atendimento na cidade de Petrolina em Pernambuco. O trabalho que é realizado pelos advogados com rigor, competência e seriedade vem atendendo as expectativas dos clientes. Consequentemente, o Grupo Jurídico – Castro, Moura e Lima, vem firmando raízes sólidas em todo o Brasil, principalmente no Estado da Bahia onde vem obtendo trabalhos nos Municípios de Juazeiro, Curaçá, Casa Nova, na cidade de Salvador, entre outros.</p>
            </div>
            <div id="escritorio-secondBox">
                <div id="missao" className="pillars">
                    <div id="mission-svg">
                        < FaBullseye style={{ color: '#CC0000', width: 70, height: 70 }}/>
                    </div>
                    <div id="mission-text">
                        <h3>Missão</h3>
                        <br/>
                        <p>Nossa missão é sobretudo oferecer qualidade na prestação de serviços jurídicos, proporcionando uma advocacia ética e humanizada, levando a satisfação dos nossos clientes na obtenção de resultados positivos.</p>
                    </div>                    
                </div>
                <div id="visao" className="pillars">
                    <div id="vision-svg">
                        <FiEye style={{ color: '#4285F4', width: 70, height: 70 }}/>
                    </div>
                    <div id="vision-text">
                        <h3>Visão</h3>
                        <br/>
                        <p>Visamos tornar o nosso escritório referência em todo o Brasil, através do reconhecimento dos nossos serviços prestados com aplicação de todos os conceitos que foram descritos no tópico “missão”.</p>
                    </div>
                    
                    
                </div>
                <div id="worth" className="pillars">
                    <div id="worth-svg">
                        <FaHandshake style={{ color: '#FBBC05', width: 70, height: 70 }}/>
                    </div>                    
                    <div id="worth-text">
                        <h3>Valores</h3>
                        <br/>
                        <p>O escritório Castro, Moura e Lima está firmado em valores éticos e morais, princípios que são balizadores da estrutura do Direito.  Além de ter também, valores notórios de comprometimento, transparência e verdade na prestação dos serviços advocatícios. Orientando sempre nossos clientes sobre as possibilidades jurídicas de seus casos apresentados.</p>
                    </div>                    
                </div>
            </div>

            <div id="call-box">
                <p>Entre em contato, deixe-nos uma mensagem e marque a sua consulta</p>
                <a href="/contact">entrar em contato</a>
            </div>
        </div>
    );
}