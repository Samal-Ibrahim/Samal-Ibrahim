import { useInView } from "#src/hooks/useInView.ts"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
	id: string
	children: React.ReactNode
}

export const Section = ({ id, children, className = "", ...props }: SectionProps) => {
	const { ref, isInView } = useInView({ threshold: 0.5 })

	return (
		<section
			ref={ref}
			id={id}
			className={`transition-colors duration-500 container ${
				isInView ? "bg-section-hover" : ""
			} ${className}`}
			{...props}
		>
			{children}
		</section>
	)
}
