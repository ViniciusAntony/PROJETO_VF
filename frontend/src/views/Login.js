import React, {useState} from 'react';
import '../styles/Main-styles.css';
import '../styles/Login-styles.css';
import Main from "../components/Main/Main";
import axios from 'axios';
import { useNavigate  } from 'react-router-dom';

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
  
    try{
    await axios.post('login', {
      email: email,
      password: password,
    });

    navigate('/')
    }catch (error) {
      console.error('Erro ao fazer login:', error);
    }}
    
  return (
    <>
      <Main />
        
      <div className='container-title-login'>
        <div className='wrap-title-login'>
          <span className='title-login'>Acesse com sua conta</span>
        </div>
      </div>

      <div className='container-login'>
        <div className='wrap-login'>
          <div className='wrap-input'>
            <input
              className={email !== "" ? 'has-val input' : 'input'}
              type='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <span className='focus-input' data-placeholder='Email'></span>
          </div>
          <div className='wrap-input'>
            <input
                className={password !== "" ? 'has-val input' : 'input'}
                type='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            <span className='focus-input' data-placeholder='Senha'></span>
          </div>
          <form onSubmit={submit}>
            <div className='login-form-btn'>
              <button className='login-btn'>Acessar</button>
            </div>
          </form>
          <div className='login-form-btn'>
            <a href='/register'>
              <button className='register-btn'>Criar Conta</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login