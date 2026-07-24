import { Route, Routes } from "react-router-dom"
import Footer from "#src/components/Footer.js"
import { Nav } from "#src/components/Nav.tsx"
import Contact from "#src/pages/Contact.js"
import DetailedProject from "#src/pages/DetailedProject.js"
import Home from "#src/pages/Home.js"
import _NotFound from "#src/pages/NotFound.js"

function App() {
	return (
		<div className="grid grid-rows-[auto_1fr_auto] mx-auto min-h-screen container bg-[var(--color-content-bg)] shadow-lg transition-colors duration-300">
			<header className="row-start-1">
				<Nav />
			</header>
			<main className="gap-4">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/projects/:id" element={<DetailedProject />} />
					<Route path="*" element={<_NotFound />} />
				</Routes>
			</main>
			<footer className="row-start-3">
				<Footer />
			</footer>
		</div>
	)
}

export default App
