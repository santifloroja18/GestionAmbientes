import { Link } from "react-router-dom"
import '../styles/NavBar.css'

export default function NavBar(){
    return(
        <div id="navbar" className="m-4">
            <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link to={'/prestamoAmbientes'} className="text-decoration-none">
                        <a className="nav-link" >Prestamo de Ambientes</a>
                    </Link>
                    </li>

                    <li className="nav-item">
                    <Link to={'/gestionAmbientes'} className="text-decoration-none">
                        <a className="nav-link" >Gestión de Ambientes</a>
                    </Link>
                    </li>

                    <li className="nav-item ">
                    <Link to={'/home'} className="text-decoration-none">
                        <a className="nav-link active text-end" aria-current="page">Richard Alexander Betancur</a>
                    </Link>
                    </li>

                </ul>
                </div>
            </div>
            </nav>
        </div>
    )
}