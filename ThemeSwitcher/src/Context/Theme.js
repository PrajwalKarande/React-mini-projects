import React, { useContext } from "react";


// Create a context with default values
export const ThemeContext = React.createContext({
    themeMode: "dark",
    darkTheme: ()=>{},
    lightTheme: ()=>{}
});

// Export the provider component
export const ThemeContextProvider = ThemeContext.Provider;


// Custom hook to use the ThemeContext
export default function useTheme(){
    return useContext(ThemeContext);
}