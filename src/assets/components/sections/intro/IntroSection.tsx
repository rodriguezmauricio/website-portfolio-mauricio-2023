import "./intro-section.scss";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

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

	return (
		<section className="hero-section" id="intro-section">
			<motion.section
				ref={targetRef}
				style={{ opacity, x: translateX }}
				className="hero-container"
			>
				<>
					<motion.h1 className="teste">
						Frontend <br />
						<span>
							Developer & <br />
						</span>
						Web Designer
					</motion.h1>
					<p className="teste2">
						<span>
							<i>
								{language === "en"
									? `I used to be a Designer but then I’ve got bitten by a
									Developer...`
									: `Eu era Designer, mas um dia fui mordido por um Desenvolvedor...`}
							</i>
						</span>
					</p>
				</>
			</motion.section>

			<AboutSection language={language} />
			<Technologies />
		</section>
	);
};

export default IntroSection;
