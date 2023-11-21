import React, { useState } from 'react';
import '../styles/RecuperarContraseña.css'
import { Link } from 'react-router-dom';


export default function RecuperarContrasena(){

  const [email, setEmail] = useState('');
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTimeout(() => {
  
      setIsEmailSent(true);
    }, 2000);
  }; 

  return (
    <div id="body">
      <div id="RecuperarContraseña">
        <h1 id="title">Recuperar Contraseña</h1>
        {isEmailSent ? (
          <p>Se ha enviado un correo electrónico con instrucciones para restablecer tu contraseña.</p>
        ) : (
          <form onSubmit={handleSubmit} id="FormularioRecuperarContraseña">
            <label>
              Correo Electrónico:
              <input type="email" value={email} onChange={handleEmailChange} />
            </label>
            <button type="submit" id="BotonEnvia">Enviar Correo de Recuperación</button>
          </form>
        )}
        <Link to={'/'} >
          <button type="button" class="btn btn-outline-secondary m-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-bar-left" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5ZM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5Z"></path>
            </svg>
            <span class="visually-hidden">Button</span>
          </button>
        </Link>

      </div>
    </div>
  );
};

