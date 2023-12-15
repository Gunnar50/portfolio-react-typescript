import axios from "axios";
import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../Spinner";
import { Button } from "./button";
import { Input } from "./input";
import { Textarea } from "./textarea";

const email = "gustavo.passarella@hotmail.com";

function Contact() {
	const [loading, setLoading] = useState(false);

	const onSubmitForm = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setLoading(true);
		const formData = new FormData(event.target as HTMLFormElement);

		formData.append("access_key", "bb4d7297-595d-4a43-bbe9-718d25d09d9d");

		try {
			const response = await axios.post(
				"https://api.web3forms.com/submit",
				formData,
				{
					headers: {
						"Content-Type": "multipart/form-data",
					},
				}
			);

			if (response.data.success) {
				// console.log("Success", response);
				toast.success(response.data.message);
			} else {
				// console.log("Error", response);
				toast.error(response.data.message);
			}
		} catch (error) {
			console.error("An error occurred", error);
			toast.error("An error occurred, please try again later");
		}
		setLoading(false);
	};
	return (
		<section id="contact">
			<div
				className="animate-fadeIn animation-delay-2 mx-auto p-6 md:px-10 py-14 max-w-4xl 
							bg-gradient-to-tr from-[#0B1D2F] to-[#134E48]
							rounded-tl-[20px] rounded-br-[20px] rounded-tr-[50px] rounded-bl-[50px] contact-shadow"
			>
				<h2 className="mb-10 text-3xl font-bold md:mt-0 md:text-4xl text-center">
					Contact
					<hr
						className="w-12 border-t-4 rounded border-teal-700 absolute left-[50%] -translate-x-[54px]
									md:mt-1 md:w-14 md:-translate-x-[65px]"
					/>
				</h2>
				<div className="flex flex-col items-center md:flex-row md:items-start md:px-10">
					<div className="md:w-2/5 mb-8 text-center md:text-left md:pr-10 md:mr-4">
						<h3 className="text-2xl md:text-3xl font-semibold mb-4">
							I'm available for full time opportunities
						</h3>
						<p>
							Feel free to directly contact me via{" "}
							<Link
								className="hover:text-secondary transition-colors"
								to={`mailto:${email}`}
							>
								<u>Email</u>
							</Link>{" "}
							or{" "}
							<Link
								className="hover:text-secondary transition-colors"
								to={`https://www.linkedin.com/in/gustavo-passarella/`}
							>
								<u>Linkedin</u>
							</Link>
						</p>
					</div>

					<div className="md:w-3/5 w-full">
						<form onSubmit={onSubmitForm} className="flex flex-col gap-2">
							<input
								type="hidden"
								name="subject"
								value="New Submission From Contact Form. gustavopassarella.co.uk"
							></input>
							<input type="checkbox" name="botcheck" className="hidden"></input>

							<Input type="text" name="name" placeholder="Name" required />
							<Input type="email" name="email" placeholder="Email" required />
							<Textarea
								name="message"
								placeholder="Message"
								required
							></Textarea>

							<Button variant="secondary" type="submit" className="relative">
								Submit {loading && <Spinner />}
							</Button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
