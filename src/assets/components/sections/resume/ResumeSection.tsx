import "./resume-section.scss";

interface IResumeSection {
	language: string;
}

const ResumeSection = ({ language }: IResumeSection) => {
	return (
		<section className="resume" id="resume-section">
			{language === "en" ? (
				<>
					<h2>05/Resume.</h2>
				</>
			) : (
				<>
					<h2>05/Currículo.</h2>
				</>
			)}
		</section>
	);
};

export default ResumeSection;
