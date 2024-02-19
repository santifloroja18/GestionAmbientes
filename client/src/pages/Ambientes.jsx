import SideBar from "../components/Sidebar"; 
import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom"; 
import axios from "axios";
import '../styles/Ambientes.css';
import { MdEdit, MdDelete } from "react-icons/md";

export default function Ambientes(){

    const [ambientes, setAmbientes]=useState([]);

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

        useEffect(()=>{
            GetAmbientes();
    },[]);

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
                    <Link style={{color: "black", styleText: "none"}} to={'/inventarioAmbiente/'+ambiente.id}>Ver Stock</Link></td>
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