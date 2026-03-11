'use client'

import { createContext, useContext } from 'react'

const ContestContext = createContext(null)


export function ContestProvider({ children }) {


    return (
        <ContestContext.Provider value={{

        }}>
            {children}
        </ContestContext.Provider>
    )
}



export default ContestProvider