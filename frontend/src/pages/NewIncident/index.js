import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';

const NewIncident = props => {
  return (
    <div className='new-incident-container'>
      <div className='content'>
        <section>
          <img src={logoImg} alt='be the hero' />
          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>
          <Link to='/profile' className='back-link'>
            <FiArrowLeft size={16} color='#E02041' />
            Voltar para home
          </Link>
        </section>
        <form>
          <input placeholder='Título do caso' />
          <textarea placeholderDescrição />
          <input placeholder='Valor em reais' />

          <button type='submit' className='button'>
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};
export default NewIncident;
