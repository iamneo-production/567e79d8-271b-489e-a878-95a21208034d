import React from 'react'
import Dashboard from '../Components/Dashboard'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import {Row} from 'react-bootstrap';
import './AdminHomepage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';

const AdminHomepage = () => {
  return (
    <>
    <Row>
    </Row>
    <Row>
    <Sidebar/>
    </Row>
    <Outlet/>
    </>
  )
}

export default AdminHomepage