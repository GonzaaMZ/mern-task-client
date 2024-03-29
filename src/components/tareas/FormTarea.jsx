import { useContext, useEffect, useState } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";



const FormTarea = () => {

  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  const tareasContext = useContext(tareaContext);
  const { tareaseleccionada, agregarTarea, validarTarea, errortarea, obtenerTareas, actualizarTarea, limpiarTarea } = tareasContext;

  // Effect que detecta si hay una tarea seleccionada
  useEffect(() => {
    if (tareaseleccionada !== null) {
      setTarea(tareaseleccionada)
    } else {
      setTarea({
        nombre: ''
      })
    }
  }, [tareaseleccionada])

  const [tarea, setTarea] = useState({
    nombre: ''
  })


  if (!proyecto) return null;

  // Array destructuring
  const [proyectoActual] = proyecto;

  const { nombre } = tarea;

  // Leer los valores del form
  const handleChange = e => {
    setTarea({
      ...tarea,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = e => {
    e.preventDefault();

    //Validacion
    if (nombre.trim() === '') {
      validarTarea();
      return
    }

    // Verificacion si es edicion o nueva tarea
    if (tareaseleccionada === null) {
      //Tarea nueva
      // Agregar tarea al state
      tarea.proyecto = proyectoActual._id;
      agregarTarea(tarea);
    } else {
      //Actualizar tarea
      actualizarTarea(tarea);
      limpiarTarea();
    }

    //
    obtenerTareas(proyectoActual.id)

    // reiniciar el formulario
    setTarea({
      nombre: ''
    })


  }

  return (
    <div className="formulario">
      <form onSubmit={onSubmit}>
        <div className="contenedor-input">
          <input
            type="text"
            name="nombre"
            className="input-text"
            placeholder="Nombre Tarea.."
            value={nombre}
            onChange={handleChange}
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            value={tareaseleccionada ? 'Editar Tarea' : 'Agregar Tarea'}
            className="btn btn-primario btn-submit btn-block"
          />
        </div>
      </form>
      {errortarea ? <p className="mensaje error">El nombre de la tarea es obligatorio</p> : null}
    </div>
  );
};

export default FormTarea;
