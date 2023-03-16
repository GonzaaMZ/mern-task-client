import { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";


const FormTarea = () => {

  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  
  if(!proyecto) return null;

  // Array destructuring
  const [ proyectoActual ] = proyecto;


  return (
    <div className="formulario">
      <form action="">
        <div className="contenedor-input">
          <input
            type="text"
            name="nombre"
            className="input-text"
            placeholder="Nombre Tarea.."
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            value="Agregar Tarea"
            className="btn btn-primario btn-submit btn-block"
          />
        </div>
      </form>
    </div>
  );
};

export default FormTarea;
