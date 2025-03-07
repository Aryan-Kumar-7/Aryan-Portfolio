import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Doctor's Appointment",
    year: "Mar2024",
    align: "right",
    image: "../../public/images/doctor-appointment.png",
    link: "https://doctor-appointment-4nhw.onrender.com",
  },
  {
    name: "Job Portal",
    year: "Sept2023",
    align: "left",
    image: "../../public/images/Job-portal.png",
    link: "https://job-portal-daop.onrender.com",
  },
  {
    name: "Food Delivery",
    year: "Jan2023",
    align: "right",
    image: "../../public/images/food-delivery.png",
    link: "https://food-delivery-3xne.onrender.com",
  },
  {
    name: "Chat Application",
    year: "May2022",
    align: "left",
    image: "../../public/images/chat-app.png",
    link: "https://chat-application-1l6u.onrender.com",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
