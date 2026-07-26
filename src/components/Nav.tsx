import { Link } from "react-router-dom"
import ThemeToggle from "#src/components/ThemeToggle.js"

const links = [{ to: "/contact", label: "Contact" }]

export const Nav = () => {
	return (
		<nav className="sticky top-0 z-30 border-b-2 border-border-strong bg-bg-nav transition-colors duration-300">
			<div className="mx-auto flex w-full max-w-[1180px] items-center justify-between gap-6 px-10 py-3.5 lg:px-8 md:px-6 sm:px-5 2xs:px-4  2xs:flex-col-reverse md:flex-row">
				<Link to="/" className="flex items-center gap-3">
					<span className="monogram px-2.5 py-1.5 text-xl" aria-hidden="true">
						S
					</span>
					<span className="font-[family-name:var(--font-family-heading)] text-[19px] tracking-wide text-text">
						Samal Ibrahim
					</span>
				</Link>
				<ul className="2xs:flex 2xs:justify-center md:justify-end items-center gap-1 ">
					{links.map((link, i) => (
						<li key={link.to} className="flex items-center gap-1">
							{i > 0 && (
								<span aria-hidden="true" className="text-[10px] text-gold">
									◆
								</span>
							)}
							<Link
								to={link.to}
								className="px-3 py-1.5 text-[15px] text-text transition-colors hover:text-accent"
							>
								{link.label}
							</Link>
						</li>
					))}
					<li className="ml-3">
						<a
							href="/#cv"
							className="rounded bg-accent px-4.5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.06em] text-surface transition-colors hover:bg-accent-hover"
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
