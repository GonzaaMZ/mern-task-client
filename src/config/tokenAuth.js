import clienteAxios from "./axios";

const tokenAuth = token => {

    if(token){
    console.log('token que va a enviar en la peticion:', token);
    clienteAxios.defaults.headers.common['x-auth-token'] = token;
    } else {
        delete clienteAxios.defaults.headers.common['x-auth-token'];
        console.log('lo elimino');
    }
}

export default tokenAuth;