import { 
        REGISTRO_ERROR,
        REGISTRO_EXITOSO,
        OBTENER_USUARIO,
        LOGIN_EXITOSO,
        LOGIN_ERROR,
        CERRAR_SESION
} from "../../types"


// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch(action.type) {
        case REGISTRO_EXITOSO:
            localStorage.setItem('token', action.payload.token);
            console.log(action.payload.token);
            console.log('Token almacenad en el reducer');
            return {
                ...state,
                autenticado: true,
                mensaje: null,  
            }
        case LOGIN_ERROR: 
        case REGISTRO_ERROR: 
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                mensaje: action.payload
            }
        default: 
        return state
    }
}