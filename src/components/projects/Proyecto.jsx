import { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";

const Proyecto = ({proyecto}) => {

    const proyectosContext = useContext(proyectoContext);
    
    // obtener la funcion del context de tarea
    const tareasContext = useContext(tareaContext);
    const {obtenerTareas} = tareasContext;

    const { proyectoActual } = proyectosContext;

    // Funcion para agregar el proyecto actual
    const seleccionarProyecto = id => {
        proyectoActual(id); 
        obtenerTareas(id);
    }

    return ( 
        <li>
            <button
            type="button"
            className="btn btn-blank"
            onClick={() => seleccionarProyecto(proyecto.id)}
            >{proyecto.nombre}</button>
        </li>
     );
}
 
export default Proyecto;