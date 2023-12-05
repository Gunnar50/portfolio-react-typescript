import { IconContext, IconType } from "react-icons";
import { FaBook, FaGraduationCap } from "react-icons/fa";
import "../styles/qualifications.scss";

type QualificationsType = {
	icon: IconType;
	iconSize: string;
	date: string;
	label: string;
	location: string;
	description: string;
};

const qualifications: QualificationsType[] = [
	{
		icon: FaGraduationCap,
		iconSize: "40px",
		date: "Sept 2020 - May 2023",
		label: "BSc(Hons) Computer Networking & Cyber Security",
		location: "London Metropolitan University",
		description: "",
	},
	{
		icon: FaBook,
		iconSize: "30px",
		date: "Sept 2020 - May 2023",
		label: "BSc(Hons) Computer Networking & Cyber Security",
		location: "London Metropolitan University",
		description: "",
	},
];

function Qualification() {
	return (
		<section id="qualification">
			<div className="flex flex-col md:flex-row justify-center px-10">
				<div className="md:mt-2 md:w-1/2">
					<h3 className="mb-5 text-2xl font-semibold">
						Academic <span className="text-teal-700">Qualifications</span>
					</h3>
					{qualifications.map((q: QualificationsType, i) => (
						<div key={i} className="flex items-center gap-5 mb-5">
							<div
								className="bg-neutral-primary rounded-full w-16 h-16
											flex justify-center items-center icon-container"
							>
								<IconContext.Provider
									value={{
										size: `${q.iconSize}`,
										className: "text-background",
									}}
								>
									<q.icon />
								</IconContext.Provider>
							</div>
							<div>
								<span className="text-teal-700 font-semibold">{q.date}</span>
								<h4 className="font-semibold">{q.label}</h4>
								<p className="text-sm  text-gray-500">{q.location}</p>
							</div>
						</div>
					))}
				</div>
				<div className="md:mt-2 md:w-1/2 flex md:justify-end">
					<div className="">
						<h3 className="mb-5 text-2xl font-semibold">
							Work <span className="text-teal-700">Experience</span>
						</h3>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Qualification;
