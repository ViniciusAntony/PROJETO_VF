import React, { useState, useEffect } from "react";
import '../../styles/Main-styles.css';
import axios from "axios";
import { useNavigate  } from 'react-router-dom';

function Main() {
  const [message, setMessage] = useState('');
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const logout = async (e) => {
    try {
      await axios.post('logout', {});
      setMessage('Você foi desconectado!');
      navigate('/')
    } catch (error) {
  }}

  useEffect(() => {
    (async () => {
        try { 
          const { data } = await axios.get('user');
            setMessage(`Olá, ${data.name}`)
            setUser(user);
        } catch (e) {
            setMessage('Você não está logado em nenhuma conta!');
            
        }
    })();
  }, [user]);

  return (
    <div className='container-menu'>
      <div className='wrap-menu'>
        <button class="round-button" onClick={logout}>Off</button>
        <span className='title-menu'>{message}</span>

        <div className='container-menu-btn'>
          <a href='/'>
            <button className='menu-btn'>Home</button>
          </a>
          <a href='/login'>
            <button className='menu-btn'>login</button>
          </a>
          <a href='/characters'>
            <button className='menu-btn'>Personagens</button>
          </a>
          <a href='/about'>
            <button className='menu-btn'>Sobre</button>
          </a>
        </div>
      </div>
  </div>
  )
}

export default Main