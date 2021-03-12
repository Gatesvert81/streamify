import React, { createContext, useState } from 'react'

export const MovieContext = createContext()

function Context({children}) {
    const [moviePage, setMoviePage] = useState()
    return (
        <MovieContext.Provider value={[moviePage, setMoviePage]} >
            {children}
        </MovieContext.Provider >
    )
}

export default Context
