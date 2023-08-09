import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" exact Component={Login}></Route>
        <Route path="/register" exact Component={Register}></Route>
        <Route path="/main" exact Component={Dashboard}></Route>
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
