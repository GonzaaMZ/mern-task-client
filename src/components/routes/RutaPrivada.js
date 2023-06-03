import { useContext, useEffect } from "react";
import AuthContext from "../../context/autenticacion/authContext";
import { Navigate, Outlet } from "react-router-dom";


const ProtectedRoute = ({ element: Element, ...rest }) => {
    
    const authContext = useContext(AuthContext);
    const {autenticado,cargando , usuarioAutenticado} = authContext;

    useEffect(() => {
        usuarioAutenticado()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    if(!autenticado && !cargando){
        return <Navigate to="/"/>
    } else {
        return <Outlet /> 
    }
    // return  ? :  />;      

}
 
export default ProtectedRoute;
