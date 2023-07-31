import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Website from "./Pages/Website";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import PrivateRouter from "./PrivateRouter";
import Agents from "./Pages/Agent/Agents";
import LayoutAgent from "./Pages/Agent/Navigation/LayoutAgent";
import AdminHomepage from "./Pages/AdminHomepage";
import Homepage from "./Pages/Website/Userpage/Homepage/Homepage";
import Changepass from "./Pages/Auth/Changepass/Changepassword";
import Transactions from "./Pages/Agent/Contents/Transactions";
import AgentDashboard from "./Pages/Agent/Contents/AgentDashboard"
import Profile_Update from "./pages/Agent/agent/Profile_update";
import AddProperty from "./Pages/Agent/agent/AddProperty";
import Prop from "./Pages/Website/proppage/propview";
import Cards from "./Pages/User/UserWishList/Cards";
import PropertyDetails from "./Pages/PropertyDescription/PropertyDetails";
import AllAgent from "./Pages/Agent/agent/AllAgent";
import ViewAgent from "./Pages/Agent/agent/ViewAgent";
import UpdateProperty from "./Pages/Property/UpdateProperty";
import Dashboard from "./Components/Dashboard";
import Users from "./Pages/User/Users";
import Property from "./Pages/Property/Property";
import Revenue from "./Components/Revenue";
import AddAgent from "./Pages/Agent/AddAgents";
import UpdateAgent from "./Pages/Agent/UpdateAgent";
import AddUser from "./Pages/User/AddUser";
import AdProperty from "./Pages/Property/AdProperty";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Website />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-pwd" element={<Changepass />} />
          <Route path="property" element={<AddProperty />} />
          <Route path="profile" element={<Profile_Update />} />
          <Route path="dashboard" element={<AgentDashboard />} />
          <Route path="transactions" element={<Transactions />} />
         

          <Route path="/AdminHomepage" element={<AdminHomepage/>}>
          <Route path=""  element={<Dashboard/>}/>
          <Route path="Agents" element={<Agents/>}/>
          <Route path="Users" element={<Users/>}/>
          <Route path="Property" element={<Property/>}/>
          <Route path="Revenue" element={<Revenue/>}/>
          <Route path="AddAgent" element={<AddAgent/>}/>
          <Route path="UpdateAgent" element={<UpdateAgent/>}/>
          <Route path="AddUser" element={<AddUser/>}/>
          <Route path="AddProperty" element={<AdProperty/>}/>
          <Route path="UpdateProperty" element={<UpdateProperty/>}/>
          </Route>
          <Route element={<PrivateRouter element={{ role: "buyer" }} />}>
            <Route path="/buyer/*" element={<Homepage />} />
          </Route>
          <Route element={<PrivateRouter element={{ role: "agent" }} />}>
            <Route path="/agent/*" element={<LayoutAgent />} />
          </Route>
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
