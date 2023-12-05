import { useEffect, useRef } from "react";

type FilterType = {
	selectedFilter: string;
	setSelectedFilter: (value: string) => void;
};

function Filter({ selectedFilter, setSelectedFilter }: FilterType) {
	const underlineRef = useRef<HTMLSpanElement>(null);
	const filters = ["All", "Web Development", "Challenges", "Scripts"];

	const updateUnderlinePosition = () => {
		const activeButton = document.querySelector<HTMLButtonElement>(
			`.filter-btn[data-filter="${selectedFilter}"]`
		);
		if (activeButton && underlineRef.current) {
			const buttonWidth = activeButton.offsetWidth;
			const buttonOffsetLeft = activeButton.offsetLeft;

			underlineRef.current.style.width = `${buttonWidth}px`;
			underlineRef.current.style.left = `${buttonOffsetLeft}px`;
		}
	};

	useEffect(() => {
		window.addEventListener("resize", updateUnderlinePosition);
		updateUnderlinePosition();

		return () => {
			window.removeEventListener("resize", updateUnderlinePosition);
		};
	}, [selectedFilter]);

	return (
		<div className="relative flex gap-3 sm:gap-6 mt-10 mx-auto justify-center">
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
