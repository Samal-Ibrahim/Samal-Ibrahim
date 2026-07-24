export default function Contact() {
	return (
		<div className="flex flex-col justify-center items-center min-h-screen">
			<div className="bg-[var(--color-surface)] border border-[var(--color-border-soft)] border-t-3 border-t-[var(--color-accent)] p-8 rounded shadow-md w-full max-w-lg flex flex-col gap-6 transition-colors duration-300">
				<h1 className="mb-4 font-bold text-text">Contact</h1>
				<p className="mb-8 italic text-[var(--color-text-muted)]">Get in touch.</p>
				<ul className="text-lg flex flex-col gap-2 bg-[var(--color-surface-2)] p-8 rounded">
					<li>ibrahim.samal1999@gmail.com</li>
					<li>+47 465 98 356</li>
					<li>
						LinkedIn:{" "}
						<a
							href="https://linkedin.com/in/samal-ibrahim"
							target="_blank"
							rel="noopener noreferrer"
							className="text-accent border-b border-[var(--color-gold)] hover:text-[var(--color-accent-hover)]"
						>
							linkedin.com/in/samal-ibrahim
						</a>
					</li>
					<li>
						GitHub:{" "}
						<a
							href="https://github.com/samal-ibrahim"
							target="_blank"
							rel="noopener noreferrer"
							className="text-accent border-b border-[var(--color-gold)] hover:text-[var(--color-accent-hover)]"
						>
							github.com/samal-ibrahim
						</a>
					</li>
				</ul>
			</div>
		</div>
	)
}
