import "./technologies.scss";
import { useEffect, useState } from "react";
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
	const [TECH_ICONS, SET_TECH_ICONS] = useState({
		wrap: "no-wrap",
		size: 80,
	});

	const { wrap, size } = TECH_ICONS;
	const width = window.innerWidth;
	useEffect(() => {
		if (width <= 480) {
			SET_TECH_ICONS({
				wrap: "wrap",
				size: 50,
			});
		} else if (width > 480 && width <= 768) {
			SET_TECH_ICONS({
				wrap: "no-wrap",
				size: 30,
			});
		} else if (width > 768 && width <= 1200) {
			SET_TECH_ICONS({
				wrap: "no-wrap",
				size: 40,
			});
		} else if (width > 1200 && width <= 1450) {
			SET_TECH_ICONS({
				wrap: "no-wrap",
				size: 60,
			});
		} else {
			SET_TECH_ICONS({
				wrap: "no-wrap",
				size: 80,
			});
		}
	}, [width]);

	const technologies = [
		{
			tech: "HTML5",
			icon: <SiHtml5 size={size} />,
		},
		{
			tech: "CSS3",
			icon: <SiCss3 size={size} />,
		},
		{
			tech: "JavaScript",
			icon: <SiJavascript size={size} />,
		},
		{
			tech: "TypeScript",
			icon: <SiTypescript size={size} />,
		},
		{
			tech: "React Js",
			icon: <SiReact size={size} />,
		},
		{
			tech: "React Native",
			icon: <FaMobileAlt size={size} />,
		},
		{
			tech: "Sass/Scss",
			icon: <SiSass size={size} />,
		},
		{
			tech: "GitHub",
			icon: <SiGithub size={size} />,
		},
		{
			tech: "Wordpress",
			icon: <SiWordpress size={size} />,
		},
		{
			tech: "Photoshop",
			icon: <SiAdobephotoshop size={size} />,
		},
		{
			tech: "Illustrator",
			icon: <SiAdobeillustrator size={size} />,
		},
	];

	return (
		<section
			className="techs"
			style={{ flexWrap: wrap === "no-wrap" ? "nowrap" : "wrap", gap: "10rem" }}
		>
			{technologies.map((item) => (
				<div key={item.tech} className="tech-icon">
					{item.icon}
					{wrap === "no-wrap" ? <span>{item.tech}</span> : null}
				</div>
			))}
		</section>
	);
};

export default Technologies;
