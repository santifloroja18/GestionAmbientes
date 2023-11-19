import { Link } from 'react-router-dom';
import '../styles/Registro.css'

export default function Registro(){
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
                                            <label className='form-label fw-bold' htmlFor='name'>Nombre:</label>
                                            <input className='form-control' type="text" id='name'/>
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div id='camposForm' className='mb-3'>
                                            <label className='form-label fw-bold' htmlFor='lastname'>Apellido:</label>
                                            <input className='form-control' type="text" id='lastname'/>    
                                        </div>
                                    </div>    
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <div id='camposForm' className="mb-3">
                                            <label className='form-label fw-bold' htmlFor='id'>Cédula:</label>
                                            <input className='form-control' type="number" id='id'/>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div id='camposForm' className='mb-3'>
                                            <label className='form-label fw-bold' htmlFor='phone'>Teléfono:</label>
                                            <input className='form-control' type="number" id='phone'/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <div id='camposForm' className="mb-3">
                                            <label className='form-label fw-bold' htmlFor='email'>Correo Electrónico:</label>
                                            <input className='form-control' type="email" id='email'/>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div id='camposForm' className='mb-3'>
                                            <label className='form-label fw-bold' htmlFor='program'>Programa de Formación:</label>
                                            <input className='form-control' type="text" id='program'/>
                                        </div>
                                    </div>    
                                </div>                               
                                <div className="row">
                                    <div className='col-6'>
                                        <div id='camposForm' className='mb-3'>
                                            <label className='form-label fw-bold' htmlFor="password" >Contraseña:</label>
                                            <input className='form-control' type="password" name="" id="password"/>
                                        </div>
                                    </div>
                                </div> 
                                <div className='row justify-content-center'>
                                    <div className="col-3"></div>
                                    <div className='col-5'>
                                        <Link to={'/'} >
                                            <button className='btn btn-dark fw-bold' type="button">Registrar</button>
                                        </Link>
                                        <Link to={'/'} id='ruta'>
                                            <h6 className='mt-1 text-dark'>¿Ya tienes cuenta?</h6>
                                        </Link>
                                    </div>
                                    
                                    
                                    <div className='col-1'></div>
                                    <img className='col-3 img-fluid rounded float-end' src="../../../images/logopequeño.png" alt="logoSena" />
                                </div>
                                <div className="row justify-content-center">
                                    
                                </div>
                                
                            </form>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}