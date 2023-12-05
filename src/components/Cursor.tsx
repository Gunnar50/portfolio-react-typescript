/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import { useCallback, useEffect, useRef, useState } from "react";

/* -------------------------- Internal Dependencies ------------------------- */
import useIsMounted from "../hooks/useIsMounted";
import "../styles/cursor.scss";

// Define a type for the Event used in mouse events
type MouseEvent = globalThis.MouseEvent;

const Cursor = () => {
	const dot = useRef<HTMLDivElement>(null);
	const dotOutline = useRef<HTMLDivElement>(null);
	const isMounted = useIsMounted();
	const [mouseActive, setMouseActive] = useState(false);

	const delay = 8;
	const _x = useRef(0);
	const _y = useRef(0);
	const endX = useRef(
		typeof window !== "undefined" ? window.innerWidth / 2 : 0
	);
	const endY = useRef(
		typeof window !== "undefined" ? window.innerHeight / 2 : 0
	);

	const cursorVisible = useRef(true);
	const cursorEnlarged = useRef(false);

	const requestRef = useRef<number | null>(null);

	const toggleCursorVisibility = useCallback(() => {
		if (dot?.current && dotOutline?.current)
			if (cursorVisible.current) {
				dot.current.style.opacity = "1";
				dotOutline.current.style.opacity = "1";
			} else {
				dot.current.style.opacity = "0";
				dotOutline.current.style.opacity = "0";
			}
	}, []);

	const toggleCursorSize = useCallback(() => {
		if (dot?.current && dotOutline?.current)
			if (cursorEnlarged.current) {
				setMouseActive(true);
			} else {
				setMouseActive(false);
			}
	}, []);

	const mouseOverEvent = useCallback(
		(e: MouseEvent) => {
			if ((e.target as HTMLElement)?.dataset.hover) {
				cursorEnlarged.current = true;
				toggleCursorSize();
			}
		},
		[toggleCursorSize]
	);

	const mouseOutEvent = useCallback(
		(e: MouseEvent) => {
			if ((e.target as HTMLElement)?.dataset.hover) {
				cursorEnlarged.current = false;
				toggleCursorSize();
			}
		},
		[toggleCursorSize]
	);

	const mouseEnterEvent = useCallback(() => {
		cursorEnlarged.current = true;
		toggleCursorVisibility();
	}, [toggleCursorVisibility]);

	const mouseLeaveEvent = useCallback(() => {
		cursorEnlarged.current = false;
		toggleCursorVisibility();
	}, [toggleCursorVisibility]);

	const mouseMoveEvent = useCallback(
		(e: MouseEvent) => {
			cursorVisible.current = true;
			toggleCursorVisibility();

			endX.current = e.pageX;
			endY.current = e.pageY;
			if (dot?.current) {
				dot.current.style.top = endY.current + "px";
				dot.current.style.left = endX.current + "px";
			}
		},
		[toggleCursorVisibility]
	);

	const animateDotOutline = useCallback(() => {
		_x.current += (endX.current - _x.current) / delay;
		_y.current += (endY.current - _y.current) / delay;

		if (dotOutline?.current) {
			dotOutline.current.style.top = _y.current + "px";
			dotOutline.current.style.left = _x.current + "px";
		}

		requestRef.current = requestAnimationFrame(animateDotOutline);
	}, [endX, endY]);

	useEffect(() => {
		const requestRefs = requestRef?.current;

		if (isMounted()) {
			document.addEventListener("mousemove", mouseMoveEvent);
			document.addEventListener("mouseenter", mouseEnterEvent);
			document.addEventListener("mouseleave", mouseLeaveEvent);
			document.addEventListener("mouseover", mouseOverEvent);
			document.addEventListener("mouseout", mouseOutEvent);

			animateDotOutline();
		}
		return () => {
			document.removeEventListener("mousemove", mouseMoveEvent);
			document.removeEventListener("mouseenter", mouseEnterEvent);
			document.removeEventListener("mouseleave", mouseLeaveEvent);
			document.removeEventListener("mouseover", mouseOverEvent);
			document.removeEventListener("mouseout", mouseOutEvent);

			cancelAnimationFrame(requestRefs as number);
		};
	}, [
		isMounted,
		mouseMoveEvent,
		mouseEnterEvent,
		mouseLeaveEvent,
		mouseOverEvent,
		mouseOutEvent,
		animateDotOutline,
	]);

	return (
		<div
			className={`cursor-container ${
				mouseActive ? "cursor-active" : "cursor-inactive"
			}`}
		>
			<div ref={dotOutline} className="cursor-dot-outline"></div>
			<div ref={dot} className="cursor-dot"></div>
		</div>
	);
};

export default Cursor;
