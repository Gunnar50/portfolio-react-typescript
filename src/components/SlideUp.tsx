import { ReactNode, useEffect, useRef } from "react";

interface Props {
	id?: string;
	classes?: string;
	offset?: string;
	children?: ReactNode;
	onClick?: React.MouseEventHandler<HTMLDivElement>;
}

function SlideUp({
	id = "",
	classes = "",
	children,
	offset = "0px",
	onClick,
}: Props) {
	const ref = useRef<HTMLDivElement>(null);

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

		return () => {
			if (ref.current) {
				observer.unobserve(ref.current);
			}
		};
	}, [ref]);

	return (
		<div
			ref={ref}
			id={id}
			className={`relative opacity-0 ${classes}`}
			onClick={onClick}
		>
			{children}
		</div>
	);
}

export default SlideUp;
