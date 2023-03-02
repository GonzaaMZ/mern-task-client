import { Fragment } from "react";
import Tarea from "./Tarea";

const ListadoTareas = () => {
    
    const tareasProyecto = [
        {nombre: 'Elegir Lenguaje', estado: true},
        {nombre: 'Diseñar la tienda', estado: false},
        {nombre: 'Elegir pasarela de pago', estado: true},
        {nombre: 'Elegir hosting', estado: false}
    ]
    
    return ( 
        <Fragment>
            <h2>Proyecto: Tienda Virtual</h2>
            <ul className="listado-tareas">
                {tareasProyecto.length === 0
                ? (<li className="tarea"><p>No hay tareas</p></li>)
                : tareasProyecto.map(tarea => (
                    <Tarea tarea={tarea}/>
                ))
                }
            </ul>
            <button
            type="button"
            className="btn btn-eliminar"
            >Eliminar Proyecto &times;</button>
        </Fragment>
     );
}
 
export default ListadoTareas;