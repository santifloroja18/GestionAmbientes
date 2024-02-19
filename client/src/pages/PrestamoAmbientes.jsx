import { Link } from 'react-router-dom'
import '../styles/PrestamoAmbientes.css'

export default function PrestamoAmbientes(){
    return(
        <div id='Prestamo_ambientes'>
            <div className='row cuadradoprestamo my-5'>

                <div id='form' className='col-12' >
                    <div className='row justify-content-center mb-4 mt-3'>
                        <div  className=' col-11'><h4 id='tituloPrestamo' className='text-center'>Préstamo de ambientes</h4></div>
                    </div>
                    
                    <div id='formPrestamo' className='row justify-content-center'>
                        <div className='col-11'>
                            <form action="" method="post">
                                    
                                    <div class="form-floating">
                                        <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                                            <option selected>Seleccionar usuario</option>
                                            <option value="1">Catalina</option>
                                            <option value="2">Cesar</option>
                                            <option value="3">Luis</option>
                                        </select>
                                        <label for="floatingSelect">Usuario</label>
                                    </div>
                                    <div class="form-floating mt-4">
                                        <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                                        <option selected>Selecciona el Ambiente a prestar:</option>
                                            <option value="1">505</option>
                                            <option value="2">504</option>
                                            <option value="4">503</option>
                                            <option value="3">502</option>
                                            <option value="5">501</option>
                                        </select>
                                        <label for="floatingSelect">Ambiente</label>
                                    </div>
                                
                        
                                    <div className="col-7 ">
                                        
                                    
                                    <div className="col-11">
                                        <div id='camposForm' className='mb-3'>
                                            <label htmlFor="" className='form-label fw-bold'></label>
                                            <button type="button" className="btn btn-dark text-white fw-bold" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            Seleccione Elementos 
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
                                                        Cable HDMI
                                                    </label>
                                                    </div>
                                                    <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                                                    <label class="form-check-label" for="flexCheckChecked">
                                                        Control Aire Acondicionado
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
                                </div>
                              
                                    <div className="col-12">
                                    <div class="mb-3">
                                        <label for="formFileMultiple" class="form-label">Adjuntar Firma</label>
                                        <input class="form-control" type="file" id="formFileMultiple" multiple/>
                                        </div>
                                     
                                    </div>                               
                                <div className="col-12 mt-5">
                                    <button type="button" className="btn btn-dark text-white fw-bold " >
                                        Prestar Ambiente
                                    </button>
                                </div>
                    
                            </form>
                        </div>
                    </div>
                    
                    <Link to={'/home'} >
                        <button type="button" className="btn btn-outline-secondary m-2">
                           <svg xmlns="http://www.w3.org/2000/svg" width={'3vh'} height={'4vh'} ><path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path></svg>
                            <span class= "">Volver</span>
                        </button>
                    </Link>
                
                    <img id='logo-pocoyo' className='img-fluid rounded float-end' src="../../../images/logopequeño.png" alt="logoSena" />
                </div>
            </div>
        </div>
    )
}