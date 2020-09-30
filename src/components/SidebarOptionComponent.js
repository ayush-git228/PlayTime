import React from "react";
import "../componentsCSS/SidebarOption.css";

function SidebarOption({title,Icon}){
    return(
        <div className="sidebarOption">
         {Icon && <Icon className="sidebarOption_icon"/>}
         {Icon ?<h4>{title}</h4> : <p>{title}</p>}
        </div>
    )
}

export default SidebarOption;