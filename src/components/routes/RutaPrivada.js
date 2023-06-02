import { useContext, useEffect } from "react";
import AuthContext from "../../context/autenticacion/authContext";
import { Route, Navigate, Outlet } from "react-router-dom";


const ProtectedRoute = ({ element: Element, ...rest }) => {
    
    const authContext = useContext(AuthContext);
    const {autenticado,cargando , usuarioAutenticado} = authContext;

    useEffect(() => {
        usuarioAutenticado()
    }, [])
    
    if(!autenticado && !cargando){
        return <Navigate to="/"/>
    } else {
        return <Outlet /> 
    }
    // return  ? :  />;      

}
 
export default ProtectedRoute;
