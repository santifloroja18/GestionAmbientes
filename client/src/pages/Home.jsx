import { Link } from "react-router-dom";
import NavBar from "../components/Navbar";
import '../styles/Home.css';

export default function Home(){
    return(
        <div id="Home" className="bg-white">
            <NavBar/>
            <div className="container">
                <div className="row d-flex justify-content-center m-2">
                    <div id="cuadroBienvenida" className="col-4 bg-secondary rounded-4">
                        <p className="h1 m-5 text-white text-bold">TE DAMOS LA BIENVENIDA <br /> RICHARD</p>
                        <Link to={'/prestamoAmbientes'} className="text-decoration-none">
                            <button type="button" className="btn btn-dark d-grid mx-auto">Préstamo de Ambientes</button>
                        </Link>
                    </div>
                    <div className="col-8">
                        <div class="alert alert-danger rounded-4" role="alert">
                        <p className="h2 text-white text-bold">¡Usuario tardío, entregar llaves!</p>
                        <p className="text-white text-bold">Richard Alexander Betancur <br />rbetancur@misena.edu.co <br />3238071035</p>
                        </div>
                        <img src="../../../images/imagenHome.png" alt="imagenHome" id="imagenHome"/>
                    </div>

                </div>
            </div>
        </div>
    )
}