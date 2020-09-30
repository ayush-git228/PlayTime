import React ,{ createContext, useContext, useReducer} from "react";

export const DataLayerContext= createContext();  // Prepares the Data Layer.

export const DataLayer = ({initialState,reducer,children})=>(
   <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
       {children}  
   </DataLayerContext.Provider>
)  //  Actual Data Layer that wraps the App Layer.  children is basically what is wraped inside so here it is App.

export const useDataLayerValue = () => useContext(DataLayerContext);
// So anytime we want to get the value or dispatch any action we need some way of access to it. for that we use a hook useContext. 