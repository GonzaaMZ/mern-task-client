import { useContext, useEffect } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import Proyecto from "./Proyecto";
import {CSSTransition, TransitionGroup} from 'react-transition-group'

const ListadoProyectos = () => {

    const proyectosContext = useContext(proyectoContext)
    const {proyectos, obtenerProyectos } = proyectosContext
    
    useEffect(() => {
        obtenerProyectos()
        // eslint-disable-next-line
    }, [])

    if(proyectos.length === 0) return <p>No hay Proyectos</p>;


    return ( 
        <ul className="listado-proyectos">
            <TransitionGroup>
            {proyectos.map((proyecto) => (
               <CSSTransition key={proyecto.id} timeout={200} classNames="proyecto">
                 <Proyecto proyecto={proyecto}/>
               </CSSTransition>
            ))}
            </TransitionGroup>
        </ul>
     );
}
 
export default ListadoProyectos;