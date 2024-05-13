var { Route, BrowserRouter, Routes } = require("react-router-dom");
var React = require("react");
var ReactDOM = require("react-dom");
var Login = require("./views/login");
var Navbar = require("./views/Navbar");
var Dashboard = require("./views/Dashboard");

function App() {
  return (
    <BrowserRouter>
      <div>
        <Login />
      </div>
      <div>
        <Dashboard />
        <Navbar />
      </div>
    </BrowserRouter>
  );
}

export default client;
