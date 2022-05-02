import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../Redux/action";
import { AuthContext } from "./contexts/Authcontext"
import { useNavigate } from "react-router-dom";
import { useContext } from "react"

export const Login = () => {
  
  const {handleAuth} = useContext(AuthContext);
  const navigate = useNavigate();
 

    return (
      <div>
        <input
          className="username"
          type="text"
          name="username"
          placeholder="Enter Username"
          // value={text}
          // onChange={(e)=>setText(e.target.value)}

        />
        <input
          className="password"
          type="password"
          name="password"
          placeholder="Enter password"
          // value={text}
          // onChange={(e)=>setText(e.target.value)}
        />
        {/* On this button click make network req to find user with same username and password */}
        {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
        <button
         onClick={()=>{
          handleAuth(true);
          navigate(-2, { replace:true })
       }}
        className="submit">Login</button>
      </div>
    );
  };