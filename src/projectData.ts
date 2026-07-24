import sp2 from "./assets/action-house.png"
import cssFr from "./assets/css-tools.png"
import gearup from "./assets/gearup.png"
import halkio from "./assets/halkio-sushi.jpg"
import holidaze from "./assets/holidaze.png"
import jsFr from "./assets/zeebra.png"

const projects = [
	{
		id: 1,
		name: "GearUp",
		description:
			"GearUp is a modern car marketplace app focused on helping users find the right vehicle with clear terms, practical filters, and a smooth browsing experience.",
		tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Express", "Prisma", "PostgreSQL"],
		imageUrl: gearup,
		Body: [
			"GearUp is a full-stack car marketplace project where users can browse listings and compare options. The front end delivers a clean, responsive experience with card-based listings, clear pricing details, and simple navigation across home, about, contact, and login pages.",
			"The core of the experience is filtering and sorting: users can narrow results by deal type, availability, monthly budget range, and model year range, then sort listings to find what fits — a realistic browse-and-compare flow.",
			"The backend is built with Express and Prisma, talking to a PostgreSQL database on Railway. Login works with JWT and bcrypt-hashed passwords, and Zod keeps the incoming data validated. It rounds the project off from a pure front-end demo into a working full-stack app.",
		],
		projectUrl: "https://gearup-car.netlify.app/",
	},
	{
		id: 2,
		name: "CSS Frameworks CA",
		description:
			"A course assignment showcasing responsive design and Tailwind customization on a social-style layout with feed, profile, and login pages.",
		tech: ["HTML", "Tailwind CSS", "JavaScript"],
		imageUrl: cssFr,
		Body: [
			"CSS Frameworks CA is a small front-end project built as a course assignment to show practical use of a modern CSS framework. The site simulates a simple social-style platform with three main pages: a login page, a profile page, and a feed page. The login page is a demo interface using native HTML form validation, so it feels realistic even without a real backend. The profile page shows a mock user with follower stats, a follow button, and a responsive grid of post images. The feed page displays multiple posts with avatars, captions, and comments to create a familiar social media layout.",
			"The main focus of this project was responsive design and clean UI structure. The navigation adapts to different screen sizes with a desktop menu and a mobile burger menu, and there’s also a dark and light mode toggle that stores the user’s preference in localStorage. Post content is stored in a JavaScript data file and rendered dynamically into the feed using reusable template logic. This keeps the app interactive while still being a simple front-end project.",
			"Technically, the stack is intentionally lightweight. It uses HTML5 for structure, Tailwind CSS for utility-first styling, and vanilla JavaScript with ES modules for interactivity. Tailwind is customized with its own breakpoints, colors, and typography to give the design a more personal look while keeping consistency. For development, I used Node.js scripts to build the Tailwind output along with a local dev server and watch setup for faster iteration. Overall, this project shows how to build a responsive, multi-page interface using a modern CSS workflow and clean JavaScript, without relying on heavy frameworks or a backend.",
		],
		projectUrl: "https://css-frameworks-samal.netlify.app/feed/",
		githubUrl: "https://github.com/Samal-Ibrahim/css-frameworks-CA",
	},
	{
		id: 3,
		name: "Zeebra",
		description:
			"An e-commerce site built with React and TypeScript — live product data, search and sorting, a persistent cart, and a full checkout flow.",
		tech: ["TypeScript", "React", "React-Router", "Tailwind CSS", "Biome", "Vite", "Vitest"],
		imageUrl: jsFr,
		Body: [
			"Zeebra is a front-end e-commerce web app built to simulate a full online shopping experience, from browsing products to completing an order. When users land on the home page, they see a hero section and a product grid where items are fetched live from the Noroff Online Shop API. The catalog supports search and different sorting options like A–Z, Z–A, and price-based sorting, so it’s easy to go through larger product lists. Each product has its own detail page with more information and customer reviews. I also made sure the app handles loading and error states properly, so users see skeleton placeholders while data loads and clear error messages if something goes wrong. There’s a global cart panel where users can add products, update quantities, remove items, and keep their cart saved between sessions using localStorage. The checkout flow includes a shipping form, order review, dynamic price breakdown, and a success page that confirms the purchase and shows basic order details.",
			"On the technical side, the project is built with React 19 and TypeScript to keep components structured and type-safe. Routing is handled with React Router, and shared cart state is managed using React Context. Styling is done with Tailwind CSS for a responsive, utility-first layout. Notifications and feedback are shown using React Toastify. Data is fetched with the browser Fetch API from the Noroff v2 online shop endpoints. The app is bundled with Vite for fast development and optimized production builds. Code quality is maintained with Biome and ESLint, and parts of the form logic are tested using Vitest and React Testing Library. Overall, this project focuses on building a realistic e-commerce flow using a modern React setup, clean structure, and good user experience practices.",
		],
		projectUrl: "https://zeebra.netlify.app/",
		githubUrl: "https://github.com/NoroffFEU/jsfw-2025-v1-samal-jsframeworks",
	},
	{
		id: 4,
		name: "Auction House",
		description:
			"A marketplace where users register, create listings, and bid on auctions in real time — complete with profiles, credits, and win history.",
		tech: ["JavaScript", "Vite", "Tailwind CSS"],
		imageUrl: sp2,
		Body: [
			"This project is a modern frontend web app built as an Auction House platform where users can buy and sell items through time-based bidding. The idea was to create something that feels realistic, where users can register, log in, and manage their own profile with details like avatar, banner, and account credits. Once logged in, users can create their own auction listings with title, description, images, tags, and an end date. They can also edit or delete their listings when needed. Other users can browse all listings, search and filter through auctions, open a single listing page to see full details, and place bids until the auction expires. The profile page gives a clear overview of what the user has created, what they have bid on, and what they have won.",
			"From a technical side, the project is built using JavaScript with ES modules and a structured, modular setup. API logic, page logic, and utilities are separated properly to keep things clean and maintainable. Vite is used for development and production builds, and Tailwind CSS handles the styling with a responsive, utility-first approach. All data is fetched from the Noroff Auction API using the Fetch API, and localStorage is used to store session-related values like token, profile info, theme preference, and credits. I also used Flatpickr for date and time selection when creating listings, and Font Awesome for icons. The app includes practical improvements like route-based rendering, dark and light mode, simple in-memory caching for better performance, and UI elements that change based on authentication state. Overall, this project focuses on full user flows, solid API integration, and building a clean frontend architecture without relying on heavy frameworks.",
		],
		projectUrl: "https://action-house.netlify.app/",
		githubUrl: "https://github.com/Samal-Ibrahim/FED2-SP2-Auction-House",
	},
	{
		id: 5,
		name: "Holidaze",
		description:
			"A holiday booking platform where users browse venues, filter results, and book stays through a date-based flow with full auth support.",
		tech: ["JavaScript", "Vite", "Tailwind CSS", "React"],
		imageUrl: holidaze,
		Body: [
			"Holidaze is a front-end booking platform built to simulate a complete accommodation experience, from browsing venues to managing bookings. On the home page, users can explore a large list of venues shown as cards with key details like price per night, guest capacity, location info, and quick access to each venue page. The listing view supports filtering and pagination so it still feels usable even with a lot of results. Users can open individual venue pages to view more details and complete bookings through a date-based flow. Authentication is part of the core experience, with dedicated login and register routes, and the interface updates based on whether the user is signed in.",
			"On the technical side, the project is built with JavaScript and Vite using a modular ES module structure where API logic, page logic, and shared utilities are separated for maintainability. Styling is handled with Tailwind CSS to keep the layout responsive and consistent across pages. Data is fetched from the Holidaze API using the Fetch API, and localStorage is used for session-related data such as token, profile state, theme preference, and booking-related values. I also used Flatpickr for date selection in the booking flow and Font Awesome for iconography. The app includes practical UX improvements like route-based rendering, dark and light mode support, simple in-memory caching for faster repeated views, and auth-aware UI states. Overall, this project focuses on realistic booking flows, clean API integration, and structured front-end architecture without relying on heavy frameworks.",
		],
		projectUrl: "https://samal-holidaze.netlify.app/",
		githubUrl: "https://github.com/Samal-Ibrahim/PE2_Holidaze",
	},
	{
		id: 6,
		name: "Halkio Sushi",
		description:
			"Halkio Sushi is a Lithuania-based restaurant known for fresh, flavorful food. I recreated their single-page website from scratch, focusing on a clean layout and simple filtering functionality while ensuring the design stayed true to their brand identity.",
		tech: ["TypeScript", "Vite", "Tailwind CSS", "React-router", "Zustand"],
		imageUrl: halkio,
		Body: [
			"Built with React, Vite, TypeScript, Tailwind CSS and Zustand. Developed using AI-assisted tooling — I designed the architecture, made all technical decisions, reviewed and understood every line of code, and directed the implementation throughout.",
		],
		projectUrl: "https://halkio-sushi.netlify.app",
	},
]

export default projects
