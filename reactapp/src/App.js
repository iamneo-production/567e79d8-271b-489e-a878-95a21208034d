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
          <Route path="/forgot-pwd" element={<Changepass />} />
          <Route path="property" element={<AddProperty />} />
          <Route path="profile" element={<Profile_Update />} />
          <Route path="dashboard" element={<AgentDashboard />} />
          <Route path="transactions" element={<Transactions />} />
         

          <Route element={<PrivateRouter element={{ role: "admin" }} />}>
            <Route path="/admin/*" element={<AdminHomepage />} />
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
