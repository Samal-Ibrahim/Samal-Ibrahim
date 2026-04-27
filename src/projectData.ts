import sp2 from "./assets/action-house.png"
import cssFr from "./assets/css-tools.png"
import holidaze from "./assets/holidaze.png"
import jsFr from "./assets/zeebra.png"

const projects = [
	{
		id: 1,
		name: "CSS Frameworks CA",
		description:
			"A social media UI built to practice Tailwind CSS — login, profile, and feed pages that feel real without any backend.",
		tech: ["HTML", "Tailwind CSS", "JavaScript"],
		imageUrl: cssFr,
		Body: [
			"The goal of this project was simple: use Tailwind CSS to build something that looks and feels like a real product, even without a backend. I built three pages — login, profile, and feed — and tried to make each one convincing. The login form uses native HTML validation so it actually pushes back on bad input. The profile page shows follower stats and a follow button. The feed renders posts from a JavaScript data file, which kept the app interactive without needing a server.",
			"The most useful thing I got out of this was learning to think in design tokens from the start. Tailwind's utility classes push you to be deliberate about spacing, color, and typography early — there's no stylesheet to patch later. I also added a dark/light mode toggle that saves to localStorage, which was my first time handling persistent user preferences. Small detail, but it makes the app feel noticeably more polished.",
		],
		projectUrl: "https://css-frameworks-samal.netlify.app/feed/",
		githubUrl: "https://github.com/Samal-Ibrahim/css-frameworks-CA",
	},
	{
		id: 2,
		name: "Zeebra",
		description:
			"A full e-commerce experience — product catalog, cart, checkout, and order confirmation — built with React and TypeScript.",
		tech: ["TypeScript", "React", "React-Router", "Tailwind CSS", "Biome", "Vite", "Vitest"],
		imageUrl: jsFr,
		Body: [
			"Zeebra is an e-commerce app built around the Noroff Online Shop API. Users can browse and search products, sort by name or price, view individual product pages with reviews, and go all the way through to a checkout confirmation. The cart persists in localStorage so nothing gets lost on a page refresh. I spent real time on loading and error states — skeleton placeholders while data fetches, and clear messages when something fails — because blank screens are a bad experience even in a demo app.",
			"The most interesting technical problem was cart state. I used React Context to make the cart accessible anywhere in the app without prop drilling, and syncing it with localStorage without causing stale reads took some careful thinking. TypeScript helped a lot here — having typed API responses meant the compiler caught shape mismatches early, before they became runtime bugs. I also wrote tests with Vitest and React Testing Library for the checkout form logic, which was my first real experience writing frontend tests that actually gave me confidence rather than just adding overhead.",
		],
		projectUrl: "https://zeebra.netlify.app/",
		githubUrl: "https://github.com/NoroffFEU/jsfw-2025-v1-samal-jsframeworks",
	},
	{
		id: 3,
		name: "Auction House",
		description:
			"A bidding platform where users can list items, browse auctions, and place bids — built in vanilla JavaScript without a framework.",
		tech: ["JavaScript", "Vite", "Tailwind CSS"],
		imageUrl: sp2,
		Body: [
			"This was a deliberate challenge: build something with real complexity — auth, listings, bidding, profiles — without reaching for React. The Noroff Auction API handles the data, but keeping the frontend architecture clean without a component model to impose structure was the actual problem. I ended up separating API logic, page rendering, and utilities into their own modules. It made features easier to add and made me appreciate what frameworks actually solve, rather than just using one by default.",
			"A few things I'm particularly happy with: the in-memory caching for repeated API calls, the auth-aware UI that updates based on login state without a full re-render, and the dark/light mode that persists across sessions. Building those patterns from scratch in plain JavaScript gave me a much clearer picture of what's actually happening under the hood when React does the same thing. It also made me more confident reading framework code, because I've built the equivalent manually.",
		],
		projectUrl: "https://action-house.netlify.app/",
		githubUrl: "https://github.com/Samal-Ibrahim/FED2-SP2-Auction-House",
	},
	{
		id: 4,
		name: "Holidaze",
		description:
			"A venue booking app where users can browse listings, check availability, and book by date — built on a live REST API.",
		tech: ["JavaScript", "Vite", "Tailwind CSS", "React"],
		imageUrl: holidaze,
		Body: [
			"Holidaze is a booking platform built on the Holidaze API. Users can browse a paginated list of venues, filter results, open individual venue pages, and complete bookings through a date-based flow. I used Flatpickr for date selection rather than building a custom date range picker — partly because the Flatpickr integration was non-trivial anyway, and partly because building a reliable date picker from scratch would have taken time better spent on the booking logic and auth flow.",
			"The part I thought hardest about was auth-aware UI state. Different users see different navigation, different actions, and different content depending on whether they're logged in. Keeping that consistent across route changes — without a state management library — required a clear pattern for reading and updating session data. I also added simple in-memory caching so revisiting a venue page doesn't fire a redundant API call. In hindsight I'd move to TanStack Query for this, which handles caching and loading states far more cleanly than doing it manually.",
		],
		projectUrl: "https://samal-holidaze.netlify.app/",
		githubUrl: "https://github.com/Samal-Ibrahim/PE2_Holidaze",
	},
	{
		id: 5,
		name: "Halkio Sushi",
		description:
			"A sushi restaurant website for a business in Lithuania, focused on menu browsing, categories, and fast mobile-friendly ordering access.",
		tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Zustand"],
		imageUrl: "https://halkiosushi.lt/wp-content/uploads/2016/04/susi-rinkiniai-Custom-1.jpg",
		Body: [
			"This project was built for a sushi business in Lithuania with a practical focus: make the menu easy to scan, keep ordering details clear, and ensure the site works smoothly on mobile where most users browse. The structure is category-first so visitors can jump straight to what they want, and the visual style is intentionally simple to keep attention on food items, prices, and allergen information.",
			"The build process was heavily AI-assisted, and my role was mainly direction and decision-making: choosing layout and content priorities, validating what should be kept or removed, and steering the final UX so it matched the business goal. That made this project a good exercise in product judgment, not just implementation speed.",
		],
		projectUrl: "https://visionary-medovik-5c48ba.netlify.app/",
		githubUrl: "",
	},
]

export default projects
