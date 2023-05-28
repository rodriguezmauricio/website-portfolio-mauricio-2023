import "./portfolio-section.scss";
import PortfolioCover from "./portfolio-cover/PortfolioCover";
import { portfolioContent } from "../../../utils/arrays";
import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface IPortfolioSectionProps {
	language: string;
}

const PortfolioSection = ({ language }: IPortfolioSectionProps) => {
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
	const xleftToRight = useTransform(leftToRight, [0, 0.3], [-100, 0]);
	const xrightToLeft = useTransform(rightToLeft, [0, 0.3], [100, 0]);

	const [selectedFilter, setSelectedFilter] = useState("all");

	const filterButtons = [
		{
			title: "Show All",
			titlePt: "Mostrar Todos",
			type: "all",
		},
		{
			title: "Real Cases",
			titlePt: "Casos Reais",
			type: "real",
		},
		{
			title: "Personal Projects",
			titlePt: "Projetos Pessoais",
			type: "personal",
		},
	];

	return (
		<section className="portfolio" id="portfolio-section">
			<div className="portfolio-content">
				<motion.div ref={leftRef} style={{ opacity, x: xleftToRight }} className="left">
					<h2 className="dektop-title">
						PO
						<br />
						RT
						<br />
						FO
						<br />
						LI
						<br />
						O.
					</h2>
					<h2 className="mobile-title">
						PORT
						<br />
						FOLIO.
					</h2>
				</motion.div>
				<motion.div ref={rightRef} style={{ opacity, x: xrightToLeft }} className="right">
					<div className="filters">
						{filterButtons.map((item) => {
							return language === "en" ? (
								<button
									key={item.type}
									style={{
										backgroundColor:
											selectedFilter === item.type ? "#eebd64" : "",
										color: selectedFilter === item.type ? "#111" : "#fff",
										fontWeight: "bold",
									}}
									onClick={() => setSelectedFilter(item.type)}
								>
									{item.title}
								</button>
							) : (
								<button
									key={item.type}
									style={{
										backgroundColor:
											selectedFilter === item.type ? "#eebd64" : "",
									}}
									onClick={() => setSelectedFilter(item.type)}
								>
									{item.titlePt}
								</button>
							);
						})}
					</div>
					<div className="content">
						{portfolioContent
							.filter(
								(item) =>
									selectedFilter === item.projectType || selectedFilter === "all"
							)
							.map((item) => (
								<motion.div
									className="port-item"
									key={Math.random()}
									animate={{ opacity: 1, y: 0 }}
									initial={{ opacity: 0, y: 50 }}
									transition={{ duration: 0.5 }}
								>
									<PortfolioCover
										language={language}
										projectName={item.projectName}
										projectLink={item.projectLink}
										repositoryLink={item.repositoryLink}
										bgImage={item.bgImage}
										projectType={item.projectType}
									/>
								</motion.div>
							))}
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default PortfolioSection;
