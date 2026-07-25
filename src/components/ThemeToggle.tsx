import { useEffect, useState } from "react"

const getInitialTheme = (): "light" | "dark" => {
	const stored = localStorage.getItem("theme")
	if (stored === "light" || stored === "dark") return stored
	return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

export default function ThemeToggle() {
	const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme)

	useEffect(() => {
		document.documentElement.classList.toggle("dark", theme === "dark")
		localStorage.setItem("theme", theme)
	}, [theme])

	return (
		<button
			type="button"
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
			aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
			className="cursor-pointer rounded border border-border-soft px-2.5 py-1 text-sm text-gold transition-colors hover:border-gold"
		>
			{theme === "dark" ? "☀" : "☾"}
		</button>
	)
}
