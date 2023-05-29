import "./contact-section.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

interface IContactSection {
	language: string;
}

const ContactSection = ({ language }: IContactSection) => {
	// BEGIN ANIMATION
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

	//END ANIMATION

	//BEGIN FORM HANDLE
	const [formContent, setFormContent] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const handleFormInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormContent({ ...formContent, [e.currentTarget.name]: e.target.value });
	};

	const handleFormTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setFormContent({ ...formContent, [e.currentTarget.name]: e.target.value });
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		//verifica se todos os campos foram preenchidos
		if (
			!formContent.name ||
			!formContent.email ||
			!formContent.subject ||
			!formContent.message
		) {
			return alert("preencha todos os campos");
		}

		const templateParams = {
			from_name: formContent.name,
			email: formContent.email,
			subject: formContent.subject,
			message: formContent.message,
		};

		//se estiver tudo preenchido envia o email
		emailjs
			.send("service_zfmla4c", "template_8d5rvpe", templateParams, "BLifxt5picuUNlRsL")
			.then((response) => {
				alert(`Email enviado com sucesso.\n${response.status}\n${response.text}`);
				setFormContent({
					name: "",
					email: "",
					subject: "",
					message: "",
				});
			}),
			(err: string) => {
				alert(`Erro: ${err}`);
			};

		//limpa o formulário depois de enviado
	};

	//END FORM HANDLE

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
					<form onSubmit={(e) => handleSubmit(e)}>
						<input
							type="text"
							name="name"
							placeholder={language === "en" ? "Name" : "Nome"}
							required
							value={formContent.name}
							onChange={handleFormInputs}
						/>
						<input
							type="email"
							name="email"
							placeholder="Email"
							required
							value={formContent.email}
							onChange={handleFormInputs}
						/>
						<input
							type="text"
							name="subject"
							placeholder={language === "en" ? "Subject" : "Assunto"}
							required
							value={formContent.subject}
							onChange={handleFormInputs}
						/>
						<textarea
							name="message"
							id=""
							cols={30}
							rows={5}
							placeholder={language === "en" ? "Message" : "Mensagem"}
							required
							value={formContent.message}
							onChange={handleFormTextArea}
						></textarea>
						<motion.button onClick={handleSubmit} whileTap={{ scale: 0.95 }}>
							{language === "en" ? "Submit" : "Enviar"}
						</motion.button>
					</form>
				</motion.div>
			</div>
		</section>
	);
};

export default ContactSection;
