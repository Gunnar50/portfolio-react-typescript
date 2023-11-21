import { Link } from "react-router-dom";
import linesc from "../assets/images/linesc-thumb.png";
import SlideUp from "./SlideUp";

const projects = [
	{
		id: 0,
		title: "LinEsc Privilege Escalation",
		description:
			"The toolkit not only aims to identify potential paths for privilege escalation, focusing on elements such as 'sudo', 'suid', capabilities, and world-writable files, but also has the capability to generate a comprehensive report. This report details the findings and offers recommendations for mitigations. Designed with the potential for future improvements and expansions, the tool provides a thorough analysis of system vulnerabilities. For a comprehensive overview of its functional components, please refer to the README file located in the main repository.",
		thumbnail: linesc,
		tags: ["Python", "Bash", "Kali Linux"],
		github: "https://github.com/Gunnar50/LinEscPrivilegeEscalation",
		link: "",
		filter: "Software Development",
		type: "Python Script",
	},
];

// Define the projects type
type ProjectType = {
	id: number;
	title: string;
	description: string;
	thumbnail: string;
	tags: string[];
	github: string;
	link: string;
	filter: string;
	type: string;
};

function Projects() {
	return (
		<section id="projects">
			<div className="py-16">
				<h2 className="text-3xl font-bold mt-6 md:mt-0 md:text-4xl text-center">
					Projects
				</h2>

				{/* PROJECT CARD */}
				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
					{projects.map((project: ProjectType) => (
						<SlideUp offset="-100px 0px -100px 0px" key={project.id}>
							<Link
								className="cursor-pointer group flex flex-col rounded bg-gray-800 animate-slideUpCubiBezier animation-delay-2 transition-transform overflow-hidden"
								key={project.id}
								to={`/projects/${project.id}`}
							>
								{/* PROJECT IMAGE THUMBNAIL */}
								<img
									src={project.thumbnail}
									alt={project.title}
									width={1400}
									height={1400}
									className="w-full object-cover transition group-hover:scale-105"
								/>
								<div className="px-4 py-4 flex-grow flex flex-col justify-between">
									<div className="text-center">
										{/* PROJECT TITLE */}
										<h3 className="text-2xl font-semibold text-center text-white mb-2">
											{project.title}
										</h3>

										{/* PROJECT TYPE */}
										<span className="text-gray-400 block mb-2">
											{project.type}
										</span>
									</div>
								</div>
							</Link>
						</SlideUp>
					))}
				</div>
			</div>
		</section>
	);
}

export default Projects;
