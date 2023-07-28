import logo from "./logo.svg";
import "./App.css";
// import Navbar from "./Components/Navbar";
import Agents from "./components/Agents";
import Sidebar from "./Components/Sidebar";
import Users from "./components/Users";
import Property from "./components/Property";
import Revenue from "./components/Revenue";
// import Dashboard from "./Components/Dashboard";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import AgentRecord from "./components/AgentRecord";
import UserRecord from "./components/UserRecord";
import PropertyRecord from "./components/PropertyRecord";
import search from "./components/search";
import AddProperty from "./components/AddProperty";
import AddAgent from "./components/AddAgents";
import AddUser from "./components/AddUser";

function App() {
  return (
    <>
      <BrowserRouter>
        <Row>
          <Navbar />
        </Row>
        <Row>
          <Sidebar />
        </Row>
        <Routes>
          <Route exact path="/" element={<Dashboard />}></Route>
          <Route path="/Agents" Component={Agents}></Route>
          <Route path="/Users" Component={Users}></Route>
          <Route path="/Property" Component={Property}></Route>
          <Route path="/Revenue" Component={Revenue}></Route>
          <Route path="/AgentRecord" Component={AgentRecord}></Route>
          <Route path="/UserRecord" Component={UserRecord}></Route>
          <Route path="/PropertyRecord" Component={PropertyRecord}></Route>
          <Route path="/search" Component={search}></Route>
          <Route path="/AddProperty" Component={AddProperty}></Route>
          <Route path="/AddAgent" Component={AddAgent}></Route>
          <Route path="/AddUser" Component={AddUser}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
