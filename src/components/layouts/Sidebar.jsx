import ListadoProyectos from "../projects/ListadoProyectos";
import NuevoProyecto from "../projects/NuevoProyecto";

const Sidebar = () => {
  return (
    <aside>
      <h1>
        MERN<span>Task</span>
      </h1>
      <NuevoProyecto />
      <div className="proyectos">
        <h2>Tus Proyectos</h2>
        <ListadoProyectos/>
      </div>
    </aside>
  );
};

export default Sidebar;
