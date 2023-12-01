import { CiUser } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import '../styles/Sidebar.css'

export default function SideBar(){
  return(
    
    <div>
      <div id="Sidebar" className="col-2 text-center text-white">
        <Sidebar backgroundColor="#000"> 
          <Link className='text-decoration-none text-dark ' to={"/estadoAmbientes"}>
            <h3 className='text-center m-3 text-white'>GESTIÓN SENA</h3>   
          </Link>
          <hr />   
          <Menu className=''
            menuItemStyles={{
              button: {
                // the active class will be added automatically by react router
                // so we can use it to style the active menu item
                [`&.active`]: {
                  backgroundColor: '#13395e',
                  color: "#000000",
                },
              },
            }}
          >
            <MenuItem component={<Link to="/prestamoAmbientes" />}>Préstamo de Ambientes</MenuItem>
            <MenuItem component={<Link to="/gestionAmbientes" />}>Gestión de Ambientes</MenuItem>
            <MenuItem component={<Link to="/estadoAmbientes" />}>Estado de Ambientes</MenuItem>
            <MenuItem component={<Link to="/estadoAmbientes" />}>Historial Ambientes Prestados</MenuItem>
          </Menu>
          <Link className="text-decoration-none text-white" to={'/estadoAmbientes'}>
            <h3><CiUser />Perfil </h3>
          </Link>
        </Sidebar>
      </div>

    </div>
  )
}
