import { Link, useLocation } from "react-router-dom"

export const Nav = () => {
	const { pathname } = useLocation()
	const navItems = [
		{ to: "/", label: "Home" },
		{ to: "/contact", label: "Contact" },
	]

	const linkClass =
		"inline-flex items-center rounded-md px-4 py-1.5 text-sm font-semibold transition-all duration-200"

	const activeLinkClass = "bg-primary text-white shadow-sm ring-1 ring-white/25"
	const inactiveLinkClass = "text-white/85 hover:bg-white/12 hover:text-white"

	return (
		<nav className="rounded-b-md border-b border-primary/35 bg-bg-nav shadow-md">
			<div className="mx-auto flex w-full flex-col items-center justify-between gap-3 px-4 py-3 sm:flex-row sm:px-5 md:px-6 lg:px-8">
				<Link
					to="/"
					className="group flex items-center gap-2 rounded-md px-2 py-1 transition-colors duration-200 hover:bg-white/10"
				>
					<span className="h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_10px_rgba(110,69,161,0.75)]" />
					<div className="flex flex-col leading-none">
						<span className="text-[0.62rem] uppercase tracking-[0.22em] text-white/70 transition-colors group-hover:text-white/90">
							Portfolio
						</span>
						<span className="text-sm font-semibold tracking-wide text-white sm:text-base">
							Samal Ibrahim
						</span>
					</div>
				</Link>

				<ul className="flex items-center gap-2 rounded-md bg-white/10 p-1.5 shadow-sm ring-1 ring-white/15">
					{navItems.map((item) => (
						<li key={item.to}>
							<Link
								className={`${linkClass} ${pathname === item.to ? activeLinkClass : inactiveLinkClass}`}
								to={item.to}
							>
								{item.label}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	)
}

export default Nav
