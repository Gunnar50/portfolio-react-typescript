import { useEffect, useRef, useState } from "react";

function Filter() {
	const [selectedFilter, setSelectedFilter] = useState<string>("All");
	const underlineRef = useRef<HTMLSpanElement>(null);
	const filters = ["All", "Frontend", "Fullstack", "Challenges", "Other"];

	useEffect(() => {
		const activeButton = document.querySelector<HTMLButtonElement>(
			`.filter-btn[data-filter="${selectedFilter}"]`
		);
		if (activeButton && underlineRef.current) {
			underlineRef.current.style.width = `${activeButton.offsetWidth}px`;
			underlineRef.current.style.transform = `translateX(${activeButton.offsetLeft}px)`;
		}
	}, [selectedFilter]);
	return (
		<div className="relative flex gap-6 mt-10">
			{filters.map((filter) => (
				<button
					key={filter}
					data-filter={filter}
					className={`filter-btn ${
						selectedFilter === filter
							? "text-accent font-bold"
							: "text-gray-500 font-semibold hover:text-gray-400"
					} py-2 transition-all`}
					onClick={() => setSelectedFilter(filter)}
				>
					{filter}
				</button>
			))}
			<span
				ref={underlineRef}
				className="absolute bottom-0 h-1 bg-accent rounded transition-all duration-300 ease-in-out"
			></span>
		</div>
	);
}

export default Filter;
