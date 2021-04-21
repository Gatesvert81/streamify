import React, { createContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'

export const MovieContext = createContext()
export const ThemeContext = createContext()
export const MyStuffContext = createContext()

function Context({children}) {
    const [moviePage, setMoviePage] = useState()
    const [theme, setTheme] = useState(true)
    const [stuffs, setStuffs] = useState([])

    const {uid} = useSelector(state => state.firebase.auth)
    useFirestoreConnect({
        collection: `users/${uid}/myStuff` ,
        storeAs: "myStuff"
    })

    const myStuff = useSelector(state => state.firestore.data.myStuff)

    useEffect(() => {
        const newStuff = myStuff && Object.values(myStuff).map(movieItem => movieItem) 
        setStuffs(newStuff)
    }, [myStuff])

    return (
        <MovieContext.Provider value={[moviePage, setMoviePage]} >
            <ThemeContext.Provider value={[theme, setTheme]}>
                <MyStuffContext.Provider value={[stuffs, setStuffs]} >
                {children}
                </MyStuffContext.Provider>
            </ThemeContext.Provider>
        </MovieContext.Provider >
    )
}
 
export default Context
