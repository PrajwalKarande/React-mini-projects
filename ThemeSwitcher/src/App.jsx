import { useEffect,useState } from "react";
import { ThemeContextProvider } from "./Context/Theme"
import ThemeButton from "./Components/ThemeButton";
import Card from "./Components/Card";

function App() {
  const [themeMode,setThemeMode] = useState("dark");

  const darkTheme = () =>{
    setThemeMode("dark");
  }

  const lightTheme = () =>{
    setThemeMode("light");
  }

  useEffect(()=>{
    document.querySelector("html").classList.remove("light","dark");
    document.querySelector("html").classList.add(themeMode);  
  },[themeMode])

  return (
    <>
      <ThemeContextProvider value={{themeMode,darkTheme,lightTheme}}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeButton/>
            </div>

            <div className="w-full max-w-sm mx-auto">
              <Card />
            </div>
          </div>
        </div>
      </ThemeContextProvider>
    </>
  )
}

export default App
