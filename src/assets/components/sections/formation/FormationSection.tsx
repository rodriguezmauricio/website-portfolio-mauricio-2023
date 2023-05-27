import "./formation-section.scss";
import { formationDev, formationDesign } from "../../../utils/arrays";

interface IFormationSection {
	language: string;
}

const FormationSection = ({ language }: IFormationSection) => {
	return (
		<section className="formation" id="formation-section">
			{language === "en" ? (
				<>
					<div className="header">
						<h2>
							<span className="courses">Courses.</span>
						</h2>
						<h2>Formation.</h2>
						<h2>
							<span className="certificate">Certificates.</span>
						</h2>
					</div>

					<div className="content">
						<div className="left">
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
						</div>

						<div className="right">
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
						</div>
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
