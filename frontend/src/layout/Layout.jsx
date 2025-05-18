import { Outlet, NavLink } from 'react-router-dom';
import './layout.css';

const Layout = () => {
  return (
    <div className='layout-root'>
      <div className='layout-menu'>
        <h2>Trabajo Práctico Integrador</h2>
        <nav>
          <ul>
            <li>
              <NavLink 
                to={'/'} 
                className={({ isActive }) => (isActive ? 'menu-selected' : '')}
              >
                <div className="nav-link-container">Página Principal</div>
              </NavLink>
            </li>
            <li>
              <NavLink 
                to={'/liststudents'} 
                className={({ isActive }) => (isActive ? 'menu-selected' : '')}
              >
                <div className="nav-link-container">Alumnos</div>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className='layout-main-content'>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;