import { SHOW_PLATE_NUMBERS } from "#src/data/portfolio.js"
import type { Project } from "#src/data/projects.js"

export default function FeaturedProject({ project }: { project: Project }) {
	return (
		<article className="grid grid-cols-1 border border-[var(--color-border-soft)] border-t-3 border-t-[var(--color-accent)] bg-[var(--color-content-bg)] md:grid-cols-[1.2fr_1fr]">
			<div className="flex p-3">
				<img
					src={project.imageUrl}
					alt={project.name}
					className="h-full min-h-[380px] w-full border border-[var(--color-border-soft)] object-cover object-left-top"
				/>
			</div>
			<div className="flex flex-col justify-center gap-4.5 py-10 pr-10 pl-7 2xs:px-5 2xs:py-8">
				<span className="inscription text-[var(--color-gold)]">
					{SHOW_PLATE_NUMBERS ? "Plate I · Featured" : "Featured"}
				</span>
				<h3 className="text-[30px]">{project.name}</h3>
				<p className="text-[15px] leading-relaxed text-[var(--color-text-muted)]">
					{project.caseSummary ?? project.description}
				</p>
				{project.role && project.hardPart && (
					<dl className="grid grid-cols-[auto_1fr] gap-x-5 gap-y-2 border-t border-[var(--color-border-soft)] pt-2 text-sm">
						<dt className="inscription pt-2.5">Role</dt>
						<dd className="pt-2 text-[var(--color-text)]">{project.role}</dd>
						<dt className="inscription">Hard part</dt>
						<dd className="text-[var(--color-text)]">{project.hardPart}</dd>
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
						className="border-b border-[var(--color-gold)] pb-0.5 text-sm font-semibold text-[var(--color-accent)] hover:text-[var(--color-accent-hover)]"
					>
						Visit live site
					</a>
					{project.githubUrl && (
						<a
							href={project.githubUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="text-sm font-semibold text-[var(--color-text-soft)] hover:text-[var(--color-accent)]"
						>
							Code
						</a>
					)}
				</div>
			</div>
		</article>
	)
}
