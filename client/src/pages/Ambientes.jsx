import SideBar from "../components/Sidebar"; 
import React, {useEffect, useState} from 'react';
import { useParams, Link } from "react-router-dom"; 
import axios from "axios";
import '../styles/Ambientes.css';
import { MdEdit, MdDelete } from "react-icons/md";


export default function Ambientes(){

    const [ambientes, setAmbientes]=useState([]);
    const [stockambientes, setStockambientes]=useState([]);
    const {id} = useParams();

//  NOTA: Call ambientes from dataBase   

        const GetAmbientes = async()=>{
            try {
                const res = await axios.get('http://localhost:8000/api/rooms')
                setAmbientes(res.data);
                console.log(res);
            } catch (error) {
                console.log(error.response)
            }
        }

        const GetStockAmbientes = async()=>{
            const params = {headers:{'Content-Type':'application/json'},params:{'id':id}} 
            const res = await axios.get('http://localhost:8000/api/room_stock/'+id, params);
            console.log(res.data);
        
        }


        useEffect(()=>{
            GetAmbientes();
            GetStockAmbientes();
    },[id]);

            const handleDeleteAmbiente = async (id) =>{
                
                await axios.delete('http://localhost:8000/api/room-delete/'+id);
                alert('¿ Esta seguro de Eliminar este ambiente de la base de datos ?')
                window.location.replace('/ambientes')
            
        }     

    return(
        <div id="EstadoAmbientes">
            <SideBar />
            <div className="container"  >
                <div className="row justify-content-center " >
                    <div className="col-10">
                    <h1 className="text-center m-4"> AMBIENTES</h1>
                    <Link to={'/crearAmbientes'} >
                        <button type="button" className="btn btn-outline-secondary m-2">Agregar Ambiente</button>
                    </Link>
                        <table className="table table-bordered">
                            <thead className="table-dark">
                                <tr>
                                    <th>Piso</th>
                                    <th>Número de ambiente</th>
                                    <th>Estado</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                    
                    
{/* NOTA: ambientes list on a table */}                
                    {ambientes.map((ambiente) => (
                    
                    <tbody>
                
                    <tr  key={ambiente.id} className=''>
                    <td className=''>{ambiente.level_floor}</td>
                    <td className=''>{ambiente.room_number}</td>
                    <td className=''>{ambiente.state}</td>
                    <td className=""><Link style={{color: "black"}} to={'/editarAmbiente/'+ambiente.id}><MdEdit /></Link><tr></tr><Link onClick={()=>handleDeleteAmbiente(ambiente.id)} id='EliminarProducto' style={{color: "black"}} to={'/ambientes'}><MdDelete /></Link><tr></tr>
                    
                    <div className="col-11 mt-4">
                                        <div id='camposForm' className='mb-3'>
                                            <label htmlFor="" className='form-label fw-bold'></label>
                                            <button type="button" className="btn btn-dark text-white fw-bold" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            Ver Stock
                                            </button>


                                            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                <div className="modal-header">
                                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Seleccionar Elementos y Cantidad:</h1>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    <div className="row">
                                                        <div class="col-6 form-check">
                                                        <label class="form-check-label" for="flexCheckDefault">
                                                            Cantidad de Sillas
                                                        </label>
                                                        <input name="chair_quantity" class="form-input" type="number" id="flexCheckDefault"/>
                                                        
                                                        </div>
                                                        <div class="col-6  form-check">
                                                        <label class="form-check-label" for="flexCheckDefault">
                                                            Cantidad de Escritorios
                                                        </label>
                                                        <input class="form-input" type="number" value="" id="flexCheckDefault"/>
                                                        
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="row">
                                                        <div class="col-6 form-check">
                                                        <label class="form-check-label" for="flexCheckDefault">
                                                            Cantidad de Mesas
                                                        </label>
                                                        <input class="form-input" type="number" value="" id="flexCheckDefault"/>
                                                        
                                                        </div>
                                                        <div class="col-6  form-check">
                                                        <label class="form-check-label" for="flexCheckDefault">
                                                            Cantidad de Pantallas
                                                        </label>
                                                        <input class="form-input" type="number" value="" id="flexCheckDefault"/>
                                                        
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div class="col-6 form-check">
                                                        <label class="form-check-label" for="flexCheckDefault">
                                                            Aire Acondicionado
                                                        </label>
                                                        <input class="form-input" type="number" value="" id="flexCheckDefault"/>
                                                        
                                                        </div>
                                                        <div class="col-6  form-check">
                                                        <label class="form-check-label" for="flexCheckDefault">
                                                            Cantidad de Portátiles
                                                        </label>
                                                        <input class="form-input" type="number" value="" id="flexCheckDefault"/>
                                                        
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div class="col-6 form-check">
                                                        <label class="form-check-label" for="flexCheckDefault">
                                                            Cantidad de Computadores
                                                        </label>
                                                        <input class="form-input" type="number" value="" id="flexCheckDefault"/>
                                                        
                                                        </div>
                                                        <div class="col-6  form-check">
                                                        <label class="form-check-label" for="flexCheckDefault">
                                                            Cantidad de VideoBeam
                                                        </label>
                                                        <input class="form-input" type="number" value="" id="flexCheckDefault"/>
                                                        
                                                        </div>
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
                    
                    </td>
                    {/* <Link style={{color: "black", styleText: "none"}} to={'/client/src/hooks/ModalStock'+ambiente.id}>Ver Stock</Link></td> */}
                    </tr>
                    
                        
                    </tbody>
                    ))}
                        </table> 

                    </div>

                </div>

            </div>
            
        </div>
    )
}