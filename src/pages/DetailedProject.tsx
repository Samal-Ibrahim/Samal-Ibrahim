import { useNavigate, useParams } from "react-router-dom"
import projectData from "../projectData.js"

const DetailedProject = () => {
	const { id } = useParams<{ id: string }>()
	const navigate = useNavigate()
	const projectId = Number(id)

	const project = projectData.find((project) => project.id === projectId)

	if (!project) {
		return (
			<div className="flex flex-col justify-center items-center min-h-screen gap-4">
				<p className="text-gray-500">Project not found.</p>
				<button
					type="button"
					onClick={() => navigate(-1)}
					className="text-sm font-semibold text-primary hover:underline"
				>
					← Go back
				</button>
			</div>
		)
	}

	return (
		<div className="max-w-3xl mx-auto px-4 py-10 flex flex-col gap-8">

			{/* Back button */}
			<button
				type="button"
				onClick={() => navigate(-1)}
				className="self-start flex items-center gap-1.5 text-sm text-gray-500 hover:text-primary transition-colors duration-200"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					aria-hidden="true"
				>
					<path d="M19 12H5M12 5l-7 7 7 7" />
				</svg>
				Back to projects
			</button>

			{/* Hero image */}
			<div className="w-full rounded-lg overflow-hidden shadow-md">
				<img
					src={project.imageUrl}
					alt={project.name}
					className="w-full object-cover"
				/>
			</div>

			{/* Title + meta */}
			<div className="flex flex-col gap-4">
				<h1 className="text-3xl font-bold text-text">{project.name}</h1>
				<p className="text-gray-500 text-base leading-relaxed">{project.description}</p>

				{/* Tech tags */}
				<div className="flex flex-wrap gap-2">
					{project.tech.map((tag) => (
						<span
							key={tag}
							className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
						>
							{tag}
						</span>
					))}
				</div>

				{/* Action links */}
				<div className="flex gap-3 pt-1">
					<a
						href={project.projectUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="px-5 py-2 text-sm font-semibold rounded bg-primary text-white hover:bg-accent transition-colors duration-200"
					>
						View Live Site
					</a>
					{project.githubUrl && (
						<a
							href={project.githubUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="px-5 py-2 text-sm font-semibold rounded border border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-200"
						>
							View on GitHub
						</a>
					)}
				</div>
			</div>

			{/* Body text */}
			<div className="flex flex-col gap-5 border-t border-gray-100 pt-6">
				{project.Body.map((paragraph, index) => (
					<p
						key={`${project.id}-paragraph-${index}`}
						className="text-gray-700 leading-7 text-base"
					>
						{paragraph}
					</p>
				))}
			</div>

		</div>
	)
}

export default DetailedProject
