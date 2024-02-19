import '../styles/PrestamoAmbientes.css'
import React, {useState, useEffect} from 'react';
import { useNavigate,useParams, Link } from 'react-router-dom';
import axios from "axios";

export default function CrearAmbiente(){

    const [room_number, setRoom_number] = useState('');
    const [level_floor, setLevel_floor] = useState('');
    const [state, setState] = useState('');
    const {id} = useParams();
  
    const Navegate = useNavigate();
  
    useEffect( ()=>{
        const GetAmbiente = async()=>{
        const params = {headers:{'Content-Type':'application/json'},params:{'id':id}} 
        const res = await axios.get('http://localhost:8000/api/room/'+id, params);
        console.log(res.data);
        setLevel_floor(res.data.data.level_floor);
        setRoom_number(res.data.data.room_number);
        setState(res.data.data.state);
      };
      GetAmbiente();
  },[id]);
  
    const updateAmbiente = async(e)=>{
     e.preventDefault();
     await axios.put('http://localhost:8000/api/room-update/'+id, { id:id, room_number:room_number, level_floor:level_floor, state:state });
     Navegate('/ambientes');
    }
    return(
        <div id='Prestamo_ambientes'>
            <div className='row cuadradoprestamo my-5'>

                <div id='form' className='col-12' >
                    <div className='row justify-content-center mb-4 mt-3'>
                        <div  className=' col-11'><h4 id='tituloPrestamo' className='text-center'>Agregar Nuevo Ambiente</h4></div>
                    </div>
                    
                    <div id='formPrestamo' className='row justify-content-center'>
                        <div className='col-11'>
                            <form onSubmit={updateAmbiente} action="" method="post">
                                    
                                    <div class="form-floating">
                                        <select value={level_floor} onChange={(e)=>setLevel_floor(e.target.value)} name="level_floor" class="form-select" id="floatingSelect" aria-label="Floating label select example">
                                            <option selected  >Seleccionar Piso</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                        </select>
                                        <label for="floatingSelect">Piso</label>
                                    </div>
                              
                                    <div className="col-12">
                                    <div class="mb-3">
                                        <label for="formFileMultiple" class="form-label">Número de Ambiente</label>
                                        <input value={room_number} onChange={(e)=>setRoom_number(e.target.value)} class="form-control" type="number" id="formFileMultiple" name="room_number" multiple  />
                                        </div>
                                    </div>

                                    <div class="form-floating mt-4">
                                        <select value={state} onChange={(e)=>setState(e.target.value)} name="state" class="form-select" id="floatingSelect" aria-label="Floating label select example">
                                        <option selected >Seleccione la Disponibilidad:</option>
                                            <option value="1">1</option>
                                            <option value="2">0</option>
                                        </select>
                                        <label for="floatingSelect">Disponibilidad</label>
                                    </div>                           
                                <div className="col-12 mt-5">
                                    <button onClick={updateAmbiente} type="button" className="btn btn-dark text-white fw-bold " >
                                        Actualizar Ambiente
                                    </button>
                                </div>
                    
                            </form>
                        </div>
                    </div>
                    
                    <Link to={'/ambientes'} >
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