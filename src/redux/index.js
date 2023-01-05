import { createContext, useReducer, useContext } from "react";

import { initialState, reducer } from "./reducer";

export const Context = createContext();
const dispatchContext = createContext();

export const StoreProvider = ({ children }) => {
    let initialReducerState = { ...initialState };
    const [state, dispatch] = useReducer(reducer, initialReducerState);
    return (
        <dispatchContext.Provider value={[state, dispatch]}>
            <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
        </dispatchContext.Provider>
    );
};

export function useStore() {
    return useContext(Context);
}

export function useDispatch() {
    return useContext(dispatchContext);
}

