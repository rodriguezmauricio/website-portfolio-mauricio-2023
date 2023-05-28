import "./contact-section.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface IContactSection {
	language: string;
}

const ContactSection = ({ language }: IContactSection) => {
	const leftRef = useRef(null);
	const rightRef = useRef(null);

	const leftToRight = useScroll({
		target: leftRef,
		offset: ["start end", "end start"],
	}).scrollYProgress;

	const rightToLeft = useScroll({
		target: rightRef,
		offset: ["start end", "end start"],
	}).scrollYProgress;

	const opacity = useTransform(leftToRight, [0, 0.3], [0, 1]);
	const xLeftToRight = useTransform(leftToRight, [0, 0.3], [-100, 0]);
	const xRightToLeft = useTransform(rightToLeft, [0, 0.3], [100, 0]);

	return (
		<section className="contact" id="contact-section">
			<div className="content">
				<motion.div ref={leftRef} style={{ opacity, x: xLeftToRight }} className="left">
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
				</motion.div>

				<motion.div ref={rightRef} style={{ opacity, x: xRightToLeft }} className="right">
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
				</motion.div>
			</div>
		</section>
	);
};

export default ContactSection;
