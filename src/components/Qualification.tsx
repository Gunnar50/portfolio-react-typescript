import { IconContext } from "react-icons";
import { GiGraduateCap } from "react-icons/gi";

function Qualification() {
	return (
		<section id="qualification">
			<IconContext.Provider
				value={{
					size: "50px",
					className: "text-background bg-neutral-primary rounded-full p-1",
				}}
			>
				<div className="flex justify-center">
					<div className="md:mt-2 md:w-1/4 ">
						<h2>Academic Qualifications</h2>
						<div className="flex">
							<GiGraduateCap />
						</div>
					</div>
					<div className="md:mt-2 md:w-1/4 flex justify-end">
						<div className="">
							<h2>Work Experience</h2>
						</div>
					</div>
				</div>
			</IconContext.Provider>
		</section>
	);
}

export default Qualification;
