import NavBar from "../components/Navbar";
import '../styles/AmbientesPrestados.css';

export default function AmbientesPrestados(){
    return(
        <div>
            <NavBar/>
            <h1 className="text-center m-4">AMBIENTES PRESTADOS</h1>
            <div className="container justify-content-center ">
                <table className="table table-responsive table-hover table-dark text-center">
                <thead>
                    <tr>    
                    <th className="p-3 bg-dark text-white me-2">Ambiente</th>
                    <th className="p-3 bg-dark text-white">Instructor</th>
                    <th className="p-3 bg-dark text-white" scope="col">Fecha y Hora</th>
                    </tr>
                </thead>
                <tbody>

                    <br />

                    <tr>
                    <td className="p-3 bg-dark text-white">501</td>
                    <td className="p-3 bg-dark text-white">Edward Lopera</td>
                    <td className="p-3 bg-dark text-white">20/11/2023 6:00am</td>
                    </tr>
                    
                    <br />
                    
                    <tr>
                    <td className="p-3 bg-dark text-white">502</td>
                    <td className="p-3 bg-dark text-white">Richard Betancur</td>
                    <td className="p-3 bg-dark text-white">24/11/2023 8:00am</td>
                    </tr>
                                        
                    <br />
                    
                    <tr>
                    <td className="p-3 bg-dark text-white">503</td>
                    <td className="p-3 bg-dark text-white">Adelaida Cano</td>
                    <td className="p-3 bg-dark text-white">27/11/2023 7:00am</td>
                    </tr>
                                        
                    <br />
                    
                    <tr>
                    <td className="p-3 bg-dark text-white">504</td>
                    <td className="p-3 bg-dark text-white">Jose Hoover</td>
                    <td className="p-3 bg-dark text-white">30/11/2023 8:00am</td>
                    </tr>
                                        
                    <br />
                    
                </tbody>
                </table>

            </div>
        </div>
    )
}