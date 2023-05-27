import "./button.scss";
import { motion } from "framer-motion";

interface IButtonProps {
	children: string;
	color?: string;
	textColor?: string;
	border?: string;
	link?: string;
}

const Button = ({
	children,
	color = "#fff",
	textColor = "#eebd64",
	border = "none",
	link,
}: IButtonProps) => {
	return (
		<motion.button
			whileTap={{ scale: 0.95 }}
			className="mainButton"
			style={{ backgroundColor: color, color: textColor, border: `3px solid ${border}` }}
		>
			<a href={link} target="_blank">
				{children}
			</a>
		</motion.button>
	);
};

export default Button;
