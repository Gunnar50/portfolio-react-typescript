import bgImage from "../assets/bgpattern.png";
import aboutImage from "../assets/images/bg10.png";

function About() {
	return (
		<section id="about" style={{ position: "relative" }}>
			<div
				style={{ backgroundImage: `url(${bgImage})` }}
				className="bg-pattern bg-about"
			></div>
			<div
				className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 
							sm:py-30 md:py-24 md:flex-row md:space-x-4 md:text-left"
			>
				<div className="md:mt-2 md:w-3/5">
					<h2 className="text-3xl font-bold mt-6 md:mt-0 md:text-4xl ">
						About
					</h2>
					<p>
						Hi, my name is Gustavo and I am a
						<span className="font-bold"> highly ambitious</span>,
						<span className="font-bold"> self-motivated</span>, and
						<span className="font-bold"> driven</span> person based in London,
						UK.
					</p>
				</div>
				<div className="md:mt-2 md:w-1/2">
					<img
						src={aboutImage}
						alt="Profile image"
						width={320}
						className="border-[6px] border-white rounded-[20px] rounded-tl-[110px]"
					/>
				</div>
			</div>
		</section>
	);
}

export default About;
