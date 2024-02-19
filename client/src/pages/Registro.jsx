import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Registro.css'

export default function Registro(){
    const navigate = useNavigate();
    const [ userData, setUserData] = useState({
        first_name: '',
        second_name: '',
        first_lastname: '',
        second_lastname: '',
        email: '',
        second_email: '',
        working_day: '',
        documentType: '',
        document_number: '',
        phone_number: '',
        password: ''
    });



    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const [errorMessage, setErrorMessage] = useState('');

    const handleRegistration = async () => {
        try {
            const response = await axios.post('http://localhost:8000/api/register', userData);
            console.log(response.data);
            navigate('/');
            // Maneja la respuesta según tus necesidades
        } catch (error) {
            console.error('Error al registrar usuario:', error);
            setErrorMessage('Error al registrar usuario: ' + JSON.stringify(error.response.data.message));
        }
    };


    return(
        <div id='Registro'>
            <div className='row cuadrado my-5'>
                <div className='col-5'>
                    <img id='imagen' className='img-fluid' src="../../../images/Imagen.jpeg" alt="SENALOVER" />
                </div>
                <div id='form' className='col-7' >
                    

                    <div className='row justify-content-center' >
                        <div className='col-8'><h4 id='tituloRegistro' className='text-center'>Crear una cuenta</h4></div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <form action="" method="post">
                                <div className="row">
                                    <div className='col-6'>
                                        <div id='camposForm' className='mb-3'>
                                            <label className='form-label fw-bold' htmlFor='name'>Primer Nombre:</label>
                                            <input required className='form-control' type="text" id='first_name' value={userData.first_name} onChange={handleInputChange}/>
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div id='camposForm' className='mb-3'>
                                            <label className='form-label fw-bold' htmlFor='name'>Segundo Nombre:</label>
                                            <input required className='form-control' type="text" id='second_name' value={userData.second_name} onChange={handleInputChange}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                <div className='col-6'>
                                        <div id='camposForm' className='mb-3'>
                                            <label className='form-label fw-bold' htmlFor='lastname'>Primer Apellido:</label>
                                            <input required className='form-control' type="text" id='first_lastname' value={userData.first_lastname} onChange={handleInputChange}/>    
                                        </div>
                                    </div> 
                                    <div className='col-6'>
                                        <div id='camposForm' className='mb-3'>
                                            <label className='form-label fw-bold' htmlFor='lastname'>Segundo Apellido:</label>
                                            <input required className='form-control' type="text" id='second_lastname' value={userData.second_lastname} onChange={handleInputChange}/>    
                                        </div>
                                    </div> 
                                </div>

                                <div className="row">
                                    <div className="col-6">
                                        <div id='camposForm' className="mb-3">
                                            <label className='form-label fw-bold' htmlFor='email'>Correo Electrónico:</label>
                                            <input required className='form-control' type="email" id='email' value={userData.email} onChange={handleInputChange}/>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div id='camposForm' className="mb-3">
                                            <label className='form-label fw-bold' htmlFor='email'>Segundo Correo Electrónico:</label>
                                            <input required className='form-control' type="email" id='second_email' value={userData.second_email} onChange={handleInputChange}/>
                                        </div>
                                    </div>
                                   
                                </div>
                                <div className="row">
                                    
                                    <div className="col-6">
                                        <div id='camposForm' className='mb-3'>
                                            <label className='form-label fw-bold' htmlFor='working_day'>Jornada:</label>
                                            <input required className='form-control' type="text" id='working_day' value={userData.working_day} onChange={handleInputChange}/>
                                        </div>
                                    </div>   
                                    <div className="col-6">
                                        <div id='camposForm' className='mb-3'>
                                            <label className='form-label fw-bold' htmlFor='documentType'>Tipo de Documento:</label>
                                            <input required className='form-control' type="text" id='documentType' value={userData.documentType} onChange={handleInputChange}/>
                                        </div>
                                    </div> 
                                </div>    
                                <div className="row">
                                    
                                    <div className="col-6">
                                        <div id='camposForm' className='mb-3'>
                                            <label className='form-label fw-bold' htmlFor='document_number'>Número de Documento:</label>
                                            <input required className='form-control' type="number" id='document_number' value={userData.document_number} onChange={handleInputChange}/>
                                        </div>
                                    </div>   
                                    <div className="col-6">
                                        <div id='camposForm' className='mb-3'>
                                            <label className='form-label fw-bold' htmlFor='phone_number'>Número de Telefono:</label>
                                            <input required className='form-control' type="text" id='phone_number' value={userData.phone_number} onChange={handleInputChange}/>
                                        </div>
                                    </div> 
                                </div>                            
                                <div className="row">
                                    <div className='col-6'>
                                        <div id='camposForm' className='mb-3'>
                                            <label className='form-label fw-bold' htmlFor="password" >Contraseña:</label>
                                            <input required className='form-control' type="password" name="" id="password" value={userData.password} onChange={handleInputChange}/>
                                        </div>
                                    </div>
                                </div> 
                                <div className='row justify-content-center'>
                                    <div className="col-3"></div>
                                    <div className='col-5'>
                                        <button className='btn btn-dark fw-bold' type="button" onClick={handleRegistration}>Registrar
                                        </button>

                                        <Link to={'/'} id='ruta'>
                                            <h6 className='mt-1 text-dark'>¿Ya tienes cuenta?</h6>
                                        </Link>
                                    </div>
                                    
                                    
                                    <div className='col-1'></div>
                                    <img className='col-3 img-fluid rounded float-end' src="../../../images/logopequeño.png" alt="logoSena" />
                                </div>
                                <div className="row justify-content-center">
                                    {errorMessage && (
                                        <div className="col-8">
                                            <div className="alert alert-danger" role="alert">
                                                {errorMessage}
                                            </div>
                                        </div>
                                    )}
                                </div>
                                
                            </form>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}