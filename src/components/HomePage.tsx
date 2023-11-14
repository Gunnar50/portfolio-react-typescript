import About from "./About/About";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Hero from "./Hero/Hero";
import Nav from "./Nav/Nav";
import Projects from "./Projects/Projects";
import Qualification from "./Qualifications/Qualification";
import Skills from "./Skills/Skills";

function Home() {
	return (
		<>
			<header>
				<Nav />
			</header>

			<main>
				<Hero />
				<About />
				<Skills />
				<Projects />
				<Qualification />
				<Contact />
			</main>

			<footer>
				<Footer />
			</footer>
		</>
	);
}

export default Home;
