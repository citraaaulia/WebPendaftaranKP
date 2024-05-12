import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "./components/login";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";

function App() {
  return (
  <BrowserRouter>
    <div>
        <Login/>
    </div>
    <div>
        <Dashboard/>
        <Navbar/>
    </div>
  </BrowserRouter>

  );
}

export default App;
