// STYLE IMPORT
import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// LIBRARY IMPORT
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGE IMPORT
import Login from "./pages/Login";
import Register from "./pages/Register";
import Validate from "./pages/Validate";
import MainLayout from "./pages/MainLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/validate" element={<Validate />}></Route>
        <Route path="/dashboard" element={<MainLayout />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
