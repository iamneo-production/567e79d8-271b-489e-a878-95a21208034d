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
            <Route path="/agent/*" element={<LayoutAgent />} />
          </Route>
          
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
