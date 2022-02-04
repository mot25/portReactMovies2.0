import { createContext, useReducer } from 'react'
import reducer from './reducer'

export const context = createContext()

export function MoviesContext({ children }) {
    const initState = {
        loading: true
    }
    const [value, dispatch] = useReducer(reducer, initState)
    value.setloading = (data) => {
        dispatch({ type: "SET_LOADING", playload: { data } })
    }

    return (
        <context.Provider value={value}>
            {children}
        </context.Provider>
    )
}