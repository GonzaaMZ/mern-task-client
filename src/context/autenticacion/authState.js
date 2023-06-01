import { useReducer } from "react"
import {
    REGISTRO_ERROR,
    REGISTRO_EXITOSO,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION
} from "../../types"
import AuthReducer from "./authReducer"
import AuthContext from "./authContext"
import clienteAxios from "../../config/axios"
import tokenAuth from "../../config/tokenAuth"
import axios from "axios"

const AuthState = props => {

    const initialState = {
        token: localStorage.getItem('token'),
        autenticado: null,
        usuario: null,
        mensaje: null
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    //Funciones

    // fn para crear usuarios
    const registrarUsuario = async datos => {
        try {
            const respuesta = await clienteAxios.post('/api/usuarios', datos);
            console.log(respuesta.data);

            dispatch({
                type: REGISTRO_EXITOSO,
                payload: respuesta.data
            })
            setTimeout(() => {
                usuarioAutenticado()
            }, '3000')
        
        } catch (error) {
            // console.log(error.response.data.msg);
            console.log('REGISTRO ERROR');
            const alerta = {
                msg: error.response.data.msg,
                categoria: 'alerta-error'
            }
            dispatch({
                type: REGISTRO_ERROR,
                payload: alerta
            })
        }
    }

    // fn para obtener el usuario autenticado
    const usuarioAutenticado = async () => {

        console.log('entro a usuarioAutenticado..');
        const token = localStorage.getItem('token');
        console.log('token: ', token);

        if(token){
            console.log('entro al tokenAuth');
            tokenAuth(token);
        }

        try {
            const respuesta = await clienteAxios.get('/api/auth');
            dispatch({
                type: OBTENER_USUARIO,
                payload: respuesta.data.usuario
            })
            console.log(respuesta.data);
        } catch (error) {
            console.log(error.response);
            dispatch({
                type: LOGIN_ERROR
            })
        }

    }

// Inicio de Sesion
const iniciarSesion = async datos => {
    try {
        const respuesta = await clienteAxios.post('/api/auth', datos)
        console.log(respuesta);
        // dispatch({
        //     type: LOGIN_EXITOSO,
        //     payload: respuesta.data
        // })
    } catch (error) {
        console.log(error.response.data.msg);
        const alerta = {
            msg: error.response.data.msg,
            categoria: 'alerta-error'
        }
        dispatch({
            type: LOGIN_ERROR,
            payload: alerta
        })
    }
}

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje,
                registrarUsuario,
                iniciarSesion
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;