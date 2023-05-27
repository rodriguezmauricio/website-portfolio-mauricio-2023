import "./button.scss";
import { motion } from "framer-motion";

import { FiArrowUpRight, FiGithub } from "react-icons/fi";

interface IButtonProps {
	children: string;
	color?: string;
	textColor?: string;
	border?: string;
	link?: string;
	isGithub?: boolean;
}

const Button = ({
	children,
	color = "#fff",
	textColor = "#eebd64",
	border = "none",
	link,
	isGithub = false,
}: IButtonProps) => {
	return (
		<motion.button
			whileTap={{ scale: 0.95 }}
			className="mainButton"
			style={{ backgroundColor: color, color: textColor, border: `3px solid ${border}` }}
		>
			<a href={link} target="_blank">
				{children} {isGithub ? <FiGithub size={20} /> : <FiArrowUpRight size={20} />}
			</a>
		</motion.button>
	);
};

export default Button;
