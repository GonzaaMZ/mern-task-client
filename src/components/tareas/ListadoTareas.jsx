import { Fragment, useContext } from "react";
import Tarea from "./Tarea";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";



const ListadoTareas = () => {

    const proyectosContext = useContext(proyectoContext);
    const { proyecto, eliminarProyecto } = proyectosContext;

     // obtener las tareas del proyecto
     const tareasContext = useContext(tareaContext);
     const {tareasproyecto} = tareasContext;

    if(!proyecto) return <h2>Selecciona un Proyecto</h2>

    // Array destructuring
    const [ proyectoActual ] = proyecto;

    const onClickEliminar = () => {
        eliminarProyecto(proyectoActual.id)
    }
    
    return ( 
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre}</h2>
            <ul className="listado-tareas">
                {tareasproyecto.length === 0
                ? (<li className="tarea"><p>No hay tareas</p></li>)
                : tareasproyecto.map(tarea => (
                    <Tarea key={tarea.nombre} tarea={tarea}/>
                ))
                }
            </ul>
            <button
            type="button"
            className="btn btn-eliminar"
            onClick={onClickEliminar}
            >Eliminar Proyecto &times;</button>
        </Fragment>
     );
}
 
export default ListadoTareas;