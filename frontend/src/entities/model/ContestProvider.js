'use client'

import {createContext, useMemo} from 'react'
import useSettings from './useSettings'

const ContestContext = createContext(null)

export const ContestProvider = (props) => {
    const { children } = props

    const {
        changingFont,
        handleThemeChange,
        simpleThemeRef,
        darkThemeRef,
        lightThemeRef
    } = useSettings()

    const value = useMemo(() => ({
        changingFont,
        handleThemeChange,
        simpleThemeRef,
        darkThemeRef,
        lightThemeRef
    }), [
        changingFont,
        handleThemeChange,
        simpleThemeRef,
        darkThemeRef,
        lightThemeRef
    ])


    return (
        <ContestContext.Provider value={value}>
            {children}
        </ContestContext.Provider>
    )
}