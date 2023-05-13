import React, { useReducer } from "react";

import TareaContext from "./tareaContext";
import TareaReducer from "./tareaReducer";

import {
     TAREAS_PROYECTO,
     AGREGAR_TAREA
} from "../../types";


const TareaState = props => {
    const initialState = {
        tareas: [
        { nombre: 'Elegir Lenguaje', estado: true, proyectoId: 1},
        { nombre: 'Diseñar la tienda', estado: false, proyectoId: 2 },
        { nombre: 'Elegir pasarela de pago', estado: true,  proyectoId: 3 },
        { nombre: 'Elegir hosting', estado: false,  proyectoId: 4 },
        { nombre: 'Elegir Lenguaje', estado: true, proyectoId: 4},
        { nombre: 'Diseñar la tienda', estado: false, proyectoId: 1 },
        { nombre: 'Elegir pasarela de pago', estado: true,  proyectoId: 2 },
        { nombre: 'Elegir hosting', estado: false,  proyectoId: 3 }
    ],
    tareasproyecto: null
    }

    // Crear dispatch y state
    const [state, dispatch] = useReducer(TareaReducer, initialState);

    // Crear las funciones


    // Obtener las tareas de un proyecto
    const obtenerTareas = proyectoId => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        })
    }

    // Agregar una tarea al proyecto que seleccionamos
    const agregarTarea = tarea => {
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
    }

    return (
        <TareaContext.Provider
        value={{
            tareas: state.tareas,
            tareasproyecto: state.tareasproyecto,
            obtenerTareas,
            agregarTarea
        }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState;