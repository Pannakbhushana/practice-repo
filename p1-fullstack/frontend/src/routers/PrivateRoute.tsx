import { Navigate } from "react-router-dom";

interface PrivateRoute {
    children:React.ReactNode;
}

const PrivateRoute = ({children}:PrivateRoute) => {
    const storedUser = localStorage.getItem("user");

    const user = storedUser ? JSON.parse(storedUser) : null;

    if(!user) return <Navigate to={'/login'}/>
   
    return <>{children}</>
    
}

export default PrivateRoute