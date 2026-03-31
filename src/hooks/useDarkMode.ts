import { useEffect, useState } from "react"

export function useDarkMode() {
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        // Check for saved theme preference or default to system preference
        // const savedTheme = localStorage.getItem('theme')
        const savedTheme = "dark"
        // const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

        if (savedTheme === 'dark') {
            setIsDark(true)
            document.documentElement.classList.add('dark')
        } else {
            setIsDark(false)
            document.documentElement.classList.remove('dark')
        }
    }, [])

    const toggleDarkMode = () => {
        const newTheme = !isDark
        setIsDark(newTheme)

        if (newTheme) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }

    return { isDark, toggleDarkMode }
}