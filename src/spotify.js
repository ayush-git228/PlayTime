export const authEndPoint  = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";

const clientId =  "6b9928bba8bf402a85b79c2b966d6e98";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];  // User permissions

export const getTokenFromUrl =() =>{
    return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial,item)=>{
        let parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial
    },{})
} // Goes to this location in the Url to acess token.

export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
