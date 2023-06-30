import React, { useState } from 'react'
import * as IoIcons from 'react-icons/io';
import * as FaIcons from 'react-icons/fa'
import {Link} from 'react-router-dom';
import {SidebarData} from './SidebarData';
import './Sidebar.css';
import Container from 'react-bootstrap/esm/Container';


const Sidebar = () => {
const[bar,setBar]=useState(false);
const showBar =()=> setBar(!bar);
  return (
<Container style={{paddingTop:"50px",paddingLeft:"20px"}}>
<div className="sidebar" style={{paddingTop:"40px"}}>
  <Link to="#" className='menu-bar'>
    <FaIcons.FaBars className=" fa fa-solid fa-bars fa-2x" onClick={showBar}/
    >
  </Link>
  <nav className={bar?'menu active' : 'menu'}>
    <ul className='nav-menu-items' onClick={showBar}>
      <li className='navbar-toggle'>
        <Link to='#' className='menu-bar'>
          <IoIcons.IoIosClose/>
        </Link>
      </li>
      <li style={{color:"white",listStyle:"none",fontSize:"20px",paddingLeft:"10px"}}>Admin Name</li>
      {SidebarData.map((item,index) =>{
        return(
          <li key={index} className={item.cName}>
            <Link to={item.path}>
              {item.icons}
              <span>{item.title}</span>
            </Link>
          </li>
        )
      })}
    </ul>
  </nav>
</div>
</Container>
  )
}

export default Sidebar