import { SHOW_PLATE_NUMBERS } from "#src/data/portfolio.js"
import { otherProjects } from "#src/data/projects.js"

/** The plate grid — every project except the featured one. */
export default function Projects() {
	const projects = otherProjects

	return (
		<div className="grid w-full grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
			{projects.map((project) => (
				<article
					key={project.id}
					className="flex flex-col gap-3.5 border border-[var(--color-border-soft)] bg-[var(--color-content-bg)] p-3 pb-5 transition-shadow duration-200 hover:border-[var(--color-gold)] hover:shadow-md"
				>
					<img
						src={project.imageUrl}
						alt={project.name}
						className="h-44 w-full border border-[var(--color-border-soft)] bg-[var(--color-surface)] object-cover object-top"
					/>
					<div className="flex flex-1 flex-col gap-2.5 px-2">
						<div className="flex items-baseline justify-between gap-3">
							<h3 className="text-[21px]">{project.name}</h3>
							{SHOW_PLATE_NUMBERS && project.plate && (
								<span className="inscription whitespace-nowrap text-[0.66rem] text-[var(--color-gold)]">
									{project.plate}
								</span>
							)}
						</div>
						<p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
							{project.blurb ?? project.description}
						</p>
						<div className="mt-auto flex flex-wrap gap-1.5 pt-1.5">
							{project.tech.slice(0, 3).map((tech) => (
								<span
									key={tech}
									className="rounded border border-[var(--color-border-soft)] px-2 py-0.5 text-[11.5px] font-medium text-[var(--color-text-muted)]"
								>
									{tech}
								</span>
							))}
						</div>
						<div className="mt-1 flex gap-4.5 border-t border-[var(--color-border-soft)] pt-3">
							<a
								href={project.projectUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="text-[13px] font-semibold text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] hover:underline"
							>
								Live site
							</a>
							{project.githubUrl && (
								<a
									href={project.githubUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="text-[13px] font-semibold text-[var(--color-text-soft)] hover:text-[var(--color-accent)]"
								>
									Code
								</a>
							)}
						</div>
					</div>
				</article>
			))}
		</div>
	)
}
