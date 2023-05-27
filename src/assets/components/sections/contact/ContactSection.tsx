import "./contact-section.scss";
import { motion } from "framer-motion";

interface IContactSection {
	language: string;
}

const ContactSection = ({ language }: IContactSection) => {
	return (
		<section className="contact" id="contact-section">
			<div className="content">
				<div className="left">
					{language === "en" ? (
						<>
							<h2>
								Con
								<br />
								tact.
							</h2>
						</>
					) : (
						<>
							<h2>
								Con
								<br />
								tato.
							</h2>
						</>
					)}
				</div>

				<div className="right">
					<form action="">
						<input
							type="text"
							name="name"
							placeholder={language === "en" ? "Name" : "Nome"}
							required
						/>
						<input type="email" name="email" placeholder="Email" required />
						<input
							type="text"
							name="subject"
							placeholder={language === "en" ? "Subject" : "Assunto"}
							required
						/>
						<textarea
							name="message"
							id=""
							cols={30}
							rows={5}
							placeholder={language === "en" ? "Message" : "Mensagem"}
						></textarea>
						<motion.button whileTap={{ scale: 0.95 }}>
							{language === "en" ? "Submit" : "Enviar"}
						</motion.button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
