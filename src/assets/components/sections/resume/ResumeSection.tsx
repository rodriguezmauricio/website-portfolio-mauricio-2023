import "./resume-section.scss";

interface IResumeSection {
	language: string;
}

const ResumeSection = ({ language }: IResumeSection) => {
	return (
		<section className="resume" id="resume-section">
			{language === "en" ? (
				<>
					<h2>Resume.</h2>
				</>
			) : (
				<>
					<h2>Currículo.</h2>
				</>
			)}
		</section>
	);
};

export default ResumeSection;
