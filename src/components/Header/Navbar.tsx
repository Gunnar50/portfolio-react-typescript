import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll/modules";
import burgerAnimation from "../../assets/burger-menu-animation.json";

const navLinks = [
	{ title: "About", link: "about", id: 0 },
	{ title: "Skills", link: "skills", id: 1 },
	{ title: "Projects", link: "projects", id: 2 },
	{ title: "Experience", link: "exp", id: 3 },
	{ title: "Contact", link: "contact", id: 4 },
];

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const lottieRef = useRef<LottieRefCurrentProps>(null);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
		isOpen
			? lottieRef.current?.playSegments([60, 25], true)
			: lottieRef.current?.playSegments([25, 60], true);
	};

	return (
		<nav className="justify-between md:items-center md:flex">
			<div className="flex items-center justify-between py-3 md:py-3 md:block">
				<div className="md:py-3 md:block">
					<h2 className="text-2xl font-bold">
						<NavLink to="/">
							<span>GustavoPassarella</span>
						</NavLink>
					</h2>
				</div>
				<button
					className="p-2 text-gray-700 rounded-md outline-none md:hidden"
					onClick={toggleMenu}
				>
					<Lottie
						lottieRef={lottieRef}
						animationData={burgerAnimation}
						style={{ height: 30 }}
						loop={false}
						autoplay={false}
					/>
				</button>
			</div>
			<div>
				<div
					className={`flex-1 justify-self-center md:block md:pb-0 md:mt-0 overflow-hidden transition-all duration-700 md:max-h-screen  ${
						isOpen ? "max-h-screen" : "max-h-0"
					}`}
				>
					<ul className="md:flex md:space-x-6 space-y-8 md:space-y-0">
						{navLinks.map((item) => {
							return (
								<li key={item.id}>
									<ScrollLink
										to={item.link}
										className={
											"block lg:inline-block text-gray-200  hover:text-gray-400 cursor-pointer"
										}
										activeClass="active"
										spy={true}
										smooth={true}
										offset={-100}
										duration={500}
										onClick={toggleMenu}
									>
										{item.title}
									</ScrollLink>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;