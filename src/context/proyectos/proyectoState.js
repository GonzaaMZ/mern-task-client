import { useReducer, useState } from "react";
import proyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";
import { FORMULARIO_PROYECTO , OBTENER_PROYECTOS} from "../../types";


const ProyectoState = (props) => {
    const proyectos = [
        {id: 1, nombre: "Tienda Virtual" },
        {id: 2, nombre: "Desarrollo de API" },
        {id: 3, nombre: "Diseño de Sitio web" },
      ]
      
    const initialState = {
    proyectos: [],
    formulario: false,
  };

  //Dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(proyectoReducer, initialState);

  const mostrarFormulario = () => {
    dispatch({
      type: FORMULARIO_PROYECTO,
    });
  };

  const obtenerProyectos = () => {
    dispatch({
        type: OBTENER_PROYECTOS,
        payload: proyectos
    })
  }

  return (
    <proyectoContext.Provider
      value={{
        proyectos: state.proyectos,
        formulario: state.formulario,
        mostrarFormulario,
        obtenerProyectos
      }}
    >
      {props.children}
    </proyectoContext.Provider>
  );
};

export default ProyectoState;
