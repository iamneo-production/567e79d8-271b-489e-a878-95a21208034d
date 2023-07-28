import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {Navbar} from 'react-bootstrap';
import './Style.css';
import { IconContext } from 'react-icons';
import { Link, Route, Routes } from 'react-router-dom';
import Profile_update from 'reactapp/src/Components/Pages/Agent/agent/Profile_update.js';
import AddProperty from 'reactapp/src/Components/Pages/Agent/agent/AddProperty.js';
import Transactions from 'reactapp/src/Pages/Contents/Transaction.jsx';
import Dashboard from 'reactapp/src/Pages/Contents/Dashboard.jsx';

export default function LayoutAgent() {
    const [sidemenu, setSidemenu] = useState(false);
    const showSideMenu = () => setSidemenu(!sidemenu);

    const SideMenu = [
      {
          list: 'Dashboard',
          path: '/dashboard',
          class: 'menu'
      },
      {
          list: 'Property',
          path: '/addproperty',
          class: 'menu'
      },
      {
          list: 'Profile',
          path: '/profile_update',
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

        <Routes>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/transactions">
          <Transactions />
        </Route>
        <Route path="/property">
          <AddProperty />
        </Route>
        <Route path="/profile">
          <Profile_update />
        </Route>
        
      </Routes>
      </IconContext.Provider>
       
    )
}
