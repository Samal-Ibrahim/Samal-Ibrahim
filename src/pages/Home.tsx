import samalIbrahim from "#src/assets/samal-ibrahim.png"
import Projects from "#src/components/Projects.js"
import SideBar from "#src/components/SideBar.js"

const cvFile = new URL("../assets/Samal-Ibrahim-cv.pdf", import.meta.url).href

export default function Home() {
	return (
		<div className="grid grid-cols-[1fr_auto] gap-4">
			<main className="flex flex-col gap-4">
				<div id="hero" className="section-container">
					<div className="flex flex-col gap-4">
						<h1 className="hero-name">Samal Ibrahim</h1>
						<div className="flex flex-col gap-2">
							<h3>Front-End Developer working mainly with React & TypeScript.</h3>
							<h3>
								I build clean, structured web apps with a strong focus on performance, usability,
								and real API integration.
							</h3>
						</div>
					</div>
				</div>
				<div id="about" className="section-container">
					<div className="gap-4 grid 2xs:grid-rows-2 md:grid-rows-1 grid-flow-col py-4 w-full items-center">
						<div className="text-section 2xs:row-start-2 md:row-start-1 bg-gray-100 py-8 px-4 rounded-md shadow-md">
							<h2 className="mb-4">About Me</h2>
							<p className="max-w-2xl text-sm leading-relaxed">
								I'm a Front-End Developer focused on React and TypeScript. I enjoy building clean,
								structured applications with solid API integration and clear data flow. I also work
								in technical installation, where I continue to strengthen my troubleshooting skills
								and attention to detail.
							</p>
						</div>
						<div className="justify-self-center self-center image-section md:col-start-2 2xs:row-start-1 2xs:col-start-1 rounded-full overflow-hidden w-68 h-68 shadow-md border-4 border-gray-100">
							<img src={samalIbrahim} alt="Samal Ibrahim" className="w-full h-full object-cover" />
						</div>
					</div>
				</div>
				<div id="projects" className="section-container">
					<h2 className="mb-4">Projects</h2>
					<div className="projects w-full">
						<p className="text-sm">
							Here are some selected projects where I worked with React, APIs, and frontend
							architecture.
						</p>
						<Projects />
					</div>
				</div>
				<div id="skills" className="section-container">
					<h2 className="mb-6 ">Skills</h2>
					<div className="grid gap-6 md:grid-cols-2">
						<div className="shadow-md py-6 px-4 flex flex-col gap-6 rounded-md">
							<h3 className="font-bold text-lg mb-3">Frontend Core</h3>
							<div className="flex flex-wrap gap-2">
								{[
									"HTML5",
									"CSS3",
									"JavaScript",
									"TypeScript",
									"Responsive Design",
									"Accessibility",
								].map((skill) => (
									<span
										key={skill}
										className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium shadow-md"
									>
										{skill}
									</span>
								))}
							</div>
						</div>

						<div className="shadow-md py-6 px-4 flex flex-col gap-6 rounded-md">
							<h3 className="font-bold text-lg mb-3">Frameworks &amp; Libraries</h3>
							<div className="flex flex-wrap gap-2">
								{["React", "TanStack Query", "Vite", "Tailwind CSS"].map((skill) => (
									<span
										key={skill}
										className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium shadow-md"
									>
										{skill}
									</span>
								))}
							</div>
						</div>

						<div className="shadow-md py-6 px-4 flex flex-col gap-6 rounded-md">
							<h3 className="font-bold text-lg mb-3">State &amp; Data</h3>
							<div className="flex flex-wrap gap-2">
								{["REST APIs", "JWT Auth", "LocalStorage", "React Context"].map((skill) => (
									<span
										key={skill}
										className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium shadow-md"
									>
										{skill}
									</span>
								))}
							</div>
						</div>

						<div className="shadow-md py-6 px-4 flex flex-col gap-6 rounded-md">
							<h3 className="font-bold text-lg mb-3">Backend (Basic)</h3>
							<div className="flex flex-wrap gap-2">
								{["Node.js", "Express", "SQLite", "Supabase"].map((skill) => (
									<span
										key={skill}
										className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium shadow-md"
									>
										{skill}
									</span>
								))}
							</div>
						</div>

						<div className="shadow-md py-6 px-4 flex flex-col gap-6 rounded-md">
							<h3 className="font-bold text-lg mb-3">Tooling</h3>
							<div className="flex flex-wrap gap-2">
								{["Git", "GitHub", "Biome", "Figma", "Postman", "VS Code"].map((skill) => (
									<span
										key={skill}
										className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium shadow-md"
									>
										{skill}
									</span>
								))}
							</div>
						</div>

						<div className="shadow-md py-6 px-4 flex flex-col gap-6 rounded-md">
							<h3 className="font-bold text-lg mb-3">CS Foundations</h3>
							<div className="flex flex-wrap gap-2">
								{["C", "SQL", "Flask", "Problem-Solving"].map((skill) => (
									<span
										key={skill}
										className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium shadow-md"
									>
										{skill}
									</span>
								))}
							</div>
						</div>
						<div className="shadow-md py-6 px-4 flex flex-col gap-6 rounded-md">
							<h3 className="font-bold text-lg mb-3">Languages</h3>
							<div className="flex flex-wrap gap-2">
								{["Norwegian", "English", "Kurdish"].map((language) => (
									<span
										key={language}
										className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium shadow-md"
									>
										{language}
									</span>
								))}
							</div>
						</div>
					</div>
				</div>

				<div id="experience" className="section-container">
					<h2>Experience</h2>
					<div className="mt-6">
						<h4 className="font-bold">AV Installation & Technical Setup</h4>
						<h4>Evercom AS - Oslo</h4>
						<h5 className="italic">
							June 2025 - <span className="font-bold">Present</span>
						</h5>
						<ul className="list-disc list-inside space-y-1 mt-2 bg-gray-100 py-8 px-4 rounded-md w-full shadow-md">
							<li>
								Installation and configuration of screens, meeting room panels, and audio systems
							</li>
							<li>Working independently and in teams on client locations</li>
							<li>Troubleshooting technical issues on-site</li>
							<li>Planning tasks efficiently and delivering within deadlines</li>
						</ul>
					</div>

					<div className="mt-6">
						<h4 className="font-bold">Operations & Maintenance</h4>
						<h4>Kongsberg Automotive - Raufoss</h4>
						<h5 className="italic">Sept 2021 – May 2025</h5>
						<ul className="list-disc list-inside space-y-1 mt-2 bg-gray-100 py-8 px-4 rounded-md w-full shadow-md">
							<li>Maintenance and operation of automated production lines</li>
							<li>Team-based work focused on quality and precision</li>
							<li>Problem-solving in time-sensitive production environments</li>
							<li>Ensuring reliability and efficiency under pressure</li>
						</ul>
					</div>
				</div>
				<div id="education" className="section-container">
					<h2>Education</h2>
					<div className="mt-6">
						<h4 className="font-bold">Front-End Development (Online)</h4>
						<h5 className="italic">Noroff - 2024-2026</h5>
						<p>Focus on React, TypeScript, modern web development, and API integration.</p>
					</div>
					<div className="mt-6">
						<h4 className="font-bold">ICT with University Admission Qualification</h4>
						<h5 className="italic">Gjøvik Upper Secondary School - 2019-2022</h5>
					</div>
				</div>
				<div id="certification" className="section-container">
					<h2>Certification</h2>
					<div className="mt-6">
						<h4 className="font-bold">
							CS50: Introduction to Computer Science - Harvard University
						</h4>
						<h5 className="italic">February 2026</h5>
						<ul className="list-disc list-inside space-y-1 mt-2 bg-gray-100 py-8 px-4 rounded-md w-full shadow-md">
							<li>C programming (memory & pointers)</li>
							<li>Data structures & algorithms</li>
							<li>SQL & relational databases</li>
							<li>Python (Flask) web development</li>
							<li>Authentication & sessions</li>
						</ul>
					</div>
				</div>
				<div id="cv" className="section-container">
					<h2>Curriculum Vitae</h2>
					<p>
						You can download my CV{" "}
						<a
							href={cvFile}
							download="Samal-Ibrahim-cv.pdf"
							target="_blank"
							rel="noreferrer"
							className="font-bold text-accent hover:underline"
						>
							here
						</a>
						.
					</p>
				</div>
			</main>
			<div className="col-start-2 bg-color-content-bg relative shadow-sm rounded-sm p-8 hidden lg:block">
				<SideBar />
			</div>
		</div>
	)
}
