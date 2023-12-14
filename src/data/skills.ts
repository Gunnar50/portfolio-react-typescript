import backend from "../assets/images/backend1.png";
import general from "../assets/images/general.png";
import frontend from "../assets/images/react.png";

export type SkillType = {
	label: string;
	src: string;
	alt: string;
	skills: string[];
};

export const skillsData: SkillType[] = [
	{
		label: "Front-end",
		src: frontend,
		alt: "Frontend skills atom icon",
		skills: [
			"React",
			"Redux",
			"TypeScript",
			"JavaScript",
			"Tailwind CSS",
			"HTML",
			"CSS",
			"SASS",
			"NextJS",
			"Bootstrap",
			"Figma",
		],
	},
	{
		label: "Back-end",
		src: backend,
		alt: "Backend skills gear icon",
		skills: [
			"JavaScript",
			"NodeJS",
			"ExpressJS",
			"MongoDB",
			"MySQL",
			"GraphQL",
			"Python",
			"Django",
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
			"Java",
			"Network Protocols",
		],
	},
];
