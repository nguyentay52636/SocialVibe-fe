"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"

type ThemeProviderContextProps = {
  theme: string
  setTheme: (theme: string) => void
}

const ThemeProviderContext = createContext<ThemeProviderContextProps>({
  theme: "system",
  setTheme: () => null,
})

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [theme, setTheme] = useState("system")

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "system"
    setTheme(savedTheme)
    document.documentElement.classList.toggle("dark", savedTheme === "dark")
  }, [])

  const value = {
    theme,
    setTheme: (newTheme: string) => {
      setTheme(newTheme)
      localStorage.setItem("theme", newTheme)
      document.documentElement.classList.toggle("dark", newTheme === "dark")
    },
  }

  return (
    <ThemeProviderContext.Provider value={value}>
      <NextThemesProvider {...props}>{children}</NextThemesProvider>
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
