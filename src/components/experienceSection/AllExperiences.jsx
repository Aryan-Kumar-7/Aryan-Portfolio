import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    "job": "Software Engineer Intern",
    "company": "ARX InfoTech",
    "date": "Oct 2024 - Jan 2025",
    "responsibilities": [
      "Developed and optimized the services and blog pages using ReactJS.",
      "Built dynamic and responsive UI components as per company requirements.",
      "Collaborated with the team to enhance website performance and usability."
    ]
  },  
  {
    "job": "Full Stack Developer Intern",
    "company": "Intern Army",
    "date": "April 2025 - May 2024",
    "responsibilities": [
      "Developed a real-time chat application using ReactJS and Socket.io.",
      "Designed and integrated RESTful APIs for seamless backend communication.",
      "Implemented authentication, authorization, and secure payment processing."
    ]
  }  
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-around">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 1 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
