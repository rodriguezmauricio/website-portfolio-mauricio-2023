import "./about-section.scss";
import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

interface IAboutSection {
	language: string;
}

import imagemSobre from "../../../images/phone-img.png";
const AboutSection = ({ language }: IAboutSection) => {
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

	const opacity = useTransform(leftToRight, [0, 0.4], [0, 1]);
	const xleftToRight = useTransform(leftToRight, [0, 0.4], [-100, 0]);
	const xrightToLeft = useTransform(rightToLeft, [0, 0.4], [100, 0]);

	return (
		<section className="about" id="about-section">
			<div className="left">
				{language === "en" ? (
					<motion.div ref={leftRef} style={{ opacity, x: xleftToRight }}>
						<div className="title">
							<h2>About.</h2>
						</div>
						<article className="description">
							<h2>Who am I?</h2>
							<p>
								For over a decade I’ve been creating websites with beautiful design
								that solves my clients problems. Now I’m taking a step forward to
								become a full-time frontend web and mobile developer who will bring
								technical and visual aspects together, to deliver even a better
								experience to whom I’m working with.
							</p>
							<p>
								I am passionate about digital products. Great presentations, clean
								code and ambitious projects are important to me. I love details,
								really believe that less is more, quality matters and beautiful is
								better then ugly.
							</p>
						</article>

						<div className="is-that-you-container">
							<article className="left">
								<h2>Current Goal</h2>
								<p>
									I’m a computer science student who loves coding and learning the
									best practices to write clean and understandable code aiming to
									become the best possible developer.
								</p>
								<p>
									I am currently available for freelancing but I'm more interested
									in a Frontend Developer position at a great company that is
									willing to have me on their team.
								</p>
							</article>
							<div className="right">
								<h3>
									Is <br />
									<span>that</span> <br />
									you<span>?</span>
								</h3>
							</div>
						</div>
					</motion.div>
				) : (
					<motion.div ref={leftRef} style={{ opacity, x: xleftToRight }}>
						<div className="title">
							<h2>Sobre.</h2>
						</div>
						<article className="description">
							<h2>Quem Sou Eu?</h2>
							<p>
								Há mais de uma década, venho criando sites com um belo design que
								resolve os problemas dos meus clientes. Agora, estou dando um passo
								em frente para me tornar um Desenvolvedor Frontend Web e Mobile
								capaz de juntar os aspectos visuais e técnicos para entregar uma
								experiência ainda melhor para quem eu estiver trabalhando.
							</p>
							<p>
								Sou apaixonado por produtos digitais. Uma grande apresentação,
								código limpo e projetos ambiciosos são importantes para mim. Eu amo
								detalhes e realmente acredito que menos é mais, qualidade importa e
								bonito é melhor do que feio.
							</p>
						</article>

						<div className="is-that-you-container">
							<article className="left">
								<h2>Objetivo Atual</h2>
								<p>
									Sou um estudante de Ciência da Computação que passa o dia
									inteiro digitando código e aprendendo sobre as melhores práticas
									para escrever códigos mais limpos e fáceis de entender, porque
									quero me tornar o melhor desenvolvedor possível.
								</p>
								<p>
									Estou disponível para freelance, mas estou buscando uma posição
									como Desenvolvedor Frontend em uma boa empresa que esteja
									disposta a me receber em seu time de desenvolvimento
								</p>
							</article>
							<div className="right">
								<h3>
									<span>Será</span> <br />
									você<span>?</span>
								</h3>
							</div>
						</div>
					</motion.div>
				)}
			</div>
			<motion.div className="right-img" ref={rightRef} style={{ opacity, x: xrightToLeft }}>
				<img className="img" src={imagemSobre} alt="Mauricio Rodriguez" />
			</motion.div>
		</section>
	);
};

export default AboutSection;
