import React from "react";
import "../componentsCSS/Footer.css";
import Img from "../Logos/album.jpg";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutlineOutlined";
import {Grid,Slider} from "@material-ui/core";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";

function Footer(){
    return(
        <div className="footer">
          <div className="footer_left">
           <img className="footer_albumLogo" src= {Img} alt="" />
           <div className="footer_songInfo">
               <h4>Song</h4>
               <p>Queen</p>
          </div>
          </div>
          <div className="footer_center">

          <ShuffleIcon className="footer_salmon" />
          <SkipPreviousIcon className="footer_icon"/>
          <PlayCircleOutlineIcon className="footer_icon" fontSize="large"/>
          <SkipNextIcon className="footer_icon"/>
          <RepeatIcon className="footer_salmon"/>

          </div>
          <div className="footer_right">
            <Grid container spacing={2}>
                <Grid item>
                    <PlaylistPlayIcon />
                </Grid>
                <Grid item>
                    <VolumeDownIcon />
                </Grid>
                <Grid item xs>
                    <Slider />
                </Grid>
            </Grid>
          </div>
        </div>

    )
}

export default Footer;