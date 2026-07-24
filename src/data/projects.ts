import projectData from "#src/projectData.js"

/**
 * Extra presentation fields layered on top of projectData by id,
 * so projectData.ts stays the single source of truth for content.
 */
type ProjectMeta = {
	featured?: boolean
	plate?: string
	/** Short card copy — one line, what it is */
	blurb?: string
	/** Featured card only */
	caseSummary?: string
	role?: string
	hardPart?: string
}

const meta: Record<number, ProjectMeta> = {
	1: {
		featured: true,
		plate: "Plate I",
		caseSummary:
			"Buying a used car means comparing dozens of near-identical listings. GearUp makes the comparison the product: filter by deal type, monthly budget and model year, then sort to a shortlist in a few clicks.",
		role: "Design & front-end build",
		hardPart: "Composable filter + sort state that stays shareable",
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

/** Display order on the home page: featured first, then plates II — VI. */
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
