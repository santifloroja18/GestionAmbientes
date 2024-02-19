import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";

export default function Login() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/login', userData)
      console.log(response.data)
      // var error = response.data.map(message)
      navigate('/ambientes')
    } catch (error) {
      console.error('Error al ingresar usuario:', error);
      setErrorMessage('Error al ingresar usuario: ' + error.response.data.message);
    }
  }

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setUserData((prevData) => ({
        ...prevData,
        [id]: value,
    }));
};

  return (
    <div id="Login">
      <div className="row cuadradolog my-5">
        <div className="col-5">
          <img
            id="imagen"
            className="img-fluid"
            src="../../../images/Imagen.jpeg"
            alt="SENALOVER"
          />
        </div>
        <div id="form" className="col-7">
          <div className="row justify-content-center">
            <div className="col-8">
              <h4 id="tituloLogin" className="text-center">
                Inicia sesión
              </h4>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <form action="" method="post">
                <div className="row justify-content-center">
                  <div className="col-6">
                    <div id="camposFormulario" className="mb-3">
                      <label className="form-label fw-bold" htmlFor="email">
                        Correo electrónico:
                      </label>
                      <input
                        id="email"
                        className="form-control"
                        type="email"
                        placeholder="Ingrese correo"
                        value={userData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div id="camposFormulario" className="mb-3">
                      <label className="form-label fw-bold" htmlFor="password">
                        Contraseña:
                      </label>
                      <input
                        className="form-control"
                        type="password"
                        name=""
                        id="password"
                        placeholder="Ingrese contraseña"
                        value={userData.password}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-1"></div>
                  <div className="col-2">
                    <Link to={"/registro"}>
                      <button
                        className="btn btn-secondary text-dark fw-bold"
                        type="button"
                      >
                        Registrarse
                      </button>
                    </Link>
                  </div>
                  <div className="col-2"></div>
                  <div className="col-4">
                      <button className="btn btn-dark fw-bold" type="button" onClick={handleLogin}>
                        Iniciar Sesión
                      </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {errorMessage && (
            <div className="col-8">
              <div className="alert alert-danger" role="alert">
                {errorMessage}
              </div>
            </div>
          )}
          <Link id="ruta" to={"/recuperarContraseña"}>
            <h5 className="mt-5 text-center fw-bold text-dark">
              ¿Olvidaste tu contraseña?
            </h5>
          </Link>
          <img
            className="img-fluid rounded float-end"
            src="../../../images/logopequeño.png"
            alt="logoSena"
          />
        </div>
      </div>
    </div>
  );
}
