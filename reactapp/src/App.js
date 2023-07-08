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
import AdProperty from './Components/AdProperty';
import AddAgent from './Components/AddAgents';
import AddUser from './Components/AddUser';
import UpdateAgent from './Components/UpdateAgent';
import Demo from './Components/Demo';
import AdminHomepage from "./Pages/AdminHomepage";
import Profile from "./Pages/Settings/Profilesettings";
import Changepass from "./Pages/Auth/Changepass/Changepassword";
import Homepage from "./Pages/Website/Userpage/Homepage/Homepage";
import Helppage from "./Pages/Website/Userpage/Helppage/Helppage";
import FindAgent from "./Pages/Website/Userpage/FindAgent/Agentfinder";
import AddProperty from "./agent/AddProperty";
import Prop from "./Pages/Website/proppage/propview";
import Cards from "./Pages/UserWishList/Cards";
import PropertyDetails from "./Pages/PropertyDescription/PropertyDetails";
import Profile_update from "./agent/Profile_update";

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
          <Route path='AdProperty' Component={AdProperty}></Route>
          <Route path='AddAgent' Component={AddAgent}></Route>
          <Route path='AddUser' Component={AddUser}></Route>
          <Route path='UpdateAgent' Component={UpdateAgent}></Route>
          <Route path='Demo' Component={Demo}></Route>
          </Route>
          <Route path="/Profile_update" element={<Profile_update />} />
          <Route path="/Settings" element={<Profile />} />
          <Route path="/pwd" element={<Changepass />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/help" element={<Helppage />} />
          <Route path="/agent" element={<FindAgent />} />
          <Route path="/AddProperty" element={<AddProperty />} />
          <Route path="/prop" element={<Prop />} />
          <Route path="/userwishlist" element={<Cards />} />
          <Route path="/propertydescription" element={<PropertyDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
