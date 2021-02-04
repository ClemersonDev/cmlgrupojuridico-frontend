import React, { useState } from 'react';
import { FaFacebook, FaLinkedin, FaMapMarkerAlt, FaWhatsapp, FaEnvelopeOpenText, FaInstagram, FaCalendarAlt, FaExclamationTriangle } from 'react-icons/fa';
import './styles.css';
import api from '../../services/api';
import { ToastContainer ,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whats, setWhats] = useState('');
    const [msgm, setMsgm] = useState('');

    function clearInput() {
        setName('');
        setEmail('');
        setWhats('');
        setMsgm('');
    }

    async function handleEmail(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            whats,
            msgm,
        };

        JSON.stringify(data);

        try {
            const response = await api.post('emails', data);
            toast.success("Mensagem enviada! Retornaremos o mais breve possível.", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
            });
            
            clearInput();
        } catch (err) {
            toast.success("Erro ao enviar a mensagem, tente novamente!", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
            });
        }

        try {
            const response =  await api.post('users', data);
        } catch(err) {
            console.log(err);
        }
    }

    function onlynumber(evt) {
        var theEvent = evt || window.event;
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode( key );
        //var regex = /^[0-9.,]+$/;
        var regex = /^[0-9.]+$/;
        if( !regex.test(key) ) {
           theEvent.returnValue = false;
           if(theEvent.preventDefault) theEvent.preventDefault();
        }
    }
    
    return(
        <div id="contact-container">
            <h1>Contato</h1>
            <div id="contact-box">
                <div id="left-contact">
                    <p>Fale conosco - atendimento online</p>
                    <form onSubmit={handleEmail} method="post">
                        <input type="text" placeholder="Nome" value={name} onChange={e => setName(e.target.value)} /> <br/>
                        <input type="text" placeholder="Whatsapp" maxLength={11} onKeyPress={onlynumber} value={whats} onChange={e => setWhats(e.target.value)} /> <br/>
                        <input type="text" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} /> <br/>
                        <textarea type="texte" name="mensagem" id="" placeholder="Sua mensagem" value={msgm} onChange={e => setMsgm(e.target.value)} ></textarea> <br/>
                        <button type="submit">Enviar</button>
                        <ToastContainer
                            position="bottom-right"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            closeButton={false}
                        />
                    </form>
                </div>
                <div id="right-contact">
                    <div id="socials-iconsBox">
                        <a href="//"> < FaFacebook/> </a>
                        <a href="//"> < FaInstagram/> </a>
                        <a href="//"> < FaLinkedin/> </a>
                    </div>
                    <div id="contacts">
                        <p><FaMapMarkerAlt style={{ color: '#CC0000' }} /> RUA MANOEL DA PAIXÃO, 200, EMPRESARIAL BEZERRA, 1º ANDAR, SALA 06 – ALAGADIÇO, JUAZEIRO- BA, CEP 48903-580</p> <br/>
                        <p><FaWhatsapp  style={{ color: '#25d366' }} />  (87) 9 9618-3427 / (87) 9969-1050 / (87) 9 9196-2588</p>
                        <br/>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=CMLGRUPOJURIDICO@GMAIL.COM" target="_blanc"><FaEnvelopeOpenText style={{ color: '#4285F4' }}/> CMLGRUPOJURIDICO@GMAIL.COM </a> <br/> <br/>
                        <p><FaCalendarAlt style={{ color: '#FBBC05' }}/> SEGUNDA À SEXTA DAS 9H ÀS 18H</p> <br/>
                        <p><FaExclamationTriangle style={{ color: '#EA4335' }}/> PARA PRISÕES EM FLAGRANTE, AUDIÊNCIA DE CUSTÓDIA, ACOMPANHAMENTO EM DELEGACIAS: 24H pelos telefones: <br/> (87) 9969-1650 / (87) 9 8805-7888</p>
                    </div>                    
                </div>
            </div>
        </div>
    );
}