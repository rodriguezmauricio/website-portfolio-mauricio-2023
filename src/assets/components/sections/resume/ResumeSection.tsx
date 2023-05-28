import "./resume-section.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface IResumeSection {
	language: string;
}

const ResumeSection = ({ language }: IResumeSection) => {
	const leftRef = useRef(null);
	// const rightRef = useRef(null);

	const leftToRight = useScroll({
		target: leftRef,
		offset: ["end end", "end start"],
	}).scrollYProgress;

	// const rightToLeft = useScroll({
	// 	target: rightRef,
	// 	offset: ["start end", "end start"],
	// }).scrollYProgress;

	const opacity = useTransform(leftToRight, [0, 0.3], [0, 1]);
	const xLeftToRight = useTransform(leftToRight, [0, 0.3], [-100, 0]);
	// const xRightToLeft = useTransform(rightToLeft, [0, 0.3], [100, 0]);

	return (
		<section className="resume" id="resume-section">
			<div className="content">
				<motion.div ref={leftRef} style={{ opacity, x: xLeftToRight }} className="left">
					<h2>{language === "en" ? "Resume." : "Currículo"}</h2>
				</motion.div>

				<motion.div className="right"></motion.div>
			</div>
		</section>
	);
};

export default ResumeSection;
