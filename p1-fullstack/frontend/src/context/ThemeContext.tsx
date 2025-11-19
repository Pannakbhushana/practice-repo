import {createContext, useContext, useEffect, useState, type ReactNode} from "react";

interface ThemeContextType {
    isDark: boolean,
    toggleTheme:()=> void
}

interface ThemeContextProviderType {
    children :ReactNode
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeContextProvider = ({children}:ThemeContextProviderType) => {
    const [isDark, setIsDark] = useState(false);

useEffect(() => {
    const root = window.document.documentElement;

    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark"); // ✅ remove dark, not light
    }
  }, [isDark]);
    
    const toggleTheme = () => {
        setIsDark(!isDark);
    }

    return <ThemeContext.Provider value={{isDark, toggleTheme}}>{children}</ThemeContext.Provider>
}

export const useTheme = ():ThemeContextType => {
    const context = useContext(ThemeContext)
    if(!context) throw new Error("An unknown error occured");
    return context;
}