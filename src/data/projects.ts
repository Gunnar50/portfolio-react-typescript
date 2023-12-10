import aurora from "../assets/projects/aurora/main.png";
import gentile from "../assets/projects/gentile/main.jpg";
import lego from "../assets/projects/lego-homage/main.png";
import linesc from "../assets/projects/linesc/main.png";
import simpsons from "../assets/projects/simpsons-quotes/main.png";
import tictactoe from "../assets/projects/tictactoe/main.png";
import todo from "../assets/projects/todo-app/main.png";
import weather from "../assets/projects/weather-app/main.png";

export type ProjectType = {
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

export const projects: ProjectType[] = [
	{
		id: 0,
		title: "Gentile Etiquetas Website",
		about: "Wordpress custom theme",
		description: "",
		thumbnail: gentile,
		tech: ["Wordpress", "PHP", "JavaScript"],
		github: "",
		link: "http://gentileetiquetas.com.br",
		filter: ["All", "Web Development"],
		type: "Web Development",
	},
	{
		id: 1,
		title: "Aurora Byte Cipher",
		about: "Encryption & Decrpyiton algorithm",
		description: "",
		thumbnail: aurora,
		tech: ["Python", "Tkinter", "Crypto Library"],
		github: "https://github.com/Gunnar50/AuroraByteCipher",
		link: "",
		filter: ["All", "Software Development", "Scripts"],
		type: "Python Software",
	},
	{
		id: 2,
		title: "LinEsc Privilege Escalation",
		about: "Privilege Escalation toolkit for linux systems.",
		description: "Privilege Escalation toolkit for linux systems.",
		thumbnail: linesc,
		tech: ["Python", "Bash", "Kali Linux"],
		github: "https://github.com/Gunnar50/LinEscPrivilegeEscalation",
		link: "",
		filter: ["All", "Scripts"],
		type: "Python Script",
	},
	{
		id: 3,
		title: "LEGO Homage Piece",
		about: "Homage project of LEGO.com",
		description: "",
		thumbnail: lego,
		tech: ["HTML", "CSS", "SASS"],
		github: "https://github.com/Gunnar50/lego-index-clone",
		link: "https://lego-homage-gustavo-passarella.netlify.app/",
		filter: ["All", "Web Development"],
		type: "Frontend",
	},
	{
		id: 4,
		title: "WeatherApp",
		about: "Weather web app designed to provide real-time weather info",
		description: "",
		thumbnail: weather,
		tech: ["HTML", "SASS", "JavaScript", "OpenWeather API"],
		github: "https://github.com/Gunnar50/weatherapp-vanilla-javascript",
		link: "https://weather-vanillajs-gustavopassarella.netlify.app/",
		filter: ["All", "Web Development", "Web Application"],
		type: "Web Application",
	},
	{
		id: 5,
		title: "The Simpsons Quote Generator",
		about: 'Web application that generates quotes from "The Simpsons"',
		description: "",
		thumbnail: simpsons,
		tech: ["React", "SASS", "JavaScript"],
		github: "https://github.com/Gunnar50/react-simpsons-quotes",
		link: "https://simpsons-quote-gustavopassarella.netlify.app/",
		filter: ["All", "Web Development", "Web Application"],
		type: "Web Application",
	},
	{
		id: 6,
		title: "Tic-Tac-Toe",
		about: "Classic game featuring an unbeatable AI",
		description: "",
		thumbnail: tictactoe,
		tech: ["React", "SASS", "JavaScript", "Minimax"],
		github: "https://github.com/Gunnar50/react-tictactoe",
		link: "https://tictactoe-gustavo-passarella.netlify.app/",
		filter: ["All", "Web Development", "Web Application"],
		type: "Web Application",
	},
	{
		id: 7,
		title: "Todo List",
		about: "Todo app challenge from Frontend Mentor",
		description: "",
		thumbnail: todo,
		tech: ["React", "Redux", "Local Storage", "SASS"],
		github: "https://github.com/Gunnar50/react-redux-todolist",
		link: "https://todo-list-gustavo-passarella.netlify.app/",
		filter: ["All", "Web Development", "Web Application", "Challenges"],
		type: "Web Application",
	},
];
