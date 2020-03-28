import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

const NewIncident = props => {
  // "title": "teste 10" ,
  // "description":"teste" ,
  // "value": "120.50"
  const history = useHistory();

  const ongId = localStorage.getItem('ongId');

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  async function handleNewIncident(event) {
    event.preventDefault();
    const data = { title, description, value };
    console.log(data);

    try {
      await api.post('incidents', data, {
        headers: {
          Authorization: ongId
        }
      });

      alert('Caso salvo com sucesso');
      history.push('/profile');
    } catch (error) {
      alert('Erro ao cadastrar caso, tente novamente.');
    }
  }

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
        <form onSubmit={handleNewIncident}>
          <input
            placeholder='Título do caso'
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea
            placeholder='Descrição'
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input
            placeholder='Valor em reais'
            value={value}
            onChange={e => setValue(e.target.value)}
          />

          <button type='submit' className='button'>
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};
export default NewIncident;
