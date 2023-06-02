import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AlertaContext from "../../context/alertas/alertasContext";
import AuthContext from "../../context/autenticacion/authContext";


const Login = (props) => {

    const [usuario, setUsuario] = useState({
        email: '',
        password: ''
    }) 

    const alertaContext = useContext(AlertaContext);

    const {alerta, mostrarAlerta} = alertaContext;

    const authContext = useContext(AuthContext);
    const { mensaje, autenticado ,iniciarSesion} = authContext; 

    let navigate = useNavigate();

    useEffect(() => {
        if(autenticado){
            navigate('/proyectos')
        }

        if(mensaje){
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }
    }, [mensaje, autenticado])

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
        if(email.trim() === '' || password.trim() === '' ){
            mostrarAlerta('Todos los campos son obligatorios', 'alerta-error')
        }

        //Pasarlo al action
        iniciarSesion({email, password});
    }

    return ( 
        <div className="form-usuario">
            {alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) : null}
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