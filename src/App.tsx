import "./App.scss";
import { motion } from "framer-motion";
import PortfolioCover from "./assets/components/portfolio-cover/PortfolioCover";
import imagemSobre from "./assets/images/phone-img.png";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import {
	SiTypescript,
	SiJavascript,
	SiHtml5,
	SiCss3,
	SiReact,
	SiSass,
	SiGithub,
	SiWordpress,
	SiAdobephotoshop,
	SiAdobeillustrator,
} from "react-icons/si";

function App() {
	const TECH_ICON_SIZE = 100;

	const navMenu = [
		{
			id: "01/",
			title: "Home.",
		},
		{
			id: "02/",
			title: "About.",
		},
		{
			id: "03/",
			title: "Portfolio.",
		},
		{
			id: "04/",
			title: "Formation.",
		},
		{
			id: "05/",
			title: "Contact.",
		},
	];

	const formationDev = [
		{
			title: "Baschelor in Computer Science",
			local: "Estácio de Sá",
			year: 2023,
		},
		{
			title: "The Modern JavaScript Bootcamp",
			local: "Udemy",
			year: 2022,
		},
		{
			title: "ES6 Javascript: The complete Developer’s Guide",
			local: "Udemy",
			year: 2022,
		},
		{
			title: "Modern React with Redux [2023 Update]",
			local: "Udemy",
			year: 2022,
		},
		{
			title: "The Complete React Native + Hooks Course",
			local: "Udemy",
			year: 2022,
		},
		{
			title: "Typescript - The Complete Developer’s Guide",
			local: "Udemy",
			year: 2022,
		},
	];

	const formationDesign = [
		{
			title: "Adobe Certified Expert Photoshop",
			local: "Adobe",
			year: 2010,
		},
		{
			title: "Adobe Certified Expert Illustrator",
			local: "Adobe",
			year: 2010,
		},
		{
			title: "Adobe Certified Expert Indesign",
			local: "Adobe",
			year: 2011,
		},
		{
			title: "Adobe Certified Expert Acrobat",
			local: "Adobe",
			year: 2011,
		},
		{
			title: "Adobe Certified Design Specialist",
			local: "Adobe",
			year: 2011,
		},
		{
			title: "Adobe Certified Design Master",
			local: "Adobe",
			year: 2011,
		},
	];

	const portfolioContent = [
		{
			projectName: "netflix app",
			projectLink: "",
			repositoryLink: "",
			bgImage:
				"https://cdn.dribbble.com/users/1858541/screenshots/14532125/media/e3ef16a597cb3a1000914d7fe9d70b77.png?compress=1&resize=1000x750&vertical=top",
			projectType: "real",
		},
		{
			projectName: "Personal Website",
			projectLink: "",
			repositoryLink: "",
			bgImage:
				"https://cdn.dribbble.com/users/4390150/screenshots/15495922/media/79d94e27561f9c575b6b68af80a9af70.jpg?compress=1&resize=1000x750&vertical=top",
			projectType: "real",
		},
		{
			projectName: "Ramana Borba (Dancer Influencer)",
			projectLink: "",
			repositoryLink: "",
			bgImage:
				"https://cdn.dribbble.com/users/124454/screenshots/17292986/media/9f6fb859e4bb3ca7b35992ad09981802.png?compress=1&resize=1000x750&vertical=top",
			projectType: "real",
		},
		{
			projectName: "Franciale Melo (Travel Blog)",
			projectLink: "",
			repositoryLink: "",
			bgImage:
				"https://cdn.dribbble.com/users/4177161/screenshots/13948973/media/b1da13bdf38c33be3cb2ec8c106bfe21.png?compress=1&resize=1000x750&vertical=top",
			projectType: "personal",
		},
		{
			projectName: "Martz Todo list app",
			projectLink: "",
			repositoryLink: "",
			bgImage:
				"https://cdn.dribbble.com/users/124454/screenshots/17292806/media/4948ea25318ef78f8b004de6ffcd1758.png?compress=1&resize=1000x750&vertical=top",
			projectType: "personal",
		},
	];

	return (
		<motion.main
			animate={{ opacity: 1, y: 0 }}
			initial={{ opacity: 0, y: "-100px" }}
			transition={{ duration: 2 }}
		>
			{/* 01/INTRO BEGIN */}
			{/* TOP NAVIGATION BEGIN */}
			<header>
				<div className="logo">
					<h1>
						<span>M</span>
					</h1>
				</div>
				<nav className="navbar">
					<ul>
						{navMenu.map((item) => (
							<li key={item.id}>{item.id + item.title}</li>
						))}
					</ul>
				</nav>
				<div className="socials">
					<div className="icon">
						<FaGithub size={30} />
					</div>
					<div className="icon">
						<FaLinkedinIn size={30} />
					</div>
				</div>
			</header>

			{/* TOP NAVIGATION END */}

			{/* HERO BEGIN */}
			<section className="hero-section">
				<section className="hero-container">
					<h1>
						Frontend <br />
						<span>
							Developer/ <br />
						</span>
						Web Designer
					</h1>
					<p>
						<span>
							<i>
								I used to be a Designer but then I’ve got bitten by a Developer...
							</i>
						</span>
					</p>
				</section>
				{/* HERO END */}

				{/* ABOUT BEGIN */}
				<section className="about">
					<div className="left">
						<div className="title">
							<h2>02/About.</h2>
						</div>

						<article className="description">
							<p>
								For over over a decade I’ve been creating websites with beautiful
								design that solves my clients problems. Now I’m taking a step
								forward in order to became a full time frontend developer who will
								bring technical and visual aspects together, to deliver even a
								better experience to whom I’m working with.
							</p>
							<p>
								I’m passionate about digital products. Great presentations, clean
								code and ambitious projects matter to me. I love details, really
								believe that less is more, quality matters and beautiful is better
								then ugly.
							</p>
						</article>

						<div className="is-that-you-container">
							<article className="left">
								<p>
									I’m a computer science student who spends the whole day coding
									and learning the best practices to write clean and
									understandable code to become the best possible developer.
								</p>
								<p>
									I’m free for freelance but I'm more interested in a Frontend
									Developer position in a great company that’s willing to receive
									me in the their team.
								</p>
							</article>
							<div className="right">
								<h3>
									Is <br />
									<span>that</span> <br />
									you <span>?</span>
								</h3>
							</div>
						</div>
					</div>
					<div className="right">
						<img src={imagemSobre} alt="Mauricio Rodriguez" />
						{/* <img src="./assets/images/phone-img.png" alt="" /> */}
					</div>
				</section>
				{/* ABOUT END */}
				{/* TECH BEGIN */}

				<section className="techs">
					<div className="tech-icon">
						<SiHtml5 size={TECH_ICON_SIZE} />
					</div>
					<div className="tech-icon">
						<SiCss3 size={TECH_ICON_SIZE} />
					</div>
					<div className="tech-icon">
						<SiJavascript size={TECH_ICON_SIZE} />
					</div>
					<div className="tech-icon">
						<SiTypescript size={TECH_ICON_SIZE} />
					</div>
					<div className="tech-icon">
						<SiReact size={TECH_ICON_SIZE} />
					</div>
					<div className="tech-icon">
						<SiSass size={TECH_ICON_SIZE} />
					</div>
					<div className="tech-icon">
						<SiGithub size={TECH_ICON_SIZE} />
					</div>
					<div className="tech-icon">
						<SiWordpress size={TECH_ICON_SIZE} />
					</div>
					<div className="tech-icon">
						<SiAdobephotoshop size={TECH_ICON_SIZE} />
					</div>
					<div className="tech-icon">
						<SiAdobeillustrator size={TECH_ICON_SIZE} />
					</div>
				</section>
				{/* TECH END */}
			</section>
			{/* 01/INTRO END */}

			{/* 03/PORTFOLIO BEGIN */}

			<section className="portfolio">
				<div className="left">
					<h2>
						03/
						<br />
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
				</div>
				<div className="right">
					<div className="filters">
						<button>Show All</button>
						<button>Real Cases</button>
						<button>Personal Projects</button>
					</div>
					<div className="content">
						{portfolioContent.map((item) => (
							<PortfolioCover
								key={item.projectName}
								projectName={item.projectName}
								projectLink={item.projectLink}
								repositoryLink={item.repositoryLink}
								bgImage={item.bgImage}
								projectType={item.projectType}
							/>
						))}
					</div>
				</div>
			</section>
			{/* 03/PORTFOLIO END */}

			{/* 04/FORMATION BEGIN */}
			<section className="formation">
				<div className="header">
					<h2>
						<span className="courses">04/Courses.</span>
					</h2>
					<h2>04/Formation.</h2>
					<h2>
						<span className="certificate">04/Certificates.</span>
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
									{item.title} <br />
									<span>{`${item.local} (${item.year})`}</span>
								</li>
							))}
						</ul>
					</div>
					<div className="right">
						<h3>
							<span>
								Web Design <br />
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
			</section>
			{/* 03/FORMATION END */}

			{/* 04/EXPERIENCE BEGIN */}
			<section className="experience">
				<h2>04/Experience.</h2>
			</section>
			{/* 04/EXPERIENCE END */}

			<section className="contact">
				<div className="content">
					<div className="left">
						<h2>
							05/
							<br />
							Con
							<br />
							tact.
						</h2>
					</div>

					<div className="right">
						<form action="">
							<input type="text" name="name" placeholder="Name" required />
							<input type="email" name="email" placeholder="Email" required />
							<input type="text" name="subject" placeholder="Subject" required />
							<textarea
								name="message"
								id=""
								cols={30}
								rows={5}
								placeholder="Message"
							></textarea>
							<motion.button whileTap={{ scale: 0.95 }}>SUBMIT</motion.button>
						</form>
					</div>
				</div>
			</section>
		</motion.main>
	);
}

export default App;
