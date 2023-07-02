import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { IconContext } from 'react-icons';


function Navigation() {
    const [sidemenu, setSidemenu] = useState(false);
    const showSideMenu = () => setSidemenu(!sidemenu);

    const SideMenu = [
      {
          list: 'Dashboard',
          path: '/',
          class: 'menu'
      },
      {
          list: 'Property',
          path: '/property',
          class: 'menu'
      },
      {
          list: 'Profile',
          path: '/profile',
          class: 'menu'
      },
      {
          list: 'Transactions',
          path: '/transactions',
          class: 'menu'
      },
      {
          list: 'Logout',
          path: '/logout',
          class: 'menu'
      }
  
  ];

    return (
      
        <IconContext.Provider value={{ color: '#000' }}>
        <Navbar>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSideMenu} />
          </Link>
        </Navbar>
        <nav className={sidemenu ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-lists' onClick={showSideMenu}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SideMenu.map((lists, index) => {
              return (
                <li key={index} className={lists.class}>
                  <Link to={lists.path}>{lists.icon}
                  <span>{lists.list}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
       
    )
}
export default Navigation;
