import { useParams } from "react-router-dom"
import { Button, LoadingFailed } from "#src/components/index.js"
import projectData from "../projectData.js"

const DetailedProject = () => {
	const { id } = useParams<{ id: string }>()
	const projectId = Number(id)

	const project = projectData.find((project) => project.id === projectId)

	return (
		<div className="bg-[var(--color-content-bg)] p-4 transition-colors duration-300">
			<Button
				variant="secondary"
				onClick={() => {
					navigator.clipboard.writeText(window.location.href)
					const notification = document.createElement("div")
					notification.innerText = "URL copied to clipboard!"
					notification.className =
						"fixed bottom-4 right-4 bg-[var(--color-accent)] text-[var(--color-surface)] p-2 rounded"
					document.body.appendChild(notification)
					setTimeout(() => {
						document.body.removeChild(notification)
					}, 3000)
				}}
				className="mb-4"
			>
				Copy URL
			</Button>
			{project ? (
				<div className="flex flex-col justify-center items-center gap-4 min-h-screen ">
					<div className="w-full max-w-3xl mx-auto bg-[var(--color-surface)] border border-[var(--color-border-soft)] border-t-3 border-t-[var(--color-accent)] rounded shadow-md p-2">
						<img className="w-full h-full object-cover" src={project.imageUrl} alt={project.name} />
					</div>
					<h1 className="text-2xl font-bold">{project.name}</h1>
					<div className="max-w-3xl mx-auto flex flex-col gap-3 border-b border-[var(--color-gold)] pb-4">
						{project.Body.map((paragraph, index) => (
							<p
								key={`${project.id}-paragraph-${index}`}
								className="text-[var(--color-text-soft)] leading-7 text-base"
							>
								{paragraph}
							</p>
						))}
					</div>
				</div>
			) : (
				<LoadingFailed />
			)}
		</div>
	)
}

export default DetailedProject
