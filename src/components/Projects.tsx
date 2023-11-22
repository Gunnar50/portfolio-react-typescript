import { BsArrowUpRightSquare, BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";
import linesc from "../assets/images/linesc-thumb.png";
import Filter from "./Filter";
import SlideUp from "./SlideUp";

const projects = [
	{
		id: 0,
		title: "LinEsc Privilege Escalation",
		description: "",
		thumbnail: linesc,
		tags: ["Python", "Bash", "Kali Linux"],
		github: "https://github.com/Gunnar50/LinEscPrivilegeEscalation",
		link: "link",
		filter: "Other",
		type: "Python Script",
	},
	{
		id: 1,
		title: "LinEsc Privilege Escalation",
		description: "",
		thumbnail: linesc,
		tags: ["Python", "Bash", "Kali Linux"],
		github: "https://github.com/Gunnar50/LinEscPrivilegeEscalation",
		link: "",
		filter: "Other",
		type: "Python Script",
	},
	{
		id: 2,
		title: "LinEsc Privilege Escalation",
		description: "",
		thumbnail: linesc,
		tags: ["Python", "Bash", "Kali Linux"],
		github: "https://github.com/Gunnar50/LinEscPrivilegeEscalation",
		link: "",
		filter: "Other",
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
				<Filter />
				{/* PROJECT CARD */}
				<div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-x-10 gap-y-8 mt-10">
					{projects.map((project: ProjectType) => (
						<SlideUp
							classes="group"
							offset="-100px 0px -100px 0px"
							key={project.id}
						>
							<Link
								className="cursor-pointer  flex flex-col rounded-md
										  shadow-sm animate-slideUpCubiBezier animation-delay-2
											transition-transform overflow-hidden relative group-hover:-translate-y-2 group-hover:shadow-2xl"
								key={project.id}
								to={`/projects/${project.id}`}
							>
								{/* PROJECT IMAGE THUMBNAIL */}
								<img
									src={project.thumbnail}
									alt={project.title}
									// width={1400}
									// height={1400}
									className="w-full object-cover transition group-hover:opacity-75"
								/>
								<div
									className="text-center absolute py-2 px-4 w-full bottom-0 bg-project-bg
												transition-all group-hover: group-hover:pb-32"
								>
									{/* PROJECT TITLE */}
									<h3 className="text-xl font-semibold text-center text-white mb-2">
										{project.title}
									</h3>

									{/* PROJECT TYPE */}
									<span
										className="text-gray-400 block mb-2 absolute left-1/2 -translate-x-1/2
															top-12"
									>
										{project.type}
									</span>
									{/* GITHUB AND DEMO LINKS */}
									<div
										className={`my-4 flex w-full absolute left-1/2 -translate-x-1/2 top-20 gap-4 justify-center`}
									>
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
