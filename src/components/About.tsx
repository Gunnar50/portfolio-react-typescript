import { Link as ScrollLink } from "react-scroll/modules";
import bgImage from "../assets/bgpattern3.png";
import aboutImage from "../assets/images/about-image2.png";

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
							className="w-10 border-t-4 rounded border-teal-700 absolute left-[50%] -translate-x-12
									md:mt-1 md:w-12 md:left-0 md:-translate-x-1"
						/>
					</h2>
					<p>
						I'm a detailed-oriented <span className="font-bold">Software Engineer</span> from
						Brazil and living in London for the past 12 years. I am currently working
						as a <span className="font-bold">Python Engineer</span> at Phantom, a creative agency specialised in 
						crafting experiences for global brands. I build robust and scalable 
						backend solutions and work closely with  
						<span className="font-bold"> Google Cloud Platform infrastructure.</span>
					</p>
					<br />
					<p>
						At Phantom, I collaborate on projects for major clients like 
						<span className="font-bold"> Google</span> and the  
						<span className="font-bold"> Financial Times</span> contributing to 
						innovative solutions across a large range of technologies. 
					<p>
					<br />
					</p>
						I've always had a
						passion for <span className="font-bold">technology</span> and a
						desire to go beyond of what is possible. 
						I am a{" "}
						<span className="font-bold">highly driven professional</span> with a
						background in customer service, skilled in problem-solving,
						teamwork, communication, and committed to continuous learning.
					</p>
					<br />
					<p>
						My main stack is Python, but I also enjoy working with other tools{" "}
						and frameworks such as React, TypeScript, Next.js, Node, Express, 
						MongoDB, and MySQL. I'm always <span className="font-bold">open to new opportunities</span>,
						so feel free to
						<ScrollLink
							smooth={true}
							offset={-100}
							spy={true}
							to="contact"
							className="font-bold text-teal-500 cursor-pointer hover:underline"
						>
							{" "}
							get in touch!
						</ScrollLink>
					</p>
				</div>
				<div className="md:w-1/3">
					<img src={aboutImage} alt="Profile image" width={420} />
				</div>
			</div>
		</section>
	);
}

export default About;
