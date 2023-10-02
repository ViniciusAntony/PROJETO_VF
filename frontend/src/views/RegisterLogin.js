import React, {useState} from 'react';
import '../styles/Main-styles.css';
import '../styles/RegisterLogin-styles.css';
import Main from "../components/Main/Main";
import axios from 'axios';
import { useNavigate  } from 'react-router-dom';

function RegisterLogin(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirm, setPassword_Confirm] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    
    await axios.post('register', {
      name: name,
      email: email,
      password: password,
      password_confirm: password_confirm
    });

    navigate('/login');
  }

  return (
    <>
      <Main />
        
      <div className='container-title-registerlogin'>
        <div className='wrap-title-registerlogin'>
          <span className='title-registerlogin'>Crie sua Conta</span>
          <div className='container-menu-btn'>
            <a href='/login'>
              <button className='cancel-registerlogin-btn'>Fechar</button>
            </a>
          </div>
        </div>
      </div>

      <form onSubmit={submit}>
        <div className='container-registerlogin'>
          <div className='wrap-registerlogin'>
            
            <div className='wrap-input-registerlogin'>
              <input
                className={name !== "" ? 'has-val input-registerlogin' : 'input-registerlogin'}
                type='name'
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <span className='focus-input-registerlogin' data-placeholder='Nome'></span>
            </div>
            <div className='wrap-input-registerlogin'>
              <input
                  className={email !== "" ? 'has-val input-registerlogin' : 'input-registerlogin'}
                  type='email'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              <span className='focus-input-registerlogin' data-placeholder='Email'></span>
            </div>
            <div className='wrap-input-registerlogin'>
              <input
                  className={password !== "" ? 'has-val input-registerlogin' : 'input-registerlogin'}
                  type='password'
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              <span className='focus-input-registerlogin' data-placeholder='Senha'></span>
            </div>
            <div className='wrap-input-registerlogin'>
              <input
                  className={password_confirm !== "" ? 'has-val input-registerlogin' : 'input-registerlogin'}
                  type='password'
                  value={password_confirm}
                  onChange={e => setPassword_Confirm(e.target.value)}
                />
              <span className='focus-input-registerlogin' data-placeholder='Confirmar Senha'></span>
            </div>
            
            <div className='registerlogin-form-btn'>
              <button className='registerlogin-btn' type='submit'>Criar</button>
            </div>
          
          </div>
        </div>
      </form>
    </>
  );
}

export default RegisterLogin;