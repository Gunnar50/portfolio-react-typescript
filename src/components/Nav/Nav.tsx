const navLinks = [
	{ title: "About", link: "#about", id: 0 },
	{ title: "Skills", link: "#skills", id: 1 },
	{ title: "Projects", link: "#projects", id: 2 },
	{ title: "Experience & Qualifications", link: "#exp", id: 3 },
	{ title: "Contact", link: "#contact", id: 4 },
];

function Nav() {
	return (
		<nav>
			<ul className="flex">
				{navLinks.map((nav) => (
					<li key={nav.id}>
						<a href={nav.link}>{nav.title}</a>
					</li>
				))}
			</ul>
		</nav>
	);
}

export default Nav;
