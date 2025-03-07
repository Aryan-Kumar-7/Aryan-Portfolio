import SingleSkill from "./SingleSkill";
import { FaAws, FaDocker, FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress, SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { DiMongodb, DiMysql, DiNodejs } from "react-icons/di";
import { BsBootstrap } from "react-icons/bs";
import { FaC } from "react-icons/fa6";

const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "ReactJS",
    icon: FaReact,
  },
  {
    skill: "NodeJS",
    icon: DiNodejs,
  },
  {
    skill: "ExpressJS",
    icon: SiExpress,
  },
  {
    skill: "MongoDB",
    icon: DiMongodb,
  },
  {
    skill: "AWS",
    icon: FaAws,
  },
  {
    skill: "Docker",
    icon: FaDocker,
  },
  {
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
  },
  {
    skill: "Bootstrap",
    icon: BsBootstrap,
  },
  {
    skill: "MySql",
    icon: DiMysql,
  }
];

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
