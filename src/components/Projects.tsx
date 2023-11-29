import { BsArrowUpRightSquare, BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";
import lego from "../assets/projects/lego-homage/main.png";
import linesc from "../assets/projects/linesc.png";
import Filter from "./Filter";
import SlideUp from "./SlideUp";

const projects = [
	{
		id: 0,
		title: "LinEsc Privilege Escalation",
		about: "Privilege Escalation toolkit for linux systems.",
		description: "Privilege Escalation toolkit for linux systems.",
		thumbnail: lego,
		tech: ["Python", "Bash", "Kali", "GTFOBins"],
		github: "https://github.com/Gunnar50/LinEscPrivilegeEscalation",
		link: "link",
		filter: ["Other"],
		type: "Python Script",
	},
	{
		id: 1,
		title: "LinEsc Privilege Escalation",
		about: "Privilege Escalation toolkit for linux systems.",
		description:
			"Privilege Escalation toolkit for linux systems. Privilege Escalation toolkit for linux systems.",
		thumbnail: lego,
		tech: ["Python", "Bash", "Kali Linux"],
		github: "https://github.com/Gunnar50/LinEscPrivilegeEscalation",
		link: "",
		filter: ["Other"],
		type: "Python Script",
	},
	{
		id: 2,
		title: "LinEsc Privilege Escalation",
		about: "Privilege Escalation toolkit for linux systems.",
		description: "Privilege Escalation toolkit for linux systems.",
		thumbnail: lego,
		tech: ["Python", "Bash", "Kali Linux"],
		github: "https://github.com/Gunnar50/LinEscPrivilegeEscalation",
		link: "",
		filter: ["Other"],
		type: "Python Script",
	},
];

// Define the projects type
type ProjectType = {
	id: number;
	title: string;
	about: string;
	description: string;
	thumbnail: string;
	tech: string[];
	github: string;
	link: string;
	filter: string[];
	type: string;
};

function Projects() {
	return (
		<section id="projects">
			<div className="py-16">
				<h2 className="text-3xl font-bold mt-6 md:mt-0 md:text-4xl text-center">
					Projects
				</h2>
				<Filter />

				{/* GRID */}
				<div
					className="grid justify-center grid-cols-[repeat(auto-fit,_minmax(300px,_450px))] 
					gap-x-10 gap-y-8 mt-10 "
				>
					{/* PROJECT CARD */}
					{projects.map((project: ProjectType) => (
						<SlideUp
							classes="project-item h-80"
							offset="-100px 0px -100px 0px"
							key={project.id}
						>
							<Link key={project.id} to={`/projects/${project.id}`}>
								{/* PROJECT IMAGE THUMBNAIL */}
								<img src={project.thumbnail} alt={project.title} />
								<div className="content-slate">
									{/* PROJECT TITLE */}
									<h3 className="text-2xl font-bold text-center text-white mb-2">
										{project.title}
									</h3>

									{/* PROJECT ABOUT */}
									<p className="text-gray-300 block mb-2">{project.about}</p>

									{/* TECHNOLOGIES */}

									{/* GITHUB AND DEMO LINKS */}
									<div className={`flex w-full gap-4 justify-center`}>
										{project.github && (
											<Link to={project.github} target="_blank">
												<div className="flex flex-col items-center group/item">
													<BsGithub
														size={30}
														className="text-white transition-transform  group-hover/item:-translate-y-1 cursor-pointer"
													/>
													<span className="text-white">GitHub</span>
												</div>
											</Link>
										)}

										{project.link && (
											<Link to={project.link} target="_blank">
												<div className="flex flex-col items-center group/item">
													<BsArrowUpRightSquare
														size={30}
														className="text-white transition-transform group-hover/item:-translate-y-1 cursor-pointer"
													/>
													<span className="text-white">Live Demo</span>
												</div>
											</Link>
										)}
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
