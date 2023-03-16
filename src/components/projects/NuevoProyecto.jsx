import { Fragment, useContext, useState } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";

const NuevoProyecto = () => {
  const proyectosContext = useContext(proyectoContext);
  const { formulario, errorformulario ,mostrarFormulario, agregarProyecto, mostrarError} = proyectosContext;

  const [proyecto, setProyecto] = useState({
    nombre: "",
  });

  const { nombre } = proyecto;

  //Actualiza el state de proyecto leyendo el form
  const onChangeProyecto = (e) => {
    setProyecto({
      ...proyecto,
      [e.target.name]: e.target.value,
    });
  };

  //Envia los datos
  const onSubmitProyecto = e => {
    e.preventDefault();

    if(nombre === ''){
      mostrarError()
      return;
    }

    agregarProyecto(proyecto);

    setProyecto({
      nombre: ''
    })
  };

  const onClickFormulario = () => {
    mostrarFormulario()
  }

  return (
    <Fragment>
      <button 
      type="button" 
      className="btn btn-block btn-primario"
      onClick={onClickFormulario}
      >
        Nuevo Proyecto
      </button>
      {formulario ? (
        <form className="formulario-nuevo-proyecto" onSubmit={onSubmitProyecto}>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre Proyecto"
            className="input-text"
            value={nombre}
            onChange={onChangeProyecto}
          />
          <input
            type="submit"
            value="Agregar Proyecto"
            className="btn btn-primario btn-block"
          />
        </form>
      ) : null}
      {errorformulario ? <p className="mensaje error">El Nombre es Obligatorio</p> : null}
    </Fragment>
  );
};

export default NuevoProyecto;
