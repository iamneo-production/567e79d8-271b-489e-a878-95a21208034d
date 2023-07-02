import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Website from "./Pages/Website";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
<<<<<<< HEAD
import Profile from "./Pages/Settings/Profilesettings";
import Changepass from "./Pages/Auth/Changepass/Changepassword";
=======
import Homepage from "./Pages/Website/Userpage/Homepage/Homepage";
import Helppage from "./Pages/Website/Userpage/Helppage/Helppage";
import FindAgent from "./Pages/Website/Userpage/FindAgent/Agentfinder";
import AddProperty from "./agent/AddProperty";
import Prop from "./Pages/Website/proppage/propview";
import Cards from "./Pages/UserWishList/Cards";
import PropertyDetails from "./Pages/PropertyDescription/PropertyDetails";
>>>>>>> main

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Website />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
<<<<<<< HEAD
          <Route path="/Settings" element={<Profile />} />
          <Route path="/pwd" element={<Changepass />} />

=======
          <Route path="/homepage" element={<Homepage/>} />
          <Route path="/help" element={<Helppage/>} />
          <Route path="/agent" element={<FindAgent/>} />
          <Route path="/AddProperty"element={<AddProperty/>} />
          <Route path="/prop" element={<Prop />} />
          <Route path="/userwishlist" element={<Cards />} />
          <Route path="/propertydescription" element={<PropertyDetails />} />
>>>>>>> main
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
