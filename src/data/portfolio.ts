export const HERO = {
	name: "Samal Ibrahim",
	tagline: "I carve clean, structured web applications out of raw code.",
	intro:
		"React & TypeScript, with real API integration — filtering and comparison flows, full checkout, booking, auth. Six finished products, all live.",
	facts: [
		{ value: "VI", label: "Shipped projects" },
		{ value: "Noroff", label: "Front-end, 2024—2026" },
		{ value: "CS50", label: "Harvard, 2026" },
	],
} as const

export const SHOW_PLATE_NUMBERS = true

export const CONTACT = {
	label: "V · Contact",
	heading: "Get in touch",
	body: "Questions about any of the work above, or the code behind it? I reply within a day.",
	cta: "Send a message",
	portraitCaption: "Front-end developer, Oslo. React, TypeScript and REST APIs.",
}

export const DETAILS = {
	email: "samal.ibrahim1999@gmail.com",
	phone: "+47 465 98 356",
	phoneHref: "tel:+4746598356",
	linkedin: "https://linkedin.com/in/samal-ibrahim",
	github: "https://github.com/samal-ibrahim",
} as const

export const SKILL_GROUPS = [
	{
		title: "Core stack",
		level: "daily",
		items: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "Vite", "HTML5", "CSS3"],
	},
	{
		title: "State & data",
		level: "confident",
		items: ["REST APIs", "TanStack Query", "React Context", "Zustand", "JWT auth", "localStorage"],
	},
	{
		title: "Tooling & foundations",
		level: "working knowledge",
		items: ["Git", "Biome", "Vitest", "Figma", "Node.js", "SQL", "C"],
	},
] as const

export const ROLES = [
	{
		title: "AV Installation & Technical Setup",
		company: "Evercom AS, Oslo",
		dates: "June 2025 — Present",
		bullets: [
			"Install and configure screens, meeting-room panels and audio systems",
			"Work solo and in teams on client sites, troubleshooting live issues",
			"Plan tasks to hit fixed delivery deadlines",
		],
	},
	{
		title: "Operations & Maintenance",
		company: "Kongsberg Automotive, Raufoss",
		dates: "Sept 2021 — May 2025",
		bullets: [
			"Maintained and operated automated production lines",
			"Problem-solving in time-sensitive production environments",
			"Team work focused on quality and precision",
		],
	},
] as const

export const EDUCATION = [
	{
		title: "Front-End Development",
		meta: "Noroff · 2024—2026",
		note: "React, TypeScript, modern web development and API integration.",
	},
	{
		title: "CS50: Introduction to Computer Science",
		meta: "Harvard University · February 2026",
		note: "C and memory, data structures and algorithms, SQL, Flask, auth and sessions.",
	},
	{
		title: "ICT with University Admission Qualification",
		meta: "Gjøvik Upper Secondary School · 2019—2022",
		note: "Foundation in networks, hardware and general studies.",
	},
] as const
