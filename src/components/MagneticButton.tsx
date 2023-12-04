import gsap from "gsap";
import React, { ReactElement, useEffect, useRef } from "react";

interface MagneticButtonProps {
	children: ReactElement;
}

function MagneticButton({ children }: MagneticButtonProps) {
	const magnetic = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const xTo = gsap.quickTo(magnetic.current, "x", {
			duration: 1,
			ease: "elastic.out(1, 0.3)",
		});
		const yTo = gsap.quickTo(magnetic.current, "y", {
			duration: 1,
			ease: "elastic.out(1, 0.3)",
		});

		magnetic.current?.addEventListener("mousemove", (e) => {
			const { clientX, clientY } = e;
			const { height, width, left, top } =
				magnetic.current!.getBoundingClientRect();
			let x = clientX - (left + width / 2);
			let y = clientY - (top + height / 2);

			// Limit the movement range
			const movementLimit = 3;
			x = Math.max(Math.min(x, movementLimit), -movementLimit);
			y = Math.max(Math.min(y, movementLimit), -movementLimit);

			xTo(x);
			yTo(y);
		});

		magnetic.current?.addEventListener("mouseleave", () => {
			xTo(0);
			yTo(0);
		});
	}, []);

	return React.cloneElement(children, { ref: magnetic });
}

export default MagneticButton;
