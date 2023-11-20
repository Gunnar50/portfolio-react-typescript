import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Header/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Qualification from "../components/Qualification";
import Skills from "../components/Skills";

function HomePage() {
	return (
		<>
			<header className="bg-background w-full mx-auto  px-4 sm:px-20 fixed top-0 z-50 ">
				<Nav />
			</header>

			<main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
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

export default HomePage;
