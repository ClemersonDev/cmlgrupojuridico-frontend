import React from 'react';
import './styles.css';
import previdenciario from '../../assets/previdenciario.png';
import criminal from '../../assets/criminal.png';
import trabalhista from '../../assets/trabalhista.png';
import tributario from '../../assets/tributario.png';

export default function Acting() {
    return(
        <div id="acting-container">
            <h1>Áreas de atuação</h1>
            <div id="actings-grid">
                <div className="grid-item">
                    <img className="icons" src={previdenciario} alt="previdenciario-icon"/>
                    <h2>Direito Previdenciário</h2>
                    <br/>
                    <h3>ADVOGADO ESPECIALISTA: THULIO AUGUSTO MOURA OAB/PE 48.675</h3>
                    <br/>
                    <p>No ramo da área previdenciária o nosso escritório prioriza por um atendimento diferenciado no qual preza pela qualidade. É feita uma análise minuciosa dos casos com o escopo de garantir o direito da proteção social para nossos clientes.</p>
                    <p>Assim como todas as áreas do direito, o ramo previdenciário proporciona vários nichos de atuações e o nosso escritório abrange todos esses, tais como: auxílio-doença; auxilio-reclusão; pensão por morte; benefício assistencial, e, entre outros. Atuamos também no planejamento previdenciário para aqueles que não conseguiram preencher os requisitos da reforma previdenciária e que agora precisam se adequar às regras de transição.</p>
                </div>

                <div  className="grid-item">
                    <img className="icons" src={tributario} alt="tributario-icon"/>
                    <h2>Direito Tributário</h2>
                    <br/>
                    <h3>ADVOGADO ESPECIALISTA: THULIO AUGUSTO MOURA OAB/PE 48.675</h3>
                    <br/>
                    <p>O Direito Tributário é uma das ramificações do direito que mais precisa de atenção e de um profissional especialista para análise dos casos apresentados. São inúmeras situações nas quais o contribuinte paga indevidamente imposto, e na maioria das vezes pagam o imposto duas vezes.</p>
                    <p>Nessa linha, nosso escritório possui dois advogados estudiosos na área do Direito Tributário que se mantêm atualizados sobre toda a legislação, bem como, elaboram teses para a recuperação do que fora cobrado indevidamente. Por conseguinte, atuam de forma incisiva para interromper as práticas ilegais expressamente proibidas pelo nosso ordenamento jurídico, como por exemplo, utilizar o tributo como penalidade.</p>
                </div>

                <div className="grid-item">
                    <img className="icons" src={trabalhista} alt="trabalhista-icon"/>
                    <h2>Direito Trabalhista</h2>
                    <br/>
                    <h3>ADVOGADO ESPECIALISTA: AMANDA BARBOZA LIMA OAB/PE 49.048</h3>
                    <br/>
                    <p>O Direito do Trabalho requer atuação tanto na área preventiva como o assessoramento aos empregadores; como também na assistência ao empregado quando seus direitos são violados. Dessa forma, os juristas confeccionam iniciais petitórias, pareceres, assessoramento e consultorias.</p>
                </div>

                <div className="grid-item">
                    <img className="icons" src={criminal} alt="criminal-icon"/>
                    <h2>Direito Criminal</h2>
                    <br/>
                    <h3>ADVOGADO ESPECIALISTA: WILCYLANE CASTRO ALMEIDA OAB/BA 63.640</h3>
                    <br/>
                    <p>Na seara Criminal, prestamos a assistência necessária, sempre balizados nos princípios insculpidos na Constituição Federal. A atuação requer disponibilidade diuturna e atenta aos casos. Nesse sentido, este ramo possui vários nichos, tais como: atos em órgãos policiais, diligencias em Juizados Especiais Criminais, defesa em processo de execução penal, acompanhamento em busca e apreensão, habeas corpus e atos infracionais.</p>
                    <p>Prestamos a assistência necessária com base no respeito, e na dignidade da pessoa humana, independentemente de suas ações. Lidar com a responsabilidade desse trabalho é desafiador. O advogado criminalista possui um valor inestimável para aqueles que se encontram nas situações subsumidas pelo Código Penal. Por isso, nosso compromisso com a lei e a justiça para todos.</p>
                </div>
            </div>
        </div>
    );
}