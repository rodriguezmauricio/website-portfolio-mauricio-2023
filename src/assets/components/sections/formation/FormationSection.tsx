import "./formation-section.scss";
import { formationDev, formationDesign } from "../../../utils/arrays";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface IFormationSection {
	language: string;
}

const FormationSection = ({ language }: IFormationSection) => {
	const leftRef = useRef(null);
	const rightRef = useRef(null);
	const centerRef = useRef(null);

	const leftToRight = useScroll({
		target: leftRef,
		offset: ["start end", "end start"],
	}).scrollYProgress;

	const rightToLeft = useScroll({
		target: rightRef,
		offset: ["start end", "end start"],
	}).scrollYProgress;

	const centerOpacity = useScroll({
		target: centerRef,
		offset: ["start end", "end start"],
	}).scrollYProgress;

	const opacity = useTransform(centerOpacity, [0, 0.3], [0, 1]);
	const xleftToRight = useTransform(leftToRight, [0, 0.3], [-200, 0]);
	const xrightToLeft = useTransform(rightToLeft, [0, 0.3], [200, 0]);

	return (
		<section className="formation" id="formation-section">
			{language === "en" ? (
				<>
					<div className="header">
						<motion.h2 ref={leftRef} style={{ opacity: opacity, x: xleftToRight }}>
							<span className="courses">Courses.</span>
						</motion.h2>
						<motion.h2 ref={centerRef} style={{ opacity: opacity }}>
							Formation.
						</motion.h2>
						<motion.h2 ref={rightRef} style={{ opacity: opacity, x: xrightToLeft }}>
							<span className="certificate">Certificates.</span>
						</motion.h2>
					</div>

					<div className="content">
						<motion.div
							ref={leftRef}
							style={{ opacity: opacity, x: xleftToRight }}
							className="left"
						>
							<h3>
								<span>
									Frontend <br />
									Development
								</span>
							</h3>
							<ul>
								{formationDev.map((item) => (
									<li key={item.title}>
										{item.title} • <span>{`${item.local} (${item.year})`}</span>
									</li>
								))}
							</ul>
						</motion.div>

						<motion.div
							ref={rightRef}
							style={{ opacity: opacity, x: xrightToLeft }}
							className="right"
						>
							<h3>
								<span>
									Web Design &<br />
									Graphic Design
								</span>
							</h3>
							<ul>
								{formationDesign.map((item) => (
									<li key={item.title}>
										{item.title} <br />
										<span>{`${item.local} (${item.year})`}</span>
									</li>
								))}
							</ul>
						</motion.div>
					</div>
				</>
			) : (
				<>
					<div className="header">
						<h2>
							<span className="courses">Cursos.</span>
						</h2>
						<h2>Formação.</h2>
						<h2>
							<span className="certificate">Certificados.</span>
						</h2>
					</div>

					<div className="content">
						<div className="left">
							<h3>
								<span>
									Desenvolvedor <br />
									Frontend
								</span>
							</h3>
							<ul>
								{formationDev.map((item) => (
									<li key={item.titlePt}>
										{item.titlePt} <br />
										<span>{`${item.local} (${item.year})`}</span>
									</li>
								))}
							</ul>
						</div>

						<div className="right">
							<h3>
								<span>
									Web Design &<br />
									Design Gráfico
								</span>
							</h3>
							<ul>
								{formationDesign.map((item) => (
									<li key={item.titlePt}>
										{item.titlePt} <br />
										<span>{`${item.local} (${item.year})`}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</>
			)}
		</section>
	);
};

export default FormationSection;
