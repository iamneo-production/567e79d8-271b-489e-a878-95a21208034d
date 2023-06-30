import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Website from "./Pages/Website";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import Agents from "./Components/Agents";
import Users from "./Components/Users";
import Property from './Components/Property';
import Revenue from './Components/Revenue'
import Dashboard from "./Components/Dashboard";
import 'bootstrap/dist/css/bootstrap.min.css';
import AgentRecord from './Components/AgentRecord';
import UserRecord from './Components/UserRecord';
import PropertyRecord from './Components/PropertyRecord'
import search from './Components/search';
import AddProperty from './Components/AddProperty';
import AddAgent from './Components/AddAgents';
import AddUser from './Components/AddUser';
import UpdateAgent from './Components/UpdateAgent';
import Demo from './Components/Demo';
import AdminHomepage from "./Pages/AdminHomepage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Website />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/AdminHomepage" element={<AdminHomepage/>}>
          <Route index element={<Dashboard/>}></Route>
          <Route path='Agents' element={<Agents/>}/>
          <Route path='Users' Component={Users}></Route>
          <Route path='Property' Component={Property}></Route>
          <Route path='Revenue' Component={Revenue}></Route>
          <Route path='AgentRecord' Component={AgentRecord}></Route>
          <Route path='UserRecord' Component={UserRecord}></Route>
          <Route path='PropertyRecord' Component={PropertyRecord}></Route>
          <Route path='search' Component={search}></Route>
          <Route path='AddProperty' Component={AddProperty}></Route>
          <Route path='AddAgent' Component={AddAgent}></Route>
          <Route path='AddUser' Component={AddUser}></Route>
          <Route path='UpdateAgent' Component={UpdateAgent}></Route>
          <Route path='Demo' Component={Demo}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
