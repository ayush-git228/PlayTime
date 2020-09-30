import React from "react";
import "../componentsCSS/Body.css";
import Header from "./HeaderComponent";
//import Img from "../Logos/body.jpg";
import { useDataLayerValue } from "../DataLayer";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavouriteIcon from "@material-ui/icons/Favorite";
import MoreIcon from "@material-ui/icons/More";
import SongRow from "./SongRowComponent";


function Body({spotify}){

    const [{discover_weekly},dispatch] = useDataLayerValue(); // Pulling the discover_weekly from the DataLayer.
    return(
        <div className="body">
          <Header spotify={spotify} />
          <div>
            <div className="body_info">
              <img src={discover_weekly?.images[0].url} alt=""/>

          
              <div className="body_infoText">
                <strong>PLAYLIST</strong>
                <h2>Discover Weekly</h2>
                <p>{discover_weekly?.description}</p>
                </div>
            </div>
          </div>
          <div className="body_songs">
            <div className="body_icons">
              <PlayCircleFilledIcon className="body_shuffle"/>
              <FavouriteIcon fontSize="large"/>
              <MoreIcon />
            </div>
            {discover_weekly?.tracks.items.map((item)=>(
              <SongRow track={item.track} />  // items here are the songs.
            ))}
          </div>
        </div>

    )
}

export default Body;