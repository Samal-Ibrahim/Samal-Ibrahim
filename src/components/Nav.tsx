import { Link } from "react-router-dom"
import ThemeToggle from "#src/components/ThemeToggle.js"

const links = [
	{ to: "/#works", label: "Works" },
	{ to: "/#about", label: "About" },
	{ to: "/#background", label: "Background" },
	{ to: "/contact", label: "Contact" },
]

export const Nav = () => {
	return (
		<nav className="sticky top-0 z-30 border-b-2 border-[var(--color-border-strong)] bg-[var(--color-bg-nav)] transition-colors duration-300">
			<div className="mx-auto flex w-full max-w-[1180px] items-center justify-between gap-6 px-10 py-3.5 lg:px-8 md:px-6 sm:px-5 2xs:px-4">
				<Link to="/" className="flex items-center gap-3">
					<span className="monogram px-2.5 py-1.5 text-xl" aria-hidden="true">
						S
					</span>
					<span className="font-[family-name:var(--font-family-heading)] text-[19px] tracking-wide text-[var(--color-text)]">
						Samal Ibrahim
					</span>
				</Link>
				<ul className="flex items-center gap-1">
					{links.map((link, i) => (
						<li key={link.to} className="flex items-center gap-1">
							{i > 0 && (
								<span aria-hidden="true" className="text-[10px] text-[var(--color-gold)]">
									◆
								</span>
							)}
							<Link
								to={link.to}
								className="px-3 py-1.5 text-[15px] text-[var(--color-text)] transition-colors hover:text-[var(--color-accent)]"
							>
								{link.label}
							</Link>
						</li>
					))}
					<li className="ml-3">
						<a
							href="/#cv"
							className="rounded bg-[var(--color-accent)] px-4.5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.06em] text-[var(--color-surface)] transition-colors hover:bg-[var(--color-accent-hover)]"
						>
							Curriculum vitae
						</a>
					</li>
					<li className="ml-2.5">
						<ThemeToggle />
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Nav
