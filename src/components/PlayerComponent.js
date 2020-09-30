import React from "react";
import "../componentsCSS/Player.css";
import Sidebar from "./SidebarComponent";
import Body from "./BodyComponent";
import Footer from "./FooterComponent";

function Player({spotify}){
    return(
        <div className="player">
           <div className="player_body">
               <Sidebar />
               <Body spotify={spotify}/>

           </div>
           <Footer />

        </div>
    )
}

export default Player;