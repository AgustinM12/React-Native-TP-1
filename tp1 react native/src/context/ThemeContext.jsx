import { createContext, useState } from "react"

export const ThemeContext = createContext()

export const ContextProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(true)

  const toggleTheme = () => {
    setDarkTheme(!darkTheme)
  }

  return (
    <>
      <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </>
  )
}
