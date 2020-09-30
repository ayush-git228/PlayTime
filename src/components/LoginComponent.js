import React from "react";
import "../componentsCSS/Login.css";
import { loginUrl } from "../spotify";
import Img from "../Logos/front.png";

function Login(){

    
    return(
        <div className="login">
          
            <img src= {Img} alt=""  height="180 px" width="230 px" />
            <h2>PLAY TIME</h2>
            <a href={loginUrl}>Login</a>
        </div>
    )
}

export default Login;