import "./navigation.scss";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { navMenu } from "../../utils/arrays";
import BrazilFlag from "../../images/brazil-flag.png";
import UkFlag from "../../images/uk-flag.png";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface INavigationProps {
	// activeMenu: string;
	language: string;
	setLanguage: (language: string) => void;
	scrollToSection: (id: string) => void;
	// setActiveMenu: (id: string) => void;
}

const Navigation = ({ language, setLanguage, scrollToSection }: INavigationProps) => {
	const [activeMenu, setActiveMenu] = useState("intro-section");
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.pageYOffset;
			if (scrollTop > 0) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<header
			style={
				isScrolled
					? { backdropFilter: "blur(10px)", height: "60px", transition: "all 0.3s" }
					: { backdropFilter: "blur(0px)", transition: "all 0.3s" }
			}
		>
			<div className="logo">
				<h1>
					<span>M</span>
				</h1>
			</div>
			<nav className="navbar">
				<ul>
					{language === "en" ? (
						<>
							{navMenu.map((item) => {
								return (
									<motion.li
										key={Math.random()}
										whileHover={{ color: "#c3a060" }}
										style={{
											color:
												activeMenu === item.sectionId ? "#c3a060" : "#fff",
										}}
										onClick={() => {
											setActiveMenu(item.sectionId);
											scrollToSection(item.sectionId);
										}}
									>
										{item.id + item.title}
									</motion.li>
								);
							})}
						</>
					) : (
						<>
							{navMenu.map((item) => (
								<motion.li
									key={Math.random()}
									whileHover={{ color: "#c3a060" }}
									style={{
										color: activeMenu === item.sectionId ? "#c3a060" : "#fff",
									}}
									onClick={() => {
										setActiveMenu(item.sectionId);
										scrollToSection(item.sectionId);
									}}
								>
									{item.id + item.titlePt}
								</motion.li>
							))}
						</>
					)}
				</ul>
			</nav>
			<div className="socials">
				<div className="icon">
					<motion.a
						style={{ color: "#fff" }}
						whileHover={{ color: "#c3a060" }}
						href="https://github.com/rodriguezmauricio"
						target="_blank"
					>
						<SiGithub size={30} />
					</motion.a>
				</div>
				<div className="icon">
					<motion.a
						style={{ color: "#fff" }}
						whileHover={{ color: "#c3a060" }}
						href="https://www.linkedin.com/in/mauricioar/"
						target="_blank"
					>
						<SiLinkedin size={30} />
					</motion.a>
				</div>
				<div className="language">
					<div className="icon flag" onClick={() => setLanguage("en")}>
						<motion.img whileHover={{ scale: 1.2 }} src={UkFlag} alt="English" />
					</div>
					<div className="icon" onClick={() => setLanguage("pt")}>
						<motion.img whileHover={{ scale: 1.2 }} src={BrazilFlag} alt="Português" />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navigation;
