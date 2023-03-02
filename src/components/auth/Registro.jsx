import { useState } from "react";
import { Link } from "react-router-dom";


const Registro = () => {

    const [usuario, setUsuario] = useState({
        nombre: '',
        email: '',
        password: '',
        repetirPassword: ''
    })

    const {nombre,email, password, repetirPassword} = usuario

    const onChange = e => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault()

        //Validacion de campos

        //Validar password, longitud y confirmacion

        //Pasarlo al action

    }

    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Obtiene una Cuenta</h1>
                <form
                onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input
                         type="text" 
                         name="nombre" 
                         id="nombre"
                         placeholder="Tu Nombre"
                         value={nombre}
                         onChange={onChange} 
                         />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                         type="email" 
                         name="email" 
                         id="email"
                         placeholder="Tu Email"
                         value={email}
                         onChange={onChange} 
                         />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input
                         type="password" 
                         name="password" 
                         id="password"
                         placeholder="Tu Password"
                         value={password}
                         onChange={onChange} 
                         />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Confirmar Password</label>
                        <input
                         type="password" 
                         name="repetirPassword" 
                         id="password"
                         placeholder="Confirma Tu Password"
                         value={repetirPassword}
                         onChange={onChange} 
                         />
                    </div>
                    <div className="campo-form">
                        <input 
                        type="submit"
                        className="btn btn-primario btn-block"
                         value="Registrarme"
                          />
                    </div>
                </form>

                <Link to={'/'} className="enlace-cuenta">
                    Iniciar Sesión
                </Link>
            </div>
        </div>
    );
}
 
export default Registro;