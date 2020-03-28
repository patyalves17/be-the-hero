import React, { useEffect, useState, useReducer } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';

const Profile = props => {
  const ongId = localStorage.getItem('ongId');
  const ongName = localStorage.getItem('ongName');
  const [incidents, setIncidents] = useState([]);

  const history = useHistory();

  useEffect(() => {
    try {
      api
        .get('profile', {
          headers: {
            Authorization: ongId
          }
        })
        .then(response => {
          setIncidents(response.data);
        });
    } catch (error) {
      alert('Error. Tente novamente mais tarde.');
    }
  }, [ongId]);

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId
        }
      });
      setIncidents(incidents.filter(incident => incident.id != id));
    } catch (error) {
      alert('Erro ao deletar caso, tente novamente.');
    }
  }

  function handleLogout() {
    localStorage.clear();
    history.push('/');
  }

  return (
    <div className='profile-container'>
      <header>
        <img src={logoImg} alt='Be the Hero' />
        <span>Bem vindo, {ongName}</span>

        <Link className='button' to='/incidents/new'>
          Cadastrar novo caso
        </Link>
        <button type='button' onClick={handleLogout}>
          <FiPower size='18' color='#e02041'></FiPower>
        </button>
      </header>

      <h1>Casos cadastrados</h1>

      <ul>
        {incidents.map(incident => (
          <li key={incident.id}>
            <strong>Caso:</strong>
            <p>{incident.title}</p>

            <strong>Descrição:</strong>
            <p>{incident.description}</p>

            <strong>Valor:</strong>
            <p>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(incident.value)}
            </p>

            <button
              type='button'
              onClick={() => handleDeleteIncident(incident.id)}
            >
              <FiTrash2 size='20' color='a8a8b3' />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
