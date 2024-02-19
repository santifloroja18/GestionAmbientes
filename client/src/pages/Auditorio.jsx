import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavbarAuditorio";
import '../styles/Auditorio.css';

export default function Auditorio(){
    return(
        <div id="Auditorio" className="bg-white">

            <Sidebar/>
            <NavBar/>

                <div className="">
                    <div className="banner">
                        <img src="../../../images/portada5.jpeg" alt="portada5"/>
                    </div>
                    <div className="esquina-derecha">
                      <img id='logo-pocoyo'src="../../../images/logopequeño.png" alt="logoSena" />
                    </div>

                     <div className="contenedor-izquierdo">

                     <div className="cuadro mt-3">
                     
                     <h1>Servicios incluidos</h1>
                     <li>Sillas</li>            <li>Microfonos</li>
                     <li>Mesas</li>             <li>Ventanas</li>
                     <li>Televisor</li>         <li>Puertas</li>
                     <li>Control</li>
                     <li>Equipos de sonido</li>
                     </div>

                     <div className="cuadro mt-3">
                     <div class="form-floating mt-1">
                                        <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                                        <option selected>Servicios Adicionales:</option>
                                            <option value="1">*</option>
                                            <option value="2">*</option>
                                            <option value="4">*</option>
                                            <option value="3">*</option>
                                            <option value="5">*</option>
                                        </select>
                                    </div>
                       <p className="Parrafo">Los servicios adicionales pueden ser prestados por el Administrador con tu reserva. 
                        Solicita directamente al Administrador los que requieras.</p>
                     </div>
                     
                     <div className="cuadro mt-4">
                     <div class="form-floating mt-1">
                                        <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                                        <option selected>Acomodación:</option>
                                            <option value="1">*</option>
                                            <option value="2">*</option>
                                            <option value="4">*</option>
                                            <option value="3">*</option>
                                            <option value="5">*</option>
                                        </select>
                                    </div>
                       <p className="Parrafo">A continuación encontrarás la capacidad máxima según el tipo de acomodación del espacio</p>
                     </div>

                   </div>
                </div>
        </div>

    )
}