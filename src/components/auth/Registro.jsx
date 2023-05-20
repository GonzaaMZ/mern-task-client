import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AlertaContext from "../../context/alertas/alertasContext";
import AuthContext from "../../context/autenticacion/authContext";


const Registro = (props) => {

    const alertaContext = useContext(AlertaContext);

    const {alerta, mostrarAlerta} = alertaContext;

    const authContext = useContext(AuthContext);
    const { mensaje, autenticado ,registrarUsuario} = authContext; 

    let navigate = useNavigate();

    useEffect(() => {
        if(autenticado){
            navigate('/proyectos')
        }

        if(mensaje){
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }
    }, [mensaje, autenticado, props.history])

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
        if(nombre.trim() === '' || email.trim() === '' || password.trim() === '' || repetirPassword.trim() === ''){
            mostrarAlerta('Todos los campos son obligatorios', 'alerta-error')
            return
        }

        //Validar password, longitud y confirmacion
        if(password.length < 6){
            mostrarAlerta('El password debe tener mas de 6 caracteres', 'alerta-error');
            return
        }

        if(password !== repetirPassword){
            mostrarAlerta('El password debe coincidir', 'alerta-error');
            return
        }

        //Pasarlo al action
        registrarUsuario({
            nombre,
            email,
            password
        })

    }

    return ( 
        <div className="form-usuario">
            {alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) : null}
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