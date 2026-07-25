import { SHOW_PLATE_NUMBERS } from "#src/data/portfolio.js"
import type { Project } from "#src/data/projects.js"

export default function FeaturedProject({ project }: { project: Project }) {
	return (
		<article className="grid grid-cols-1 border border-border-soft border-t-3 border-t-accent bg-content-bg md:grid-cols-[1.2fr_1fr]">
			<div className="flex p-3">
				<img
					src={project.imageUrl}
					alt={project.name}
					className="h-full min-h-[380px] w-full border border-border-soft object-cover object-left-top"
				/>
			</div>
			<div className="flex flex-col justify-center gap-4.5 py-10 pr-10 pl-7 2xs:px-5 2xs:py-8">
				<span className="inscription text-gold">
					{SHOW_PLATE_NUMBERS ? "Plate I · Featured" : "Featured"}
				</span>
				<h3 className="text-[30px]">{project.name}</h3>
				<p className="text-[15px] leading-relaxed text-text-muted">
					{project.caseSummary ?? project.description}
				</p>
				{project.role && (
					<dl className="grid grid-cols-[auto_1fr] gap-x-5 gap-y-2 border-t border-border-soft pt-2 text-sm">
						<dt className="inscription pt-2.5">Role</dt>
						<dd className="pt-2 text-text">{project.role}</dd>
					</dl>
				)}
				<div className="flex flex-wrap gap-2">
					{project.tech.map((tech) => (
						<span key={tech} className="chip">
							{tech}
						</span>
					))}
				</div>
				<div className="flex gap-5.5 pt-1.5">
					<a
						href={project.projectUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="border-b border-gold pb-0.5 text-sm font-semibold text-accent hover:text-accent-hover"
					>
						Visit live site
					</a>
					{project.backendUrl && (
						<a
							href={project.backendUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="text-sm font-semibold text-text-soft hover:text-accent"
						>
							Backend
						</a>
					)}
					{project.frontendUrl && (
						<a
							href={project.frontendUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="text-sm font-semibold text-text-soft hover:text-accent"
						>
							Frontend
						</a>
					)}
				</div>
			</div>
		</article>
	)
}
