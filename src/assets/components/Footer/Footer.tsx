import "./footer.scss";

const Footer = () => {
	const date = new Date();
	const ano = date.getFullYear();
	return (
		<footer>
			<div className="content">
				<span>Mauricio Rodriguez</span> / Copyright © {ano}
			</div>
		</footer>
	);
};

export default Footer;
