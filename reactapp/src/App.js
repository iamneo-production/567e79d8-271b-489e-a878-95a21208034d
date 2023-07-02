import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Website from "./Pages/Website";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import AddProperty from "./agent/AddProperty";
import Prop from "./Pages/Website/proppage/propview";
import Cards from "./Pages/UserWishList/Cards";
import PropertyDetails from "./Pages/PropertyDescription/PropertyDetails";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Website />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/AddProperty"element={<AddProperty/>} />
          <Route path="/prop" element={<Prop />} />
          <Route path="/userwishlist" element={<Cards />} />
          <Route path="/propertydescription" element={<PropertyDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
