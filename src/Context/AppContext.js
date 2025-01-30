import { createContext, useContext } from "react";
import AppReducer ,{ initialState } from "../Reducer/appReducer.js"
import useReducerWithMiddleware  from "../Reducer/useReducerWithMiddleware.js";
import storeStateMiddleware from "../Reducer/stateStored.js";

const AppContext = createContext(initialState) 

export const STORED_STATE_KEY = "profileXLocalState";

const storedState = localStorage.getItem("profileXLocalState") 
const initState = storedState ? JSON.parse(storedState) : initialState

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducerWithMiddleware(AppReducer, initState, [], [storeStateMiddleware]);

    return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>
}

const useApp = () => {
    const context = useContext(AppContext)

    if(context === undefined) {
        throw new Error("Use context is context")
    }

    return context
}

export default useApp;