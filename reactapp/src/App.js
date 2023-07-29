import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Website from "./Pages/Website";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import PrivateRouter from "./PrivateRouter";
import AdminLogin from "./Components/AdminLogin";
import Agents from "./Pages/Agent/Agents";
import Users from "./Pages/User/Users";
import Property from "./Pages/Property/Property";
import Revenue from "./Components/Revenue";
import Dashboard from "./Components/Dashboard";
import AgentRecord from "./Pages/Agent/AgentRecord";
import UserRecord from "./Pages/User/UserRecord";
import PropertyRecord from "./Pages/Property/PropertyRecord";
import Search from "./Components/search";
import AdProperty from "./Pages/Property/AdProperty";
import AddAgent from "./Pages/Agent/AddAgents";
import AddUser from "./Pages/User/AddUser";
import UpdateAgent from "./Pages/Agent/UpdateAgent";
import Demo from "./Components/Demo";
import AdminHomepage from "./Pages/AdminHomepage";
import Profile from "./Pages/Settings/Profilesettings/Profilesettings";
import Changepass from "./Pages/Auth/Changepass/Changepassword";
import Homepage from "./Pages/Website/Userpage/Homepage/Homepage";
import Helppage from "./Pages/Website/Userpage/Helppage/Helppage";
import FindAgent from "./Pages/Website/Userpage/FindAgent/Agentfinder";
import AddProperty from "./Pages/Agent/agent/AddProperty";
import Prop from "./Pages/Website/proppage/propview";
import Cards from "./Pages/User/UserWishList/Cards";
import PropertyDetails from "./Pages/PropertyDescription/PropertyDetails";
import Profile_update from "./Pages/Agent/agent/Profile_update";
import AllAgent from "./Pages/Agent/agent/AllAgent";
import ViewAgent from "./Pages/Agent/agent/ViewAgent";
import UpdateProperty from "./Pages/Property/UpdateProperty";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Website />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<PrivateRouter element={{ role: "admin" }} />}>
            <Route path="/admin/*" element={<AdminHomepage />} />
          </Route>
          <Route element={<PrivateRouter element={{ role: "buyer" }} />}>
            <Route path="/buyer/*" element={<Users />} />
          </Route>
          <Route element={<PrivateRouter element={{ role: "agent" }} />}>
            <Route path="/agent/*" element={<Agents />} />
          </Route>
          {/* <Route path="/AdminHomepage" element={<AdminHomepage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/AdminLogin" element={<AdminLogin/>}/>
          <Route path="/updateagent/:id" element={<Profile_update />} />
          <Route path="/Settings" element={<Profile />} />
          <Route path="/forgot-pwd" element={<Changepass />} />
          <Route path="/user" element={<Homepage />} />
          <Route path="/help" element={<Helppage />} />
          <Route path="/agent" element={<FindAgent />} />
          <Route path="/AddProperty" element={<AddProperty />} />
          <Route path="/results" element={<Prop />} />
          <Route path="/userwishlist" element={<Cards />} />
          <Route path="/propertydescription" element={<PropertyDetails />} />
          <Route exact path="/agents/" element={<AllAgent />}/>
          <Route exact path="/viewagent/:id" element={<ViewAgent />} />
          <Route path="/AdminHomepage" element={<AdminHomepage />} />
          <Route path="" element={<Dashboard />} />
          <Route path="Agents" element={<Agents />} />
          <Route path="Users" element={<Users />} />
          <Route path="Property" element={<Property />} />
          <Route path="Revenue" element={<Revenue />} />
          <Route path="AgentRecord" element={<AgentRecord />} />
          <Route path="UserRecord" element={<UserRecord />} />
          <Route path="PropertyRecord" element={<PropertyRecord />} />
          <Route path="UpdateProperty" element={<UpdateProperty />} />
          <Route path="search" element={<Search />} />
          <Route path="AdProperty" element={<AdProperty />} />
          <Route path="AddAgent" element={<AddAgent />} />
          <Route path="AddUser" element={<AddUser />} />
          <Route path="UpdateAgent" element={<UpdateAgent />} />
          <Route path="Demo" element={<Demo />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
