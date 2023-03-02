import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login";
import Registro from "./components/auth/Registro";
import Proyectos from "./components/projects/Proyectos";
import ProyectoState from "./context/proyectos/proyectoState";

function App() {
  return (
    <ProyectoState>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Registro />} />
          <Route exact path="/proyectos" element={<Proyectos />} />
        </Routes>
      </Router>
    </ProyectoState>
  );
}

export default App;
