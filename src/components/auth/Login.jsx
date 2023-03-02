import { useState } from "react";
import { Link } from "react-router-dom";


const Login = () => {

    const [usuario, setUsuario] = useState({
        email: '',
        password: ''
    })

    const {email, password} = usuario

    const onChange = e => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault()

        //Validacion de campos

        //Pasarlo al action

    }

    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sesión</h1>
                <form
                onSubmit={onSubmit}
                >
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
                        <input 
                        type="submit"
                        className="btn btn-primario btn-block"
                         value="Iniciar Sesion"
                          />
                    </div>
                </form>

                <Link to={'/register'} className="enlace-cuenta">
                    Registrarse
                </Link>
            </div>
        </div>
    );
}
 
export default Login;