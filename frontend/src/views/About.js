import React from 'react';
import '../styles/Main-styles.css';
import Main from "../components/Main/Main";
import '../styles/About-styles.css';

function About(props) {
  return (
    <>
      <Main />

      <div className='container-title-about'>
        <div className='wrap-title-about'>
          <span className='title-about'>Sobre</span>
        </div>
      </div>

      <div className='container-about'>
        <div className='wrap-about'>
          <div className='info-section-about'>
            <span className='maintext-about'>Considerações sobre o projeto desenvolvido</span>
            <span className='text-about'>O projeto desenvolvido trata de um protótipo funcional e aborda um sistema que exibe cartões vindos da API Rick & Morty, permitindo que sejam salvos pelos usuários através de um simples sistema de login.</span>
            
            <span className='text-about'>A aplicação conta com algumas falhas tratáveis e várias melhorias a serem realizadas para que se torne de fato um sistema utilizável, incluindo ajustes na utilização e funcionamento. </span>
            <span className='text-about'>Durante esse desenvolvimento, foi possível entender e aprender muito sobre as linguagens, frameworks, estruturação, relacionamento entre back-end e front-end, além do banco de dados local. A maior dificuldade foi o aprendizado do Laravel, com o qual nunca tinha tido contato até então. </span>
            <span className='text-about'>Em suma, as dificuldades enfrentadas ao longo dos 15 dias de desenvolvimento do projeto serviram como oportunidades de crescimento e aprendizado.</span>

            <br></br>
            <span className='text-about'>Atensiosamente, Vinicius Antony.</span>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default About;