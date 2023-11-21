import { Link } from "react-router-dom"

export default function NavBar(){
    return(
        <div className="bg-white">
            <nav className="navbar navbar-expand-lg bg-dark rounded-4 m-4 text-white" data-bs-theme="dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link to={'/prestamoAmbientes'} className="text-decoration-none">
                        <h7 className="nav-link text-white" >Prestamo de Ambientes</h7>
                    </Link>
                    </li>

                    <li className="nav-item">
                    <Link to={'/gestionAmbientes'} className="text-decoration-none">
                        <h7 className="nav-link text-white" >Gestión de Ambientes</h7>
                    </Link>
                    </li>

                    <li className="nav-item">
                    <Link to={'/ambientesPrestados'} className="text-decoration-none">
                        <h7 className="nav-link text-white" >Ambientes Prestados</h7>
                    </Link>
                    </li>
                    
                </ul>
                </div>
                <Link to={'/home'} className="text-decoration-none text-white">
                    <h7 className="nav-link active " aria-current="page">Richard Alexander Betancur</h7>
                </Link>
                <Link to={'/home'} className="text-decoration-none">
                    <img src="../../../images/usuario.png" alt="fotoUsuario" className="rounded"/>
                </Link>
            </div>
            </nav>
        </div>
    )
}