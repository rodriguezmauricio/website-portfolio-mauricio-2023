import "./portfolio-cover.scss";
import Button from "../button/Button";

interface IPortfolioCoverProps {
	projectName: string;
	projectLink?: string;
	repositoryLink?: string;
	bgImage: string;
	projectType: string;
}

const PortfolioCover = ({
	projectName,
	projectLink,
	repositoryLink,
	bgImage,
}: IPortfolioCoverProps) => {
	return (
		<div
			className="portfolio-cover"
			style={{
				background: `url("${bgImage}")`,
				backgroundSize: "cover",
				backgroundBlendMode: "multiply",
				backgroundColor: "#c3a060",
			}}
		>
			<div className="image"></div>

			<div className="info">
				<h3>{projectName}</h3>
				<div className="buttons">
					{projectLink && <Button textColor="#111">VIEW PROJECT</Button>}
					{repositoryLink && <Button textColor="#111">VIEW REPOSITORY</Button>}
				</div>
			</div>
		</div>
	);
};

export default PortfolioCover;
