export const initialState={
    user : null,
    playlist : [],
    playing : false,
    item : null,
  //token:null,   // Setting token to the token value below it will authorize already , we dont have to agree again.
    //token : 'BQC9wogEwKoQUBiQKJOAhyMfFRYw_2LW7ckMpq7KL4rhmAjAdKYFi6XZAJyvlJ-mwb4oOGnneoIebiqdzw7GLpgkaRocE9Y1n89uQcdpYSzthozzvB8XqILKTAsl79XjU43ZQgSePok35NbfJjfzZPEzPgbCiIHvy7mo3NFo1tIDL7M_H-Wf',
};

const reducer = (state,action) =>{
    console.log(action);

    // Action has 2 things -> type, [payload]    payload can be dynamic.  Here type is "SET_USER" and payload is "user".
    switch(action.type){       //  listener(present inside reducer) sees SET_USER(type) and it knows what to do with the user by what defined inside.
        case 'SET_USER':
            return{
                ...state,       // Keep whatever as it is, in the current state.
                user: action.user,     // Update the user .
            }
        case 'SET_TOKEN' :
            return{
                ...state,
                token: action.token,  // So this will put this token into this state.
            }
        case 'SET_PLAYLISTS' :
            return{
                ...state,
                playlists: action.playlists,
            }
        case 'SET_DISCOVER_WEEKLY' :
            return{
                ...state,
                discover_weekly : action.discover_weekly,   // Populate the discover_weekly info inside the DataLayer.
            }
        default :  // And if it do not listens to any of the action then it returns the default (unchanged) state.
            return state;
    }
}  // Actions controls how a Data Layer looks like.  Reducer work is to listen to actions.

export default reducer;