import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login";
import Registro from "./components/auth/Registro";
import Proyectos from "./components/projects/Proyectos";
import ProyectoState from "./context/proyectos/proyectoState";
import TareaState from "./context/tareas/tareaState";


function App() {
  return (
    <ProyectoState>
      <TareaState>
        <Router>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/register" element={<Registro />} />
            <Route exact path="/proyectos" element={<Proyectos />} />
          </Routes>
        </Router>
      </TareaState>
    </ProyectoState>
  );
}

export default App;
