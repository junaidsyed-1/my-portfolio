import React from "react";
import { projectsData } from "../utils/constnants";
import { animate, motion } from "framer-motion";

const Projects = () => {
  const animationVariants = {
    initial: { y: 200 },
    animate: { y: 0 },
  };

  return (
    <>
      <div className="flex justify-center min-h-screen py-16">
        <div className="text-center w-full max-w-7xl">
          <motion.div
            variants={animationVariants}
            initial="initial"
            whileInView="animate"
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold text-error">My Projects</h2>
            <h2 className="my-5 text-5xl font-bold">
              Where I Built and Innovated
            </h2>
          </motion.div>
          <motion.div
            variants={animationVariants}
            initial="initial"
            whileInView="animate"
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="pt-6"
          >
            <ul className="timeline timeline-snap-icon timeline-vertical max-md:timeline-compact">
              {projectsData.map((project, index) => (
                <li key={index}>
                  <div className="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div
                    className={`${
                      index % 2 === 0
                        ? "timeline-start md:block"
                        : "timeline-end md:block"
                    } mb-10 ${
                      index % 2 === 0 ? "md:text-end" : ""
                    } max-md:text-center`}
                  >
                    <div className="text-lg font-black">{project.name}</div>
                    <p>{project.description}</p>
                    <ul className="flex flex-wrap gap-4 mt-6">
                      {project.skills.map((skill, skillIndex) => (
                        <li
                          key={skillIndex}
                          className="badge badge-info badge-outline p-4"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="btn btn-error btn-sm flex my-5">
                        Live Link
                      </button>
                    </a>
                  </div>
                  <hr />
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Projects;
