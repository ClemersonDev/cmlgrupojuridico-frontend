import React, { useState } from 'react';
import Carousel from '../../components/Carousel';
import './styles.css';
import api from '../../services/api';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { ToastContainer ,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
    const [label1, setLabel1] = useState(false);
    const [label2, setLabel2] = useState(false);
    const [label3, setLabel3] = useState(false);
    const [label4, setLabel4] = useState(false);

    const [name, setName] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [email, setEmail] = useState('');
    const [msgm, setMsgm] = useState('');

    function clearInput() {
        setName('');
        setEmail('');
        setWhatsapp('');
        setMsgm('');
    }

    async function handleEmail(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            msgm,
        };

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
            const response =  await api.post('clients', data);
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
        <div id="home-container">
            <Carousel />

            <div id="section">
                <div id="atuacao">
                    <h1 style={ {textAlign: 'center'} } >Áreas de atuação</h1>
                    <br/>
                    <h2 onClick={() => setLabel1(!label1)}>Direito Previdenciário {label1 ? <FaChevronUp /> : <FaChevronDown />}</h2>
                    {label1 && <div className="zippyBox">
                        <h3>ADVOGADO ESPECIALISTA: THULIO AUGUSTO MOURA OAB/PE 48.675</h3>
                        <br/>
                        <p>        
                            No ramo da área previdenciária o nosso escritório prioriza por um atendimento 
                            diferenciado no qual preza pela qualidade. É feita uma análise minuciosa dos 
                            casos com o escopo de garantir o direito da proteção social para nossos clientes.
                        </p>
                        <p>
                            Assim como todas as áreas do direito, o ramo previdenciário proporciona vários 
                            nichos de atuações e o nosso escritório abrange todos esses, tais como: 
                            auxílio-doença; auxilio-reclusão; pensão por morte; benefício assistencial, e,
                            entre outros. Atuamos também no planejamento previdenciário para aqueles que não 
                            conseguiram preencher os requisitos da reforma previdenciária e que agora precisam 
                            se adequar às regras de transição.
                        </p>
                    </div>}
                    
                    <h2 onClick={() => setLabel2(!label2)}>Direito Tributário {label2 ? <FaChevronUp /> : <FaChevronDown />}</h2>
                    {label2 && <div className="zippyBox">
                        <h3>ADVOGADO ESPECIALISTA: THULIO AUGUSTO MOURA OAB/PE 48.675</h3>
                        <br/>
                        <p>        
                        O Direito Tributário é uma das ramificações do direito que mais precisa de atenção e de um profissional especialista para análise dos casos apresentados. São inúmeras situações nas quais o contribuinte paga indevidamente imposto, e na maioria das vezes pagam o imposto duas vezes. 
                        </p>
                        <p>
                        Nessa linha, nosso escritório possui dois advogados estudiosos na área do Direito Tributário que se mantêm atualizados sobre toda a legislação, bem como, elaboram teses para a recuperação do que fora cobrado indevidamente. Por conseguinte, atuam de forma incisiva para interromper as práticas ilegais expressamente proibidas pelo nosso ordenamento jurídico, como por exemplo, utilizar o tributo como penalidade.
                        </p>
                    </div>}

                    
                    <h2 onClick={() => setLabel3(!label3)}>Direito Trabalhista {label3 ? <FaChevronUp /> : <FaChevronDown />}</h2>
                    {label3 && <div className="zippyBox">
                        <h3>ADVOGADO ESPECIALISTA: AMANDA BARBOZA LIMA OAB/PE 49.048</h3>
                        <br/>
                        <p>
                        O Direito do Trabalho requer atuação tanto na área preventiva como o assessoramento aos empregadores; como também na assistência ao empregado quando seus direitos são violados. Dessa forma, os juristas confeccionam iniciais petitórias, pareceres, assessoramento e consultorias.        
                        </p>
                    </div>}
                    
                    
                    
                    <h2 onClick={() => setLabel4(!label4)}>Direito Criminal {label4 ? <FaChevronUp /> : <FaChevronDown />}</h2>
                    {label4 && <div className="zippyBox">
                        <h3>ADVOGADO ESPECIALISTA: WILCYLANE CASTRO ALMEIDA OAB/BA 63.640</h3>
                        <br/>
                        <p>  
                            Na seara Criminal, prestamos a assistência necessária, sempre balizados nos princípios insculpidos na Constituição Federal. A atuação requer disponibilidade diuturna e atenta aos casos. Nesse sentido, este ramo possui vários nichos, tais como: atos em órgãos policiais, diligencias em Juizados Especiais Criminais, defesa em processo de execução penal, acompanhamento em busca e apreensão, habeas corpus e atos infracionais.      
                        </p>
                        <p>
                        Prestamos a assistência necessária com base no respeito, e na dignidade da pessoa humana, independentemente de suas ações. Lidar com a responsabilidade desse trabalho é desafiador. O advogado criminalista possui um valor inestimável para aqueles que se encontram nas situações subsumidas pelo Código Penal. Por isso, nosso compromisso com a lei e a justiça para todos.
                        </p>
                    </div>}
                
                </div>

                <div id="section-contact">
                    <h1 style={{ textAlign: 'center' }} >Fale conosco</h1>
                    <br/>
                    <form onSubmit={handleEmail} method="post">
                        <div id="section-pos">                            
                            <div id="form-left">
                                <input type="text" placeholder="Nome" value={name} onChange={e => setName(e.target.value)} />
                                <input type="text" placeholder="Whatsapp" maxLength={11} onKeyPress={onlynumber} value={whatsapp} onChange={e => setWhatsapp(e.target.value)}/>
                                <input type="text" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)}/>
                            </div>
                            <div id="form-right">
                                <textarea style={{resize: 'none'}} placeholder="Sua mensagem" value={msgm} onChange={e => setMsgm(e.target.value)} />
                            </div>
                        </div>                        
                        <button type="submit">Enviar mensagem</button>
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
            </div>

            <div id="call">
                <p>Conheça mais sobre o nosso escritório e a nossa equipe antes de contratar os nossos serviços</p>
                <br/>
                <a href="/about">Conhecer</a>
            </div>       
        </div>
    );
}