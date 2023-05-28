import "./App.scss";
import PortfolioSection from "./assets/components/sections/portfolio/PortfolioSection";

import IntroSection from "./assets/components/sections/intro/IntroSection";
import FormationSection from "./assets/components/sections/formation/FormationSection";
import ContactSection from "./assets/components/sections/contact/ContactSection";
import ResumeSection from "./assets/components/sections/resume/ResumeSection";
import Navigation from "./assets/components/navigation/Navigation";
import { useState, useEffect } from "react";
import Footer from "./assets/components/Footer/Footer";

function App() {
	const [language, setLanguage] = useState("en");

	const scrollToSection = (id: string) => {
		const element = document.querySelector(`#${id}`);

		if (element) {
			const topOffset = element.getBoundingClientRect().top + window.pageYOffset;

			window?.scrollTo({
				behavior: "smooth",
				top: topOffset - 90,
			});
		}
	};

	const [activeSection, setActiveSection] = useState("intro-section");

	useEffect(() => {
		const handleScroll = () => {
			const sections = document.querySelectorAll("section");

			sections.forEach((section) => {
				const { top, bottom } = section.getBoundingClientRect();
				const { innerHeight } = window;

				if (top <= innerHeight / 2 && bottom >= innerHeight / 2) {
					setActiveSection(section.id);
				} else if (window.pageYOffset === 0) {
					setActiveSection("intro-section");
				}
			});
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const getMenuItemColor = (itemId: string) => {
		return itemId === activeSection ? "#eebd64" : "#fff";
	};

	return (
		<>
			<Navigation
				language={language}
				setLanguage={setLanguage}
				scrollToSection={scrollToSection}
				getMenuItemColor={getMenuItemColor}
			/>
			<main>
				<IntroSection language={language} />
				<PortfolioSection language={language} />
				<FormationSection language={language} />
				<ResumeSection language={language} />
				<ContactSection language={language} />
			</main>
			<Footer />
		</>
	);
}

export default App;
