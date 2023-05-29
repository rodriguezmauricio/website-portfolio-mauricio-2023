import "./resume-section.scss";
import { motion } from "framer-motion";

interface IResumeSection {
  language: string;
}

const ResumeSection = ({ language }: IResumeSection) => {
  // const leftRef = useRef(null);
  // // const rightRef = useRef(null);

  // const leftToRight = useScroll({
  // 	target: leftRef,
  // 	offset: ["end end", "end start"],
  // }).scrollYProgress;

  // const rightToLeft = useScroll({
  // 	target: rightRef,
  // 	offset: ["start end", "end start"],
  // }).scrollYProgress;

  // const opacity = useTransform(leftToRight, [0, 0.1], [0, 1]);
  // const xLeftToRight = useTransform(leftToRight, [0, 0.1], [-100, 0]);
  // const xRightToLeft = useTransform(rightToLeft, [0, 0.3], [100, 0]);

  const textVariant = {
    initial: {
      opacity: 0,
      x: -100,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <section className="resume" id="resume-section">
      <div className="content">
        <motion.div
          //  ref={leftRef}
          // style={{ opacity, x: xLeftToRight }}
          initial="initial"
          whileInView="animate"
          transition={{ duration: 5, staggerChildren: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="left"
        >
          {language === "en"
            ? '"You can create anything by writing"'.split(" ").map((item) => {
                if (item !== "anything") {
                  return (
                    <motion.h2 key={item} className="phrase" variants={textVariant}>
                      {item}{" "}
                    </motion.h2>
                  );
                }
                return (
                  <motion.h2 key={item} className="phrase" variants={textVariant}>
                    <span>{item} </span>
                  </motion.h2>
                );
              })
            : "Você pode criar qualquer coisa escrevendo.".split(" ").map((item) => {
                if (item !== "qualquer") {
                  return (
                    <motion.h2 key={item} className="phrase" variants={textVariant}>
                      {item}{" "}
                    </motion.h2>
                  );
                }
                return (
                  <motion.h2 key={item} className="phrase" variants={textVariant}>
                    <span>{item} </span>
                  </motion.h2>
                );
              })}

          <motion.h3 variants={textVariant}>- C. S. Lewis</motion.h3>
        </motion.div>

        <motion.div className="right"></motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
