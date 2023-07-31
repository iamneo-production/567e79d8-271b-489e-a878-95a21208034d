import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Website/Userpage/Homepage/Homepage";
import Helppage from "./Pages/Website/Userpage/Helppage/Helppage";
import Website from "./Pages/Website";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import PrivateRouter from "./PrivateRouter";
import Agents from "./Pages/Agent/Agents";
import AdminHomepage from "./Pages/AdminHomepage";
import Changepass from "./Pages/Auth/Changepass/Changepassword";
import AllAgent from "./Pages/Agent/agent/AllAgent";
import ViewAgent from "./Pages/Agent/agent/ViewAgent";
import Profilesettings from "./Pages/Settings/Profilesettings/Profilesettings";
import Cards from "./Pages/User/UserWishList/Cards";
import PropertyDetails from "./Pages/PropertyDescription/PropertyDetails";
import Prop from "./Pages/Website/proppage/propview";

import AddProperty from "./Pages/Agent/AddProperty";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Website />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-pwd" element={<Changepass />} />
          <Route path="/addProperty" element={<AddProperty />} />

          <Route element={<PrivateRouter element={{ role: "admin" }} />}>
            <Route path="/admin/*" element={<AdminHomepage />} />
          </Route>
          <Route element={<PrivateRouter element={{ role: "buyer" }} />}>
            <Route path="/buyer/*" element={<Homepage />} />
          </Route>
          <Route element={<PrivateRouter element={{ role: "agent" }} />}>
            <Route path="/agent/*" element={<Agents />} />
          </Route>
            <Route path="/homepage" element={<Homepage/>}/>
            <Route path="/helppage" element={<Helppage/>}/>
            <Route path="/agent" element={<AllAgent/>}/>
            <Route path="/settings" element={<Profilesettings/>}/>
            <Route path="/fav" element={<Cards/>}/>
            <Route exact path="/viewagent/:id" element={<ViewAgent/>} />
            <Route exact path="/propertyDescription" element={<PropertyDetails/>} />
            <Route exact path="/results" element={<Prop/>} />

        </Routes>        
      </BrowserRouter>
    </div>
  );
}

export default App;
