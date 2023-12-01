import SideBar from "../components/Sidebar";

import '../styles/EstadoAmbientes.css';

export default function EstadoAmbientes(){
    return(
        <div id="EstadoAmbientes">
            <SideBar />
            <div className="container"  >
                <div className="row justify-content-center " >
                    <div className="col-10">
                    <h1 className="text-center m-4">ESTADO DE LOS AMBIENTES</h1>
                    
                        <table className="table table-bordered">
                            <thead className="table-dark">
                                <tr>
                                    <th>Ambiente</th>
                                    <th>Instructor</th>
                                    <th>Fecha y hora de llegada</th>
                                    <th>Fecha y hora de entrega</th>
                                </tr>
                            </thead>
                    <tbody>
                        <tr>
                            <td>501</td>
                            <td>Edward Lopera</td>
                            <td>22/11/2023 6:00am</td>
                            <td>22/11/2023 12:00pm</td>
                        </tr>
                        <tr>
                            <td>502</td>
                            <td>Richard Betancur</td>
                            <td>25/11/2023 8:00am</td>
                            <td>25/11/2023 12:00pm</td>
                        </tr>
                        <tr>
                            <td>503</td>
                            <td>Adelaida Cano</td>
                            <td>27/11/2023 6:00am</td>
                            <td>27/11/2023 11:30am</td>
                        </tr>
                        <tr>
                            <td>504</td>
                            <td>Jose Hoover</td>
                            <td>30/11/2023 7:00am</td>
                            <td>30/11/2023 11:00am</td>
                        </tr>
                    </tbody>
                        </table>

                    </div>

                </div>

            </div>
            
        </div>
    )
}