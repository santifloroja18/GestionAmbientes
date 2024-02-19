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
import EstadoAmbientes from './pages/EstadoAmbientes';
import RecuperarContrasena from './pages/RecuperarContraseña';
import Auditorio from './pages/Auditorio';
import Ambientes from './pages/Ambientes';
import CrearAmbiente from './pages/CrearAmbiente';
import EditarAmbiente from './pages/EditarAmbiente';

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
    path: '/estadoAmbientes',
    element: <EstadoAmbientes/>,
    errorElement: <div>ERROR 404!!</div>
  },
  {
    path: '/recuperarContraseña',
    element: <RecuperarContrasena/>,
    errorElement: <div>ERROR 404!!</div>
  },
  {
    path: '/auditorio',
    element: <Auditorio/>,
    errorElement: <div>ERROR 404!!</div>
  },
  {
    path: '/Ambientes',
    element: <Ambientes/>,
    errorElement: <div>ERROR 404!!</div>
  },
  {
    path: '/crearAmbientes',
    element: <CrearAmbiente/>,
    errorElement: <div>ERROR 404!!</div>
  },
  {
    path: '/editarAmbiente/:id',
    element: <EditarAmbiente/>,
    errorElement: <div>ERROR 404!!</div>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
  

