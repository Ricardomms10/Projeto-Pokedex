import { createContext, useState } from "react";

import dayColor from "../components/image/fundoDia.jpg"
import nigthColor from "../components/image/night-background.jpg"

export const themes = {
    ligth: {
        id:"ligth",
        backgroundImage: dayColor,
    },
    dark: {
        id:"dark",
        backgroundImage: nigthColor,
    }
}

export const ThemeContext = createContext()

export const BackgroundProvider = ( props ) => {

    const [ theme, setTheme ] = useState (themes.ligth)

    const toggleTheme = () => {
        setTheme((curr) => curr === themes.ligth ? themes.dark : themes.ligth)
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    
    )
}

