import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

const Logon = props => {
  const [id, setId] = useState('');

  const history = useHistory();

  async function handleLogin(event) {
    event.preventDefault();

    try {
      const response = await api.post('session', { id });
      console.log(response.data.name);
      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);
      history.push('/profile');
    } catch (error) {
      alert('Falha no login, tente novamente.');
    }
  }

  return (
    <div className='logon-container'>
      <section className='form'>
        <img src={logoImg} alt='be the hero logo' />

        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>
          <input
            placeholder='sua ID'
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <button type='submit' className='button'>
            Entrar
          </button>
          <Link to='/register' className='back-link'>
            <FiLogIn size={16} color='#E02041' />
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={heroesImg} alt='heroes' />
    </div>
  );
};

export default Logon;
