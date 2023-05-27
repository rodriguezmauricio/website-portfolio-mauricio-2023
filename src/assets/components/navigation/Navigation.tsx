import "./navigation.scss";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { navMenu } from "../../utils/arrays";
import BrazilFlag from "../../images/brazil-flag.png";
import UkFlag from "../../images/uk-flag.png";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface INavigationProps {
	language: string;
	setLanguage: (language: string) => void;
	scrollToSection: (id: string) => void;
	getMenuItemColor: (id: string) => string;
}

const Navigation = ({
	language,
	setLanguage,
	scrollToSection,
	getMenuItemColor,
}: INavigationProps) => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const isScrolledMobile = {
		backdropFilter: "blur(10px)",
		height: "60px",
		transition: "all 0.3s",
		borderBottom: "1px solid white",
	};

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
		<>
			<header
				className="header-desktop"
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
											whileHover={{ color: "#eebd64" }}
											style={{
												color: getMenuItemColor(item.sectionId),
											}}
											onClick={() => {
												scrollToSection(item.sectionId);
											}}
										>
											{item.title}
										</motion.li>
									);
								})}
							</>
						) : (
							<>
								{navMenu.map((item) => {
									console.log(item.sectionId);
									return (
										<motion.li
											key={Math.random()}
											whileHover={{ color: "#eebd64" }}
											style={{
												color: getMenuItemColor(item.sectionId),
											}}
											onClick={() => {
												scrollToSection(item.sectionId);
											}}
										>
											{item.titlePt}
										</motion.li>
									);
								})}
							</>
						)}
					</ul>
				</nav>
				<div className="socials">
					<div className="icon">
						<motion.a
							style={{ color: "#fff" }}
							whileHover={{ color: "#eebd64" }}
							href="https://github.com/rodriguezmauricio"
							target="_blank"
						>
							<SiGithub size={30} />
						</motion.a>
					</div>
					<div className="icon">
						<motion.a
							style={{ color: "#fff" }}
							whileHover={{ color: "#eebd64" }}
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
							<motion.img
								whileHover={{ scale: 1.2 }}
								src={BrazilFlag}
								alt="Português"
							/>
						</div>
					</div>
				</div>
			</header>

			{/*  HEADER MOBILE //////////////////////////////////////////// */}
			<header
				className="header-mobile"
				style={
					isScrolled
						? { ...isScrolledMobile }
						: { backdropFilter: "blur(0px)", transition: "all 0.3s" }
				}
			>
				<div className="header-nav">
					<div className="language">
						<div className="icon flag" onClick={() => setLanguage("en")}>
							<motion.img whileHover={{ scale: 1.2 }} src={UkFlag} alt="English" />
						</div>
						<div className="icon" onClick={() => setLanguage("pt")}>
							<motion.img
								whileHover={{ scale: 1.2 }}
								src={BrazilFlag}
								alt="Português"
							/>
						</div>
					</div>

					<div className="logo">
						<h1>
							<span>M</span>
						</h1>
					</div>
					<div className="menu-icon" onClick={() => setIsMenuOpen(true)}>
						<GiHamburgerMenu size={30} />
					</div>
				</div>

				<nav className="navbar" id={isMenuOpen ? "" : "hidden"}>
					<ul>
						{language === "en" ? (
							<>
								{navMenu.map((item) => {
									return (
										<motion.li
											key={Math.random()}
											whileHover={{ color: "#eebd64" }}
											style={{
												color: getMenuItemColor(item.sectionId),
											}}
											onClick={() => {
												setIsMenuOpen(false);
												scrollToSection(item.sectionId);
											}}
										>
											{item.title}
										</motion.li>
									);
								})}
							</>
						) : (
							<>
								{navMenu.map((item) => {
									console.log(item.sectionId);
									return (
										<motion.li
											key={Math.random()}
											whileHover={{ color: "#eebd64" }}
											style={{
												color: getMenuItemColor(item.sectionId),
											}}
											onClick={() => {
												setIsMenuOpen(false);
												scrollToSection(item.sectionId);
											}}
										>
											{item.titlePt}
										</motion.li>
									);
								})}
							</>
						)}
						<li
							className="close-menu"
							onClick={() => {
								setIsMenuOpen(false);
							}}
						>
							<FaTimes size={30} color="#fff" />
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
};

export default Navigation;
