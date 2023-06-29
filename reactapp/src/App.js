import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Website from "./Pages/Website";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import Profile from "./Pages/Settings/Profilesettings";
import Changepass from "./Pages/Auth/Changepass/Changepassword";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Website />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Settings" element={<Profile />} />
          <Route path="/pwd" element={<Changepass />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
