import { createContext, useReducer, useContext } from "react";
import AppReducer ,{ initialState } from "../Reducer/appReducer.js"

const AppContext = createContext(initialState) 

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

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