import { Fragment, useContext } from "react";
import Tarea from "./Tarea";
import proyectoContext from "../../context/proyectos/proyectoContext";


const ListadoTareas = () => {

    const proyectosContext = useContext(proyectoContext);
    const { proyecto, eliminarProyecto } = proyectosContext;

    if(!proyecto) return <h2>Selecciona un Proyecto</h2>

    // Array destructuring
    const [ proyectoActual ] = proyecto;

    const tareasProyecto = [
        {nombre: 'Elegir Lenguaje', estado: true},
        {nombre: 'Diseñar la tienda', estado: false},
        {nombre: 'Elegir pasarela de pago', estado: true},
        {nombre: 'Elegir hosting', estado: false}
    ]

    const onClickEliminar = () => {
        eliminarProyecto(proyectoActual.id)
    }
    
    return ( 
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre}</h2>
            <ul className="listado-tareas">
                {tareasProyecto.length === 0
                ? (<li className="tarea"><p>No hay tareas</p></li>)
                : tareasProyecto.map(tarea => (
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