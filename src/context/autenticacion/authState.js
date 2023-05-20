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
            console.log(respuesta);
            dispatch({
                type: REGISTRO_EXITOSO,
                payload: respuesta.data
            })

            usuarioAutenticado();
        } catch (error) {
            // console.log(error.response.data.msg);
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

    const usuarioAutenticado = async () => {
        const token = localStorage.getItem('token');

        if(token){
            tokenAuth(token);
        }

        try {
            const respuesta = await clienteAxios.get('/api/auth')
            console.log(respuesta);
        } catch (error) {
            console.log(error);
            dispatch({
                type: LOGIN_ERROR
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
                registrarUsuario
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;