import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Style.css';
import { IconContext } from 'react-icons';


function Navigation() {
  const [sidemenu, setSidemenu] = useState(false);
  
  const showSidemenu = () => setSidemenu(!sidemenu);

  const SidemenuData = [
    {
      title: 'Dashboard',
      path: '/',
      clsName: 'nav-text'
    },
    {
      title: 'Property',
      path: '/property',
      clsName: 'nav-text'
    },
    {
      title: 'Profile',
      path: '/profile',
      clsName: 'nav-text'
    },
    {
      title: 'Transactions',
      path: '/transaction',
      clsName: 'nav-text'
    },
    {
      title: 'Logout',
      path: '/logout',
      clsName: 'nav-text'
    }
  ];

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidemenu} />
          </Link>
        </div>
        <nav className={sidemenu ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidemenu}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidemenuData.map((item, index) => {
              return (
                <li key={index} className={item.clsName}>
                  <Link to={item.path}>
            
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}
export default Navigation;
