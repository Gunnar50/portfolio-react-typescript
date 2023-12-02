import { useEffect, useState } from "react";
import { BsArrowUpRightSquare, BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";
import { ProjectType, projects } from "../data/projects";
import Filter from "./Filter";
import SlideUp from "./SlideUp";

function Projects() {
	const [selectedFilter, setSelectedFilter] = useState<string>("All");
	const [filteredProjects, setFilteredProjects] = useState<ProjectType[]>(
		projects.reverse()
	);

	useEffect(() => {
		const newFilteredProjects = projects.filter((project) =>
			project.filter.includes(selectedFilter)
		);
		setFilteredProjects(newFilteredProjects);
	}, [selectedFilter]);

	return (
		<section id="projects">
			<div className="py-16">
				<h2 className="text-3xl font-bold mt-6 md:mt-0 md:text-4xl text-center">
					Projects
				</h2>
				<Filter
					selectedFilter={selectedFilter}
					setSelectedFilter={setSelectedFilter}
				/>

				{/* GRID */}
				<div
					className="grid justify-center grid-cols-[repeat(auto-fit,_minmax(300px,_370px))] 
					gap-x-6 gap-y-6 mt-10 "
				>
					{/* PROJECT CARD */}
					{filteredProjects.map((project: ProjectType) => (
						<SlideUp
							classes="project-item"
							offset="-100px 0px -100px 0px"
							key={project.id}
						>
							<Link
								key={project.id}
								to={project.link || project.github}
								target="_blank"
							>
								{/* PROJECT IMAGE THUMBNAIL */}
								<img src={project.thumbnail} alt={project.title} />
								<div className="content-slate">
									{/* PROJECT TITLE */}
									<h3 className="text-2xl font-bold text-center text-white mb-2">
										{project.title}
									</h3>

									{/* PROJECT ABOUT */}
									<p className="text-gray-300 block mb-4 text-center">
										{project.about}
									</p>

									{/* TECHNOLOGIES */}
									{project.tech && (
										<div className="flex flex-wrap gap-2 justify-center mb-5">
											{project.tech.map((item) => (
												<p className="bg-skills-bg px-2 py-1 rounded-xl text-sm">
													{item}
												</p>
											))}
										</div>
									)}

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
