import { useContext, useEffect } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import AlertaContext from "../../context/alertas/alertasContext";
import Proyecto from "./Proyecto";
import {CSSTransition, TransitionGroup} from 'react-transition-group'

const ListadoProyectos = () => {

    const proyectosContext = useContext(proyectoContext)
    const {mensaje ,proyectos, obtenerProyectos } = proyectosContext

    const alertaContext = useContext(AlertaContext);
    const {alerta, mostrarAlerta} = alertaContext;

    useEffect(() => {

        //Si hay error
        if(mensaje){
            mostrarAlerta(mensaje.msg, mensaje.categoria)
        }
        obtenerProyectos()
        // eslint-disable-next-line
    }, [mensaje])

    if(proyectos.length === 0) return <p>No hay Proyectos</p>;


    return ( 
        <ul className="listado-proyectos">
            {alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) : null}
            <TransitionGroup>
            {proyectos.map((proyecto) => (
               <CSSTransition key={proyecto._id} timeout={200} classNames="proyecto">
                 <Proyecto proyecto={proyecto}/>
               </CSSTransition>
            ))}
            </TransitionGroup>
        </ul>
     );
}
 
export default ListadoProyectos;