import "./intro-section.scss";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

import AboutSection from "../about/AboutSection";
import Technologies from "../technologies/Technologies";

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
	//

	return (
		<section className="hero-section" id="intro-section">
			<motion.section
				ref={targetRef}
				style={{ opacity }}
				animate={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: "-100px" }}
				transition={{ duration: 2 }}
				className="hero-container"
			>
				{language === "en" ? (
					<>
						<h1>
							Frontend <br />
							<span>
								Developer/ <br />
							</span>
							Web Designer
						</h1>
						<p>
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
