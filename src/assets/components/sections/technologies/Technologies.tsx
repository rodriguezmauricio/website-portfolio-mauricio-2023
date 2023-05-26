import "./technologies.scss";
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

import { FaMobileAlt } from "react-icons/fa";

const Technologies = () => {
	const TECH_ICON_SIZE = 80;

	const technologies = [
		{
			tech: "HTML5",
			icon: <SiHtml5 size={TECH_ICON_SIZE} />,
		},
		{
			tech: "CSS3",
			icon: <SiCss3 size={TECH_ICON_SIZE} />,
		},
		{
			tech: "JavaScript",
			icon: <SiJavascript size={TECH_ICON_SIZE} />,
		},
		{
			tech: "TypeScript",
			icon: <SiTypescript size={TECH_ICON_SIZE} />,
		},
		{
			tech: "React Js",
			icon: <SiReact size={TECH_ICON_SIZE} />,
		},
		{
			tech: "React Native",
			icon: <FaMobileAlt size={TECH_ICON_SIZE} />,
		},
		{
			tech: "Sass/Scss",
			icon: <SiSass size={TECH_ICON_SIZE} />,
		},
		{
			tech: "GitHub",
			icon: <SiGithub size={TECH_ICON_SIZE} />,
		},
		{
			tech: "Wordpress",
			icon: <SiWordpress size={TECH_ICON_SIZE} />,
		},
		{
			tech: "Photoshop",
			icon: <SiAdobephotoshop size={TECH_ICON_SIZE} />,
		},
		{
			tech: "Illustrator",
			icon: <SiAdobeillustrator size={TECH_ICON_SIZE} />,
		},
	];

	return (
		<section className="techs">
			{technologies.map((item) => (
				<div key={item.tech} className="tech-icon">
					{item.icon}
					<span>{item.tech}</span>
				</div>
			))}
		</section>
	);
};

export default Technologies;
