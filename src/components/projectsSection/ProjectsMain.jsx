import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

import doctorAppointment from "../../assets/doctor-appointment.png";
import jobPortal from "../../assets/Job-portal.png";
import foodDelivery from "../../assets/food-delivery.png";
import chatApp from "../../assets/chat-app.png";

const projects = [
  {
    name: "Doctor's Appointment",
    year: "Mar2024",
    align: "right",
    image: doctorAppointment, // ✅ Imported image
    link: "https://doctor-appointment-4nhw.onrender.com",
  },
  {
    name: "Job Portal",
    year: "Sept2023",
    align: "left",
    image: jobPortal, // ✅ Imported image
    link: "https://job-portal-daop.onrender.com",
  },
  {
    name: "Food Delivery",
    year: "Jan2023",
    align: "right",
    image: foodDelivery, // ✅ Imported image
    link: "https://food-delivery-3xne.onrender.com",
  },
  {
    name: "Chat Application",
    year: "May2022",
    align: "left",
    image: chatApp, // ✅ Imported image
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
