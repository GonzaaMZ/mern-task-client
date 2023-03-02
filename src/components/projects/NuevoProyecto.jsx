import { Fragment, useContext, useState } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";

const NuevoProyecto = () => {
  const proyectosContext = useContext(proyectoContext);
  const { formulario, mostrarFormulario} = proyectosContext;

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
  const onSubmitProyecto = (e) => {
    e.preventDefault();
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
    </Fragment>
  );
};

export default NuevoProyecto;
