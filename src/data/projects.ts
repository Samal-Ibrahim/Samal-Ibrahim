import projectData from "#src/projectData.js"

type ProjectMeta = {
	featured?: boolean
	plate?: string
	blurb?: string
	caseSummary?: string
	role?: string
	frontendUrl?: string
	backendUrl?: string
}

const meta: Record<number, ProjectMeta> = {
	1: {
		featured: true,
		plate: "Plate I",
		caseSummary:
			"Buying a used car means comparing dozens of near-identical listings. GearUp makes the comparison the product: filter by deal type, monthly budget and model year, then sort to a shortlist in a few clicks.",
		role: "Design, back-end & front-end build",
		backendUrl: "https://github.com/Samal-Ibrahim/gearup-server",
		frontendUrl: "https://github.com/Samal-Ibrahim/gearup-client"
	},
	5: {
		plate: "Plate II",
		blurb: "Accommodation booking with date-based flows, filtering, pagination and auth-aware UI.",
	},
	3: {
		plate: "Plate III",
		blurb: "E-commerce end to end: live catalogue, search and sort, persisted cart, full checkout.",
	},
	4: {
		plate: "Plate IV",
		blurb:
			"Time-based bidding marketplace with profiles, credits and listing CRUD on the Noroff API.",
	},
	6: {
		plate: "Plate V",
		blurb: "Restaurant single-pager rebuilt from scratch with menu filtering, true to the brand.",
	},
	2: {
		plate: "Plate VI",
		blurb:
			"Responsive multi-page social UI: dark mode, mobile nav, feed rendered from a data layer.",
	},
}

const order = [1, 5, 3, 4, 6, 2]

export type Project = (typeof projectData)[number] & ProjectMeta

export const projects: Project[] = order
	.map((id) => {
		const project = projectData.find((entry) => entry.id === id)
		return project ? { ...project, ...meta[id] } : null
	})
	.filter(Boolean) as Project[]

export const featuredProject = projects.find((project) => project.featured) ?? projects[0]
export const otherProjects = projects.filter((project) => !project.featured)
