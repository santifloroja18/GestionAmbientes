import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Login from './pages/Login';
import Registro from './pages/Registro';
import Home from './pages/Home';
import PrestamoAmbientes from './pages/PrestamoAmbientes';
import GestionAmbientes from './pages/GestionAmbientes';
import AmbientesPrestados from './pages/AmbientesPrestados';
import RecuperarContrasena from './pages/RecuperarContraseña';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login/>,
    errorElement: <div>ERROR 404!!</div>
  },
  {
    path: '/registro',
    element: <Registro/>,
    errorElement: <div>ERROR 404!!</div>
  },
  {
    path: '/home',
    element: <Home/>,
    errorElement: <div>Error 404!!</div>
  },
  {
    path: '/prestamoAmbientes',
    element: <PrestamoAmbientes/>,
    errorElement: <div>ERROR 404!!</div>
  },
  {
    path: '/gestionAmbientes',
    element: <GestionAmbientes/>,
    errorElement: <div>ERROR 404!!</div>
  },
  {
    path: '/ambientesPrestados',
    element: <AmbientesPrestados/>,
    errorElement: <div>ERROR 404!!</div>
  },
  {
    path: '/recuperarContraseña',
    element: <RecuperarContrasena/>,
    errorElement: <div>ERROR 404!!</div>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
  

