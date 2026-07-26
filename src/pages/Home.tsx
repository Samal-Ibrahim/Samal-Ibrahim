import samalIbrahim from "#src/assets/samal-ibrahim.png"
import FeaturedProject from "#src/components/FeaturedProject.js"
import Projects from "#src/components/Projects.js"
import { Section } from "#src/components/Section.tsx"
import SectionHeading from "#src/components/SectionHeading.js"

import {
	CONTACT,
	DETAILS,
	EDUCATION,
	HERO,
	ROLES,
	SHOW_PLATE_NUMBERS,
	SKILL_GROUPS,
} from "#src/data/portfolio.js"
import { featuredProject } from "#src/data/projects.js"

const cvFile = new URL("../assets/Samal-Ibrahim-cv.pdf", import.meta.url).href

export default function Home() {
	return (
		<div className="mx-auto flex container flex-col gap-22 px-10 pb-26 lg:px-8 md:px-6 sm:px-5 2xs:gap-14 2xs:px-4 ">
			{/* Hero */}
			<Section
				id="top"
				className="grid grid-cols-1 items-start gap-18 pt-22 p-8 lg:grid-cols-[minmax(0,1fr)_340px] 2xs:gap-10 2xs:pt-12 hover:bg-section-hover section-hover"
			>
				<div className="flex flex-col items-start gap-7 pt-3">
					<div className="flex items-center gap-3">
						<span className="inscription">Front-end developer</span>
						<span aria-hidden="true" className="text-[9px] text-gold">
							◆
						</span>
						<span className="inscription">Oslo, Norway</span>
					</div>
					<div className="flex flex-col gap-5.5">
						<h1 className="hero-name text-[68px] 2xs:text-[44px]">{HERO.name}</h1>
						<span className="block h-0.5 w-21 bg-gold" />
						<p className="max-w-[30ch] font-[family-name:var(--font-family-heading)] text-[25px] leading-snug italic">
							{HERO.tagline}
						</p>
						<p className="max-w-[46ch] leading-relaxed text-text-muted">{HERO.intro}</p>
					</div>
					<div className="flex flex-wrap items-center gap-3.5 pt-1">
						<a
							href="#works"
							className="rounded bg-accent px-6.5 py-3.5 text-[13px] font-semibold uppercase tracking-[0.07em] text-surface transition-colors hover:bg-accent-hover"
						>
							See the works
						</a>
						<a
							href={`mailto:${DETAILS.email}`}
							className="rounded border border-border-soft bg-surface px-6.5 py-3.5 text-[13px] font-semibold uppercase tracking-[0.07em] text-text transition-colors hover:border-accent hover:text-accent"
						>
							Get in touch
						</a>
					</div>
					<ul className="mt-2 justify-center flex w-full flex-wrap 2xs:flex-col 2xs:items-center gap-10 border-t border-border-soft pt-5 sm:flex-row lg:gap-5 xl:gap-10 ">
						{HERO.facts.map((fact) => (
							<li key={fact.label} className="flex flex-col 2xs:items-center gap-0.5 pt-5">
								<span className="font-[family-name:var(--font-family-heading)] text-[27px]">
									{fact.value}
								</span>
								<span className="inscription text-[0.68rem]">{fact.label}</span>
							</li>
						))}
					</ul>
				</div>

				<figure className="m-0 flex flex-col gap-3.5">
					<div className="border border-color-gold max-w-80 p-2.5 bg-surface mx-auto">
						<img
							src={samalIbrahim}
							alt="Samal Ibrahim"
							className="h-80 w-full object-cover object-[center_50%] "
						/>
					</div>
					<figcaption className="flex flex-col gap-1 pl-0.5">
						<span className="font-[family-name:var(--font-family-heading)] text-[17px]">
							{HERO.name}
						</span>
						<span className="text-[12.5px] leading-normal text-text-soft">
							{CONTACT.portraitCaption}
						</span>
					</figcaption>
				</figure>
			</Section>

			{/* I — Selected work (featured only) */}
			<Section
				id="works"
				className="flex flex-col gap-9 scroll-mt-23 p-8 hover:bg-section-hover section-hover"
			>
				<SectionHeading
					index="I"
					title="Selected work"
					note={SHOW_PLATE_NUMBERS ? "Plate I" : undefined}
				/>
				<FeaturedProject project={featuredProject} />
			</Section>

			{/* II — About me + skills */}
			<Section
				id="about"
				className="grid grid-cols-1 gap-16 scroll-mt-23 lg:grid-cols-[minmax(0,1fr)_420px] p-8 hover:bg-section-hover"
			>
				<div className="flex flex-col gap-5.5">
					<SectionHeading index="II" title="About me" />
					<p className="text-[16.5px] leading-loose">
						<span
							aria-hidden="true"
							className="float-left mt-1 mr-3 font-[family-name:var(--font-family-heading)] text-[58px] leading-[0.82] text-accent"
						>
							I
						</span>
						'm a front-end developer focused on React and TypeScript. I like applications with real
						data behind them: clear flows, honest loading and error states. I also enjoy the other
						side — building APIs and working with databases.
					</p>
					<p className="leading-loose text-text-muted">
						I am currently working in technical installation and production maintenance — on-site
						troubleshooting, tight deadlines, no room for guesswork. That's where the debugging
						patience came from.
					</p>
					<ul className="mt-1.5 flex flex-col gap-2.5 border-t border-border-soft pt-2.5">
						{["Norwegian, English and Kurdish", "Based in Oslo, comfortable fully remote"].map(
							(item) => (
								<li key={item} className="flex gap-3 pt-2.5 text-[15px] text-text-muted">
									<span aria-hidden="true" className="pt-1.5 text-[9px] text-gold">
										◆
									</span>
									{item}
								</li>
							)
						)}
					</ul>
				</div>
				<div className="flex flex-col gap-4.5">
					<span className="inscription">The instruments</span>
					{SKILL_GROUPS.map((group) => (
						<div
							key={group.title}
							className="flex flex-col gap-3.5 border border-border-soft bg-surface px-5.5 py-5"
						>
							<div className="flex items-baseline justify-between gap-3">
								<h3 className="text-[19px]">{group.title}</h3>
								<span className="font-[family-name:var(--font-family-heading)] text-sm italic text-text-soft">
									{group.level}
								</span>
							</div>
							<div className="flex flex-wrap gap-1.5">
								{group.items.map((item) => (
									<span key={item} className="chip">
										{item}
									</span>
								))}
							</div>
						</div>
					))}
				</div>
			</Section>

			{/* III — The rest of the work */}
			<Section
				id="works-all"
				className="flex flex-col gap-8 scroll-mt-23 hover:bg-section-hover p-8 section-hover"
			>
				<SectionHeading
					index="III"
					title="The rest of the work"
					note={SHOW_PLATE_NUMBERS ? "Plates II — VI" : undefined}
				/>
				<Projects />
			</Section>

			{/* IV — Experience & study */}
			<Section
				id="background"
				className="flex flex-col gap-8 scroll-mt-23 hover:bg-section-hover p-8 section-hover"
			>
				<SectionHeading index="IV" title="Experience &amp; study" />
				<div className="grid grid-cols-1 gap-13 md:grid-cols-2">
					<div className="flex flex-col gap-6.5">
						<span className="inscription">Experience</span>
						{ROLES.map((role) => (
							<div key={role.title} className="grid grid-cols-[11px_1fr] gap-4.5">
								<div className="flex flex-col items-center pt-1.5">
									<span aria-hidden="true" className="block h-2 w-2 rotate-45 bg-gold" />
									<span className="mt-2 block w-px flex-1 bg-border-soft" />
								</div>
								<div className="flex flex-col gap-2.5 pb-3">
									<div className="flex flex-col gap-0.5">
										<h3 className="text-[21px]">{role.title}</h3>
										<p className="font-[family-name:var(--font-family-heading)] text-[15px] italic text-text-muted">
											{role.company} · {role.dates}
										</p>
									</div>
									<ul className="flex flex-col gap-1.5">
										{role.bullets.map((bullet) => (
											<li
												key={bullet}
												className="flex gap-2.5 text-[14.5px] leading-relaxed text-text-muted"
											>
												<span aria-hidden="true" className="text-text-soft">
													—
												</span>
												{bullet}
											</li>
										))}
									</ul>
								</div>
							</div>
						))}
					</div>
					<div className="flex flex-col gap-6.5">
						<span className="inscription">Education &amp; certification</span>
						{EDUCATION.map((entry) => (
							<div
								key={entry.title}
								className="flex flex-col gap-2 border border-border-soft bg-surface px-5.5 py-5"
							>
								<h3 className="text-[20px]">{entry.title}</h3>
								<p className="font-[family-name:var(--font-family-heading)] text-[14.5px] italic text-text-soft">
									{entry.meta}
								</p>
								<p className="text-[14.5px] leading-relaxed text-text-muted">{entry.note}</p>
							</div>
						))}
					</div>
				</div>
			</Section>

			{/* V — Contact & CV */}
			<Section id="contact" className="scroll-mt-23">
				<div className="grid grid-cols-1 items-center gap-14 border-t-3 border-gold section-hover bg-footer-bg px-14 py-15 md:grid-cols-[minmax(0,1fr)_auto] 2xs:px-6 2xs:py-10">
					<div className="flex flex-col gap-4">
						<span className="inscription text-gold">{CONTACT.label}</span>
						<h2 className="text-[36px] leading-tight text-text-secondary">{CONTACT.heading}</h2>
						<p className="max-w-[52ch] leading-relaxed text-text-secondary/70">{CONTACT.body}</p>
						<ul className="mt-2 flex flex-wrap gap-7 border-t border-text-secondary/15 pt-3">
							<li className="pt-3.5">
								<a
									href={`mailto:${DETAILS.email}`}
									className="text-sm text-text-secondary/80 hover:text-text-secondary hover:underline"
								>
									{DETAILS.email}
								</a>
							</li>
							<li className="pt-3.5">
								<a
									href={DETAILS.phoneHref}
									className="text-sm text-text-secondary/80 hover:text-text-secondary hover:underline"
								>
									{DETAILS.phone}
								</a>
							</li>
							<li className="pt-3.5">
								<a
									href={DETAILS.linkedin}
									target="_blank"
									rel="noopener noreferrer"
									className="text-sm text-text-secondary/80 hover:text-text-secondary hover:underline"
								>
									LinkedIn
								</a>
							</li>
							<li className="pt-3.5">
								<a
									href={DETAILS.github}
									target="_blank"
									rel="noopener noreferrer"
									className="text-sm text-text-secondary/80 hover:text-text-secondary hover:underline"
								>
									GitHub
								</a>
							</li>
						</ul>
					</div>
					<div id="cv" className="flex min-w-60 flex-col gap-3 scroll-mt-30">
						<a
							href={`mailto:${DETAILS.email}`}
							className="rounded bg-accent px-6.5 py-3.5 text-center text-[13px] font-semibold uppercase tracking-[0.07em] text-surface transition-colors hover:bg-accent-hover"
						>
							{CONTACT.cta}
						</a>
						<a
							href={cvFile}
							download="Samal-Ibrahim-cv.pdf"
							target="_blank"
							rel="noreferrer"
							className="rounded border border-gold/60 px-6.5 py-3.5 text-center text-[13px] font-semibold uppercase tracking-[0.07em] text-text-secondary transition-colors hover:border-gold"
						>
							Download CV
						</a>
					</div>
				</div>
			</Section>
		</div>
	)
}
