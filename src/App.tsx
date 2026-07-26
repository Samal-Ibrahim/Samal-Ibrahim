import { Route, Routes } from "react-router-dom"
import Footer from "#src/components/Footer.js"
import { Nav } from "#src/components/Nav.tsx"
import Contact from "#src/pages/Contact.js"
import Home from "#src/pages/Home.js"
import _NotFound from "#src/pages/NotFound.js"
import vanGoghTheme from "./assets/van-gogh-theme.jpg"

function App() {
	return (
		<div className="grid grid-rows-[auto_1fr_auto] mx-auto min-h-screen container bg-content-bg shadow-lg transition-colors duration-300 relative">
			<header className="row-start-1 w-full">
				<Nav />
			</header>
			<main className="gap-4 z-1 w-full">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="*" element={<_NotFound />} />
				</Routes>
			</main>
			<img
				className="fixed bottom-0 right-0 opacity-7 w-full h-full object-cover"
				src={vanGoghTheme}
				alt={vanGoghTheme}
			/>
			<footer className="row-start-3 w-full">
				<Footer />
			</footer>
		</div>
	)
}

export default App
