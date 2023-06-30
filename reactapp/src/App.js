import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Website from "./Pages/Website";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import Homepage from "./Pages/Website/Userpage/Homepage/Homepage";
import Helppage from "./Pages/Website/Userpage/Helppage/Helppage";
import FindAgent from "./Pages/Website/Userpage/FindAgent/Agentfinder";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Website />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/homepage" element={<Homepage/>} />
          <Route path="/help" element={<Helppage/>} />
          <Route path="/agent" element={<FindAgent/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
