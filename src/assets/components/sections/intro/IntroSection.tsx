import "./intro-section.scss";
import { motion, useTransform, useScroll, stagger, animate } from "framer-motion";
import { useRef, useState, useEffect } from "react";

import AboutSection from "../about/AboutSection";
import Technologies from "../about/technologies/Technologies";

interface IIntroSectionProps {
	language: string;
}

const IntroSection = ({ language }: IIntroSectionProps) => {
	const targetRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["end end", "end start"],
	});

	const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
	const translateX = useTransform(scrollYProgress, [0, 0.7], [0, -100]);
	//

	const [isOpen, setIsOpen] = useState(false);
	//
	//
	// TESTES DE ANIMAÇÃO INICIO ///////////////////////////////////////////
	useEffect(() => {
		animate(".teste", { scale: isOpen ? 1.2 : 1 }, { duration: 0.2 });
		animate(
			".teste2",
			{ scale: isOpen ? 1.2 : 1 },
			{ duration: 0.2, delay: stagger(0.1, { startDelay: 0.5 }) }
		);
	}, [isOpen]);

	// TESTES DE ANIMAÇÃO FIM /////////////////////////////////////////////

	return (
		<section className="hero-section" id="intro-section">
			<motion.section
				ref={targetRef}
				style={{ opacity, x: translateX }}
				className="hero-container"
			>
				{language === "en" ? (
					<>
						<motion.h1 className="teste" onClick={() => setIsOpen(!isOpen)}>
							Frontend <br />
							<span>
								Developer & <br />
							</span>
							Web Designer
						</motion.h1>
						<p className="teste2">
							<span>
								<i>
									I used to be a Designer but then I’ve got bitten by a
									Developer...
								</i>
							</span>
						</p>
					</>
				) : (
					<>
						<h1>
							Desenvolvedor <br />
							<span>
								Frontend & <br />
							</span>
							Web Designer
						</h1>
						<p>
							<span>
								<i>
									Eu era Designer, mas um dia fui mordido por um Desenvolvedor...
								</i>
							</span>
						</p>
					</>
				)}
			</motion.section>

			<AboutSection language={language} />
			<Technologies />
		</section>
	);
};

export default IntroSection;
