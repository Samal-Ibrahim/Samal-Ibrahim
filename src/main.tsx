import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "#src/App.js"
import "#src/styles/index.css"

const queryClient = new QueryClient()

const storedTheme = localStorage.getItem("theme")
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
	document.documentElement.classList.add("dark")
}

const rootElement = document.getElementById("root")
if (!rootElement) throw new Error("Root element not found")

ReactDOM.createRoot(rootElement).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</QueryClientProvider>
	</React.StrictMode>
)
