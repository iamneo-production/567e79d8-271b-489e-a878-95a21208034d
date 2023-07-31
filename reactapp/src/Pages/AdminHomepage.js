import React from 'react'
import Dashboard from '../Components/Dashboard'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import {Row} from 'react-bootstrap';
import './AdminHomepage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet, Route } from 'react-router-dom';
import Agents from './Agent/Agents';
import Users from './User/Users';
import Property from './Property/Property';
import Revenue from '../Components/Revenue';
import AgentRecord from './Agent/AgentRecord';
import UserRecord from './User/UserRecord';
import PropertyRecord from './Property/PropertyRecord';
import UpdateProperty from './Property/UpdateProperty';
import AdProperty from './Property/AdProperty';
import AddAgent from './Agent/AddAgents';
import AddUser from './User/AddUser';
import UpdateAgent from './Agent/UpdateAgent';
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