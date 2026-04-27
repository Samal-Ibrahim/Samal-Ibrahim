import { useState } from "react"
import Button from "#src/components/Button.js"

type FormState = "idle" | "submitting" | "success" | "error"

export default function Contact() {
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [message, setMessage] = useState("")
	const [formState, setFormState] = useState<FormState>("idle")

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setFormState("submitting")

		try {
			const res = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					access_key: import.meta.env.VITE_WEB3FORMS_KEY,
					name,
					email,
					message,
				}),
			})

			if (res.ok) {
				setFormState("success")
				setName("")
				setEmail("")
				setMessage("")
			} else {
				setFormState("error")
			}
		} catch {
			setFormState("error")
		}
	}

	return (
		<div className="flex flex-col justify-center items-center min-h-screen px-4">
			<div className="bg-white p-8 rounded-md shadow-md w-full max-w-lg flex flex-col gap-6">
				<div>
					<h1 className="font-bold text-text">Contact</h1>
					<p className="text-sm text-gray-500 mt-1">
						Fill out the form and I'll get back to you.
					</p>
				</div>

				{formState === "success" ? (
					<div className="flex flex-col gap-4 items-start py-4">
						<p className="text-primary font-semibold">Message sent — thanks for reaching out!</p>
						<p className="text-sm text-gray-500">I'll get back to you as soon as I can.</p>
						<button
							type="button"
							onClick={() => setFormState("idle")}
							className="text-sm text-primary hover:underline"
						>
							Send another message
						</button>
					</div>
				) : (
					<form onSubmit={handleSubmit} className="flex flex-col gap-4">
						<div className="flex flex-col gap-1">
							<label htmlFor="name" className="text-sm font-medium text-gray-700">
								Name
							</label>
							<input
								id="name"
								type="text"
								className="input"
								placeholder="Your name"
								value={name}
								onChange={(e) => setName(e.target.value)}
								required
								disabled={formState === "submitting"}
							/>
						</div>

						<div className="flex flex-col gap-1">
							<label htmlFor="email" className="text-sm font-medium text-gray-700">
								Email
							</label>
							<input
								id="email"
								type="email"
								className="input"
								placeholder="your@email.com"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
								disabled={formState === "submitting"}
							/>
						</div>

						<div className="flex flex-col gap-1">
							<label htmlFor="message" className="text-sm font-medium text-gray-700">
								Message
							</label>
							<textarea
								id="message"
								className="input resize-none"
								placeholder="What's on your mind?"
								rows={5}
								value={message}
								onChange={(e) => setMessage(e.target.value)}
								required
								disabled={formState === "submitting"}
							/>
						</div>

						{formState === "error" && (
							<p className="text-sm text-red-500">
								Something went wrong. Please try again or email me directly.
							</p>
						)}

						<Button
							type="submit"
							variant="primary"
							disabled={formState === "submitting"}
							className="mt-2"
						>
							{formState === "submitting" ? "Sending…" : "Send Message"}
						</Button>
					</form>
				)}

				{/* Direct contact fallback */}
				<div className="border-t border-gray-100 pt-4 flex flex-col gap-1">
					<p className="text-xs text-gray-400 mb-2">Or reach me directly:</p>
					<a
						href="mailto:samal.ibrahim1999@gmail.com"
						className="text-sm text-gray-600 hover:text-primary transition-colors"
					>
						samal.ibrahim1999@gmail.com
					</a>
					<a
						href="https://linkedin.com/in/samal-ibrahim"
						target="_blank"
						rel="noopener noreferrer"
						className="text-sm text-gray-600 hover:text-primary transition-colors"
					>
						linkedin.com/in/samal-ibrahim
					</a>
					<a
						href="https://github.com/samal-ibrahim"
						target="_blank"
						rel="noopener noreferrer"
						className="text-sm text-gray-600 hover:text-primary transition-colors"
					>
						github.com/samal-ibrahim
					</a>
				</div>
			</div>
		</div>
	)
}