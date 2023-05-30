import "./portfolio-cover.scss";
import Button from "../../../button/Button";
import { motion } from "framer-motion";

interface IPortfolioCoverProps {
  language: string;
  projectName: string;
  projectLink?: string;
  repositoryLink?: string;
  bgImage: string;
  projectType: string;
}

const PortfolioCover = ({
  language,
  projectName,
  projectLink,
  repositoryLink,
  bgImage,
  projectType,
}: IPortfolioCoverProps) => {
  return (
    <motion.div
      className="portfolio-cover"
      style={{
        background: `url("${bgImage}") center`,
        backgroundSize: "cover",
        backgroundBlendMode: "multiply",
        backgroundColor: "#eebd64",
      }}
      whileHover={{
        backgroundBlendMode: "normal",
        boxShadow: "0 0 30px rgba(255, 255, 255, 0.3)",
        scale: 1.05,
      }}
    >
      {projectType === "real" && <h4 className="tag real">Real Case</h4>}
      {projectType === "personal" && <h4 className="tag personal">Personal Project</h4>}
      <div className="info">
        <h3>{projectName}</h3>
        <div className="buttons">
          {repositoryLink && (
            <motion.div whileHover={{ scale: 1.1 }} className="button">
              <Button textColor="#111" link={repositoryLink} border="#eebd64" isGithub>
                {language === "en" ? "VIEW REPOSITORY" : "VER REPOSITÓRIO"}
              </Button>
            </motion.div>
          )}
          {projectLink && (
            <motion.div whileHover={{ scale: 1.1 }} className="button">
              <Button textColor="#111" link={projectLink} border="#eebd64">
                {language === "en" ? "VIEW PROJECT" : "VER PROJETO"}
              </Button>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioCover;
