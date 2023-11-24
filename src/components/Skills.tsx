import backend from "../assets/images/backend1.png";
import general from "../assets/images/general.png";
import frontend from "../assets/images/react.png";

const skillsData = [
	{
		label: "Backend",
		src: backend,
		alt: "Backend skills gear icon",
		skills: [
			"Python",
			"Django",
			"JavaScript",
			"NodeJS",
			"ExpressJS",
			"MongoDB",
			"MySQL",
			"GraphQL",
			"Java",
		],
	},
	{
		label: "Frontend",
		src: frontend,
		alt: "Frontend skills atom icon",
		skills: [
			"HTML",
			"CSS",
			"JavaScript",
			"TypeScript",
			"React",
			"Redux",
			"NextJS",
			"Tailwind CSS",
			"Bootstrap",
			"Figma",
		],
	},
	{
		label: "General Skills",
		src: general,
		alt: "General skills icon",
		skills: [
			"Object-Oriented Programming",
			"Git",
			"GitHub",
			"Cisco Devices",
			"Cryptography",
			"Network Protocols",
		],
	},
];

type SkillType = {
	label: string;
	src: string;
	alt: string;
	skills: string[];
};

function Skills() {
	return (
		<section id="skills">
			<div className="py-16">
				<h2 className="text-3xl font-bold mt-6 md:mt-0 md:text-4xl text-center">
					Skills
				</h2>
				<div className="flex flex-wrap mt-10 justify-center gap-2">
					{skillsData.map((item: SkillType, index) => {
						return (
							<div
								key={index}
								className="border rounded-lg p-4 flex flex-col items-center max-w-[300px]"
							>
								<div className="flex items-center gap-3">
									<img src={item.src} alt={item.alt} width={35} height={35} />
									<h3 className="text-2xl font-semibold">{item.label}</h3>
								</div>
								<div className="flex flex-wrap gap-2 mt-6">
									{item.skills.map((skills, i) => {
										return (
											<div
												key={i}
												className=" bg-skills-bg px-2 py-2 rounded-sm"
											>
												{skills}
											</div>
										);
									})}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export default Skills;
