import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Website from "./Pages/Website";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import Agents from "./Components/Agents";
import Users from "./Components/Users";
import Property from "./Components/Property";
import Revenue from "./Components/Revenue";
import Dashboard from "./Components/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import AgentRecord from "./Components/AgentRecord";
import UserRecord from "./Components/UserRecord";
import PropertyRecord from "./Components/PropertyRecord";
import Search from "./Components/search";
import AdProperty from "./Components/AdProperty";
import AddAgent from "./Components/AddAgents";
import AddUser from "./Components/AddUser";
import UpdateAgent from "./Components/UpdateAgent";
import Demo from "./Components/Demo";
import AdminHomepage from "./Pages/AdminHomepage";
import Profile from "./Pages/Settings/Profilesettings/Profilesettings";
import Changepass from "./Pages/Auth/Changepass/Changepassword";
import Homepage from "./Pages/Website/Userpage/Homepage/Homepage";
import Helppage from "./Pages/Website/Userpage/Helppage/Helppage";
import FindAgent from "./Pages/Website/Userpage/FindAgent/Agentfinder";
import AddProperty from "./agent/AddProperty";
import Prop from "./Pages/Website/proppage/propview";
import Cards from "./Pages/UserWishList/Cards";
import PropertyDetails from "./Pages/PropertyDescription/PropertyDetails";
import Profile_update from "./agent/Profile_update";
import AllAgent from "./agent/AllAgent";
import ViewAgent from "./agent/ViewAgent";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Website />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/AdminHomepage" element={<AdminHomepage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="Agents" element={<Agents />} />
          <Route path="Users" element={<Users />} />
          <Route path="Property" element={<Property />} />
          <Route path="Revenue" element={<Revenue />} />
          <Route path="AgentRecord" element={<AgentRecord />} />
          <Route path="UserRecord" element={<UserRecord />} />
          <Route path="PropertyRecord" element={<PropertyRecord />} />
          <Route path="search" element={<Search />} />
          <Route path="AdProperty" element={<AdProperty />} />
          <Route path="AddAgent" element={<AddAgent />} />
          <Route path="AddUser" element={<AddUser />} />
          <Route path="UpdateAgent" element={<UpdateAgent />} />
          <Route path="Demo" element={<Demo />} />
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
          <Route exact path='/agents/' element={<AllAgent/>}></Route>
          <Route exact path="/viewagent/:id" element={<ViewAgent/>} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
