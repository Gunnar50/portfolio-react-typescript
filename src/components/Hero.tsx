import { HiArrowDown } from "react-icons/hi";
import { Link as ScrollLink } from "react-scroll/modules";
import bgImage from "../assets/bgpattern.png";
import profileImage from "../assets/images/profileImage.png";

function Hero() {
	return (
		<section id="home">
			<img src={bgImage} />
			<div
				className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 
							sm:py-30 md:py-24 md:flex-row md:space-x-4 md:text-left"
			>
				<div className="md:mt-2 md:w-1/2">
					<img
						src={profileImage}
						alt="Profile image"
						width={320}
						className="rounded-full shadow-2xl"
					/>
				</div>
				<div className="md:mt-2 md:w-3/5">
					<h1 className="heading text-4xl font-bold mt-6 md:mt-0 md:text-5xl md:whitespace-nowrap  md:-ml-10">
						Hi, I'm Gustavo!
					</h1>
					<p className="font-semibold text-xl mt-4 mb-6 md:text-2xl">
						Web <span className="text-teal-600">Developer</span> & Software{" "}
						<span className="text-teal-600">Engineer</span>
					</p>
					<p className="mt-4 mb-6 text-gray-400">
						I'm a Software Engineer & Cyber Security Graduate based in London,
						UK
					</p>
					<a
						href="/Gustavo_Passarella_CV_SE-2023.pdf"
						download
						className="text-secondary-foreground font-semibold px-6 py-3 bg-secondary rounded-lg shadow hover:bg-accent transition"
					>
						Download CV
					</a>
				</div>
			</div>
			<div className="flex flex-row items-center text-center justify-center ">
				<ScrollLink
					to="about"
					activeClass="active"
					spy={true}
					smooth={true}
					offset={-100}
					duration={500}
				>
					<HiArrowDown size={35} className="animate-bounce cursor-pointer" />
				</ScrollLink>
			</div>
		</section>
	);
}

export default Hero;
