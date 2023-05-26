import "./button.scss";
import { motion } from "framer-motion";

interface IButtonProps {
	children: string;
	color?: string;
	textColor?: string;
}

const Button = ({ children, color = "#fff", textColor = "#c3a060" }: IButtonProps) => {
	return (
		<motion.button
			whileTap={{ scale: 0.95 }}
			className="mainButton"
			style={{ backgroundColor: color, color: textColor }}
		>
			{children}
		</motion.button>
	);
};

export default Button;
