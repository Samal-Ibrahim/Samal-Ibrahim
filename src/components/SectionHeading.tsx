type SectionHeadingProps = {
	index: string
	title: string
	note?: string
}

export default function SectionHeading({ index, title, note }: SectionHeadingProps) {
	return (
		<div className="flex  2xs:flex-col md:flex-row justify-between items-baseline gap-4 ">
			<div className="flex items-baseline gap-4 ">
				<span className="font-[family-name:var(--font-family-heading)] text-[15px] tracking-wider text-gold">
					{index}
				</span>
				<h2 className="whitespace-nowrap text-[34px]">{title}</h2>
			</div>
			<span className="block h-px flex-1 bg-border-soft" />
			{note && <span className="inscription whitespace-nowrap">{note}</span>}
		</div>
	)
}
