import { ReactNode, useEffect, useRef } from "react";

interface Props {
	id?: string;
	classes?: string;
	offset?: string;
	children?: ReactNode;
	// any props that come into the component
}

function SlideUp({ id = "", classes = "", children, offset = "0px" }: Props) {
	const ref = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.remove("opacity-0");
						entry.target.classList.add("animate-fadeIn");
						entry.target.classList.add("animate-slideUpCubiBezier");
					}
				});
			},
			{ rootMargin: offset }
		);

		if (ref.current) {
			observer.observe(ref.current);
		}
	}, [ref]);

	return (
		<div ref={ref} id={id} className={`relative opacity-0 ${classes}`}>
			{children}
		</div>
	);
}

export default SlideUp;
