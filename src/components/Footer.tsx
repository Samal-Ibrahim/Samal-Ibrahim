const Footer = () => {
	return (
		<footer className="border-t-2 border-[var(--color-border-strong)] bg-[var(--color-bg-nav)] px-10 py-6.5 transition-colors duration-300 lg:px-8 md:px-6 sm:px-5 2xs:px-4">
			<div className="mx-auto flex max-w-[1180px] items-center justify-between gap-6">
				<span className="font-[family-name:var(--font-family-heading)] text-[15px] text-[var(--color-text-muted)]">
					Samal Ibrahim · MMXXVI
				</span>
				<span className="text-[13px] text-[var(--color-text-soft)]">
					React · TypeScript · Tailwind CSS
				</span>
			</div>
		</footer>
	)
}

export default Footer
