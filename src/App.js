import React ,{useEffect, useState} from 'react';
import './App.css';
import Login from "./components/LoginComponent";
import Player from "./components/PlayerComponent";
import SpotifyWebApi from "spotify-web-api-js";
import { getTokenFromUrl } from './spotify';
import { useDataLayerValue } from "./DataLayer"; 

const spotify = new SpotifyWebApi();

function App() {
  
    //const [token,setToken] = useState(null);
    const [{user, token}, dispatch] = useDataLayerValue();  // Pulling user from data layer. Here user is basically DataLayer.user
  
    useEffect(()=>{
      const hash = getTokenFromUrl();           // So when we redirect from our account page it will return an object containing token.    
      window.location.hash = ""; // It will set the access token to empty string for security purposes so no one can the acess token. so empty the Url 
      const _token = hash.access_token;
      if(_token){        // Store it in a kind of temp memory.

        dispatch({         // Dispatch an action with type "SET_TOKEN"
          type : "SET_TOKEN",
          token : _token,  // payload hre.
        })

        // setToken(_token);

        spotify.setAccessToken(_token)  // Giving or putting access token to/inside the spotify API.
        spotify.getMe().then((user)=>{   // The Access token we get is basically the User.
         // console.log(user);

          dispatch({  // It shoots user to the DataLayer from where we can pull it.
            type : 'SET_USER',
            user : user, // user is that we are getting back. So this dispatch object will dispatch the user here.
          })
        }) 

        spotify.getUserPlaylists().then((playlists)=>{
          dispatch({
            type:'SET_PLAYLISTS',
            playlists : playlists,
          })
        })

        spotify.getPlaylist("6TmWufO4pB3SBGLTa1t51R").then((resp)=>{
          dispatch({
            type:'SET_DISCOVER_WEEKLY',
            discover_weekly : resp,
          })
        })
      }
     // console.log("YOU HAVE A TOKEN", token);

    },[]);
    
    // This react hook run according to condition so here if we pass name in the array it would be rendered 2 times first with App Component 
    // and second when name changes if here we pass [] array it would be rendered just one time. 
    //console.log(user);
    //console.log(token);

    return (
    <div className="app"> {token? <Player  spotify={spotify} /> : <Login />} </div>
  );
}

export default App;
