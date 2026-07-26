export default function Contact() {
	return (
		<div className="flex items-center justify-center min-h-screen px-4">
			<div className="w-full max-w-md">
				{/* Header */}
				<div className="mb-8">
					<h1 className="text-3xl font-bold">Get in touch</h1>
					<div className="mt-2 h-1 w-12 bg-accent rounded-full" />
				</div>

				{/* Contact card */}
				<div className="bg-surface border border-border-soft rounded-lg p-8 shadow-sm space-y-6">
					{/* Email */}
					<div>
						<p className="text-sm text-text-muted mb-1 uppercase tracking-wide">Email</p>
						<a
							href="mailto:ibrahim.samal1999@gmail.com"
							className="text-base hover:text-accent transition-colors"
						>
							samal.ibrahim.1999@gmail.com
						</a>
					</div>

					{/* Phone */}
					<div>
						<p className="text-sm text-text-muted mb-1 uppercase tracking-wide">Phone</p>
						<a href="tel:+4746598356" className="text-base hover:text-accent transition-colors">
							+47 465 98 356
						</a>
					</div>

					{/* Divider */}
					<div className="border-t border-border-soft" />

					{/* Social links */}
					<div className="space-y-3">
						<a
							href="https://linkedin.com/in/samal-ibrahim"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 text-base text-accent hover:text-accent-hover transition-colors"
						>
							LinkedIn
							<span className="text-text-muted">↗</span>
						</a>
						<a
							href="https://github.com/samal-ibrahim"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 text-base text-accent hover:text-accent-hover transition-colors"
						>
							GitHub
							<span className="text-text-muted">↗</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}
