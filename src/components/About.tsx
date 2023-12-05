import { Link as ScrollLink } from "react-scroll/modules";
import bgImage from "../assets/bgpattern2.png";
import aboutImage from "../assets/images/about-image.png";

function About() {
	return (
		<section id="about" style={{ position: "relative" }}>
			<div
				className="relative flex flex-col gap-14 items-center justify-center animate-fadeIn animation-delay-2 py-16 
							sm:py-30 md:py-24 md:flex-row md:text-left"
			>
				<div
					style={{ backgroundImage: `url(${bgImage})` }}
					className="bg-pattern bg-about"
				></div>
				<div className="md:w-3/5">
					<h2 className="text-3xl text-center md:text-left font-bold my-6 md:mt-0 md:text-4xl relative">
						About
						<hr
							className="w-12 border-t-4 rounded border-teal-700 absolute left-[50%] -translate-x-11
									md:mt-1 md:w-14 md:left-0 md:translate-x-0"
						/>
					</h2>
					<p>
						Hi, my name is Gustavo and I am a
						<span className="font-bold"> highly ambitious</span>,
						<span className="font-bold"> self-motivated</span>, and
						<span className="font-bold"> driven</span> Software Engineer based
						in London, UK.
					</p>
					<br />
					<p>
						I have recently completed{" "}
						<span className="font-bold"> The Jump Digital School's</span>{" "}
						12-week Full-Stack
						<span className="font-bold text-teal-500">
							{" "}
							Software Engineer
						</span>{" "}
						bootcamp programme, which has enabled me to develop and deploy
						full-stack websites and applications to a professional standard from{" "}
					</p>
					<br />

					<p>
						I am currently working as Python, SQL database, and Game Development
						tutor at FunTech where I teach children and young adults computer
						science and software engineering concepts.
					</p>
					<br />
					<p>
						I have a passion for
						<span className="font-bold text-teal-500"> technology</span> and a
						desire to always push the limits of what is possible. I am excited
						to see where it can take me and I am open to new opportunities,
						<ScrollLink
							smooth={true}
							offset={-100}
							spy={true}
							to="contact"
							className="font-bold text-secondary cursor-pointer"
						>
							{" "}
							let's have a chat.
						</ScrollLink>
					</p>
				</div>
				<div className="md:w-1/3 ">
					<img src={aboutImage} alt="Profile image" width={320} />
				</div>
			</div>
		</section>
	);
}

export default About;
