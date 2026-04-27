import { Link } from "react-router-dom"
import projectData from "../projectData.js"

export default function Projects() {
	return (
		<div className="flex flex-col gap-5 w-full mt-8">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
				{projectData.map((project) => (
					<div
						key={project.id}
						className="group relative flex flex-col rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white"
					>
						{/* Image with overlay on hover */}
						<div className="relative overflow-hidden h-48">
							<img
								src={project.imageUrl}
								alt={project.name}
								className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
							/>
							<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
						</div>

						{/* Card body */}
						<div className="flex flex-col flex-1 gap-3 p-4">
							<div className="flex flex-col gap-1">
								<h3 className="font-semibold text-text">{project.name}</h3>
								<p className="text-sm text-gray-500 leading-relaxed">{project.description}</p>
							</div>

							{/* Tech tags */}
							<div className="flex flex-wrap gap-1.5 mt-auto pt-2">
								{project.tech.map((tag) => (
									<span
										key={tag}
										className="px-2 py-0.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
									>
										{tag}
									</span>
								))}
							</div>
						</div>

						{/* Card footer — links */}
						<div className="flex items-center gap-2 px-4 py-3 border-t border-gray-100 bg-gray-50">
							<Link
								to={`/projects/${project.id}`}
								className="flex-1 text-center text-sm font-semibold py-1.5 rounded bg-primary text-white hover:bg-accent transition-colors duration-200"
							>
								View Details
							</Link>
							<a
								href={project.projectUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="flex-1 text-center text-sm font-semibold py-1.5 rounded border border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-200"
							>
								Live Site
							</a>
							{project.githubUrl && (
								<a
									href={project.githubUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="p-1.5 rounded border border-gray-200 text-gray-500 hover:border-primary hover:text-primary transition-colors duration-200"
									aria-label={`GitHub repository for ${project.name}`}
									title="View on GitHub"
								>
									{/* Simple GitHub icon using SVG */}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										viewBox="0 0 24 24"
										fill="currentColor"
										aria-hidden="true"
									>
										<path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
									</svg>
								</a>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
