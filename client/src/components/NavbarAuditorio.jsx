import { Link } from "react-router-dom"

export default function NavBar(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link to={'/'} className="text-decoration-none">
                    
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link to={'/'} className="text-decoration-none">
                        <h7 className="nav-link" >Inducciones</h7>
                    </Link>
                    </li>

                    <li className="nav-item">
                    <Link to={'/'} className="text-decoration-none">
                        <h7 className="nav-link" >Eventos</h7>
                    </Link>
                    </li>

                    <li className="nav-item">
                    <Link to={'/'} className="text-decoration-none">
                        <h7 className="nav-link" >Ceremonias de Graduación</h7>
                    </Link>
                    </li>

                </ul>
                </div>
            </div>
            </nav>
        </div>
    )
}