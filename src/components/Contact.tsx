import {
	AiOutlineMail,
	AiOutlinePhone,
	AiOutlineWhatsApp,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const email = "gustavo.passarella@hotmail.com";
const phoneNumber = "+447580577781";

const contactItems = [
	{
		id: 0,
		label: "Call",
		link: `tel:${phoneNumber}`,
		icon: AiOutlinePhone,
	},
	{
		id: 1,
		label: "Email",
		link: `mailto:${email}`,
		icon: AiOutlineMail,
	},
	{
		id: 2,
		label: "WhatsApp",
		link: `https://wa.me/${phoneNumber}`,
		icon: AiOutlineWhatsApp,
	},
];

function Contact() {
	return (
		<section id="contact">
			<div
				className="mx-auto p-6 md:px-10 py-14 max-w-3xl bg-gradient-to-tr from-[#0B1D2F] to-[#134E48]
							rounded-tl-[20px] rounded-br-[20px] rounded-tr-[50px] rounded-bl-[50px] contact-shadow"
			>
				<h2 className="mb-10 text-3xl font-bold md:mt-0 md:text-4xl text-center">
					Contact
				</h2>
				<div className="flex flex-col items-center md:flex-row md:gap-10 md:items-start">
					<div className="md:w-3/5 mb-8 text-center md:text-left md:px-10 ">
						<h3 className="text-2xl md:text-3xl font-semibold mb-4">
							Available for freelance and fulltime opportunities
						</h3>
						<p>feel free to directly contact me via Email or WhatsApp</p>
					</div>
					<div className="md:w-1/2 flex flex-col gap-3">
						{contactItems.map((item, i) => {
							return (
								<Link to={item.link} key={i}>
									<div className="flex items-center gap-3 transition hover:translate-x-1 hover:text-secondary">
										<item.icon size={30} />
										<span>{item.label}</span>
									</div>
								</Link>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
