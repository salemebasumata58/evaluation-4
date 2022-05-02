// export const ProtectedRoute = ({ children }) => {};
import { useContext } from "react";
import {Navigate} from "react-router-dom";
import { AuthContext } from "../components/contexts/Authcontext";


export const ProtectedRoute = ({children}) =>{
  const {isAuth} = useContext(AuthContext);
    
    if(!isAuth){
      return <Navigate to ="/login" replace={false}/>
    }
    return children;
};