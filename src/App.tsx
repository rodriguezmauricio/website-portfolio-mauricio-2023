import "./App.scss";
import PortfolioSection from "./assets/components/sections/portfolio/PortfolioSection";

import IntroSection from "./assets/components/sections/intro/IntroSection";
import FormationSection from "./assets/components/sections/formation/FormationSection";
import ContactSection from "./assets/components/sections/contact/ContactSection";
import ResumeSection from "./assets/components/sections/resume/ResumeSection";
import Navigation from "./assets/components/navigation/Navigation";
import { useState } from "react";

function App() {
	const [language, setLanguage] = useState("br");

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

	return (
		<main>
			<Navigation
				language={language}
				setLanguage={setLanguage}
				scrollToSection={scrollToSection}
			/>
			<IntroSection language={language} />
			<PortfolioSection language={language} />
			<FormationSection language={language} />
			<ResumeSection language={language} />
			<ContactSection language={language} />
		</main>
	);
}

export default App;
