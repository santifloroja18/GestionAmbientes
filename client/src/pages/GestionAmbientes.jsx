import { Link } from 'react-router-dom'
import '../styles/GestionAmbientes.css'

export default function GestionAmbientes(){
    return(
        <div id='Gestion_Ambientes'>
            <div className='row cuadradogestion my-3'>

                <div id='form' className='col-12' >
                    <div className='row justify-content-center mb-4 mt-3'>
                        <div  className=' col-11'><h4 id='tituloGestion' className='text-center'>Gestión de Ambientes</h4></div>
                    </div>
                    
                    <div id='formGestion' className='row justify-content-center'>
                        <div className='col-11'>
                            <form action="" method="post">

                            <div class="form-floating mt-4">
                                        <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                                        <option selected>Selecciona el Ambiente:</option>
                                            <option value="1">505</option>
                                            <option value="2">504</option>
                                            <option value="4">503</option>
                                            <option value="3">502</option>
                                            <option value="5">501</option>
                                        </select>
                                        <label for="floatingSelect">Ambiente</label>
                                    </div>
                                    
                                    <div class="form-floating mt-4">
                                        <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                                            <option selected>Selecciona Programa de Formación</option>
                                            <option value="1">ADSO</option>
                                            <option value="2">Multimedia</option>
                                            <option value="3">Audiovisuales</option>
                                        </select>
                                        <label for="floatingSelect">Programa de Formación:</label>
                                    </div>


                                    <div class="form-floating mt-4">
                                        <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                                            <option selected>Seleccionar Piso</option>
                                            <option value="1">Piso 1 - Laboratorio</option>
                                            <option value="2">Piso 2 - Ambientes</option>
                                            <option value="3">Piso 3 - Auditorio</option>
                                        </select>
                                        <label for="floatingSelect">Piso:</label>
                                    </div>

                                    <div class="form-floating mt-4">
                                        <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                                            <option selected>Seleccionar disponibilidad</option>
                                            <option value="1">Ambiente disponible</option>
                                            <option value="2">Ambiente no disponible</option>
                                        </select>
                                        <label for="floatingSelect">Disponibilidad:</label>
                                    </div>

                                    <div className="col-11 mt-4">
                                        <div id='camposForm' className='mb-3'>
                                            <label htmlFor="" className='form-label fw-bold'></label>
                                            <button type="button" className="btn btn-dark text-white fw-bold" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            Inventario de Ambiente
                                            </button>


                                            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                <div className="modal-header">
                                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Seleccionar Elementos y Cantidad:</h1>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Sillas
                                                    </label>
                                                    </div>
                                                    <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                                                    <label class="form-check-label" for="flexCheckChecked">
                                                        Mesas
                                                    </label>
                                                    </div>
                                                    <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                                                    <label class="form-check-label" for="flexCheckChecked">
                                                        Tablero
                                                    </label>
                                                    </div>
                                                    <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                                                    <label class="form-check-label" for="flexCheckChecked">
                                                        Televisor
                                                    </label>
                                                    </div>
                                                    <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                                                    <label class="form-check-label" for="flexCheckChecked">
                                                        Computadores
                                                    </label>
                                                    </div>
                                                    <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                                                    <label class="form-check-label" for="flexCheckChecked">
                                                        Aire Acondicionado
                                                    </label>
                                                    </div>
                                                    
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary text-dark fw-bold" data-bs-dismiss="modal">Cerrar</button>
                                                    <button type="button" className="btn btn-dark fw-bold">Guardar</button>
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                  
                              
                                    <button type="button" className="btn btn-dark fw-bold mt-2">Agregar Ambiente</button>                  

                                    
                            </form>
                        </div>
                    </div>
                    
                    <Link to={'/home'} >
                        <button type="button" class="btn btn-outline-secondary m-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-bar-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5ZM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5Z"></path>
                            </svg>
                            <span class="visually-hidden">Button</span>
                        </button>
                    </Link>
                
                    <img id='logo-pocoyo' className='img-fluid rounded float-end' src="../../../images/logopequeño.png" alt="logoSena" />
                </div>
            </div>
        </div>
    )
}