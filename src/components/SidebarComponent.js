import React, { useState } from "react";
import "../componentsCSS/Sidebar.css";
import Img from "../Logos/front.png";
import SidebarOption from "./SidebarOptionComponent";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import {useDataLayerValue} from "../DataLayer";


function Sidebar(){

    const [{playlists},dispatch] = useDataLayerValue();  // Pulling playlists from the DataLayer. 
    return(
        <div className="sidebar">
         <img src ={Img} alt="" className="sidelogo" />
         <SidebarOption Icon={HomeIcon} title="Home" />
         <SidebarOption Icon={SearchIcon} title="Search" />
         <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />

         <br />
         <strong className="sidebar_title">PLAYLISTS</strong>
         <hr/>

         {playlists?.items?.map(playlist=>(  // If we see in console log playlists has items and each playlist has a name.
            <SidebarOption title={playlist.name} />
         ))}

        </div>

    )
}

export default Sidebar;