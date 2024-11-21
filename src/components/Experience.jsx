import React, { useState } from "react";
import { experienceData, insternshipData } from "../utils/constnants";
import { animate, motion } from "framer-motion";
import { Link } from "react-scroll";

const Experience = () => {
  const [activeTab, setActiveTab] = useState(1);

  const textAnnimationVariants = {
    initial: { x: -200 },
    animate: { x: 0 },
  };
  const cardAnnimationVariants = {
    initial: { x: 200 },
    animate: { x: 0 },
  };

  const cardClass =
    "card bg-gradient-to-br from-[#1A103D] to-[#120C2A] text-white w-full md:w-[700px] lg:w-[800px] shadow-2xl rounded-lg border-4 border-[#493094] overflow-hidden";

  return (
    <div className="min-h-screen flex justify-center py-16">
      <div className="flex flex-col text-center w-full max-w-7xl">
        <motion.div
          variants={textAnnimationVariants}
          initial="initial"
          whileInView="animate"
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{
            once: true,
          }}
        >
          <h2 className="text-2xl font-semibold text-error">My Experience</h2>
          <h2 className="my-5 text-5xl font-bold">
            Where I’ve Grown and Built Solutions
          </h2>
        </motion.div>

        <motion.div
          variants={cardAnnimationVariants}
          initial="initial"
          whileInView="animate"
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center pt-8">
            <div role="tablist" className="tabs tabs-bordered">
              <button
                role="tab"
                className={`tab ${activeTab === 1 ? "tab-active" : ""}`}
                onClick={() => setActiveTab(1)}
              >
                Manthan Experts
              </button>

              <button
                role="tab"
                className={`tab ${activeTab === 2 ? "tab-active" : ""}`}
                onClick={() => setActiveTab(2)}
              >
                Khan & Garg
              </button>
            </div>
          </div>

          <div
            className="tab-content p-10 w-full flex justify-center items-center"
            style={{ minHeight: "300px" }}
          >
            {activeTab === 1 && (
              <div>
                <h2 className="mb-4">From {experienceData.duration}</h2>
                <div className={cardClass}>
                  <div className="card-body p-10 md:p-12 lg:p-14 space-y-6">
                    <h2 className="card-title text-xl font-bold text-white">
                      {experienceData.title}
                    </h2>
                    <span className="text-sm text-left text-gray-300 ">
                      <ul className="list-inside space-y-4 text-left text-sm text-gray-300">
                        {experienceData.description.map((des, index) => (
                          <li key={index}>{des}</li>
                        ))}
                      </ul>
                    </span>

                    <div className="flex flex-col sm:flex-row sm:justify-between items-center space-y-4 sm:space-y-0">
                      <motion.a
                        whileHover={{ scale: 1.06 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn btn-secondary w-full sm:w-auto"
                        href="/JunaidSyedCV.pdf"
                        download="JunaidSyedCV"
                      >
                        Download CV
                      </motion.a>

                      <Link to="projects">
                        <motion.button
                          whileHover={{ scale: 1.06 }}
                          whileTap={{ scale: 0.95 }}
                          className="btn btn-outline w-full sm:w-auto"
                        >
                          View more of my work
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 2 && (
              <div>
                <h2 className="mb-4">From {insternshipData.duration}</h2>
                <div className={cardClass}>
                  <div className="card-body p-10 md:p-12 lg:p-14 space-y-6">
                    <h2 className="card-title text-xl font-bold text-white">
                      {insternshipData.title}
                    </h2>
                    <span className="text-sm text-left text-gray-300 ">
                      <ul className="list-inside space-y-4 text-left text-sm text-gray-300">
                        {insternshipData.description.map((des, index) => (
                          <li key={index}>{des}</li>
                        ))}
                      </ul>
                    </span>

                    <div className="flex flex-col sm:flex-row sm:justify-between items-center space-y-4 sm:space-y-0">
                      <motion.a
                        whileHover={{ scale: 1.06 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn btn-secondary w-full sm:w-auto"
                        href="/JunaidSyedCV.pdf"
                        download="JunaidSyedCV"
                      >
                        Download CV
                      </motion.a>
                      <Link to="projects">
                        <motion.button
                          whileHover={{ scale: 1.06 }}
                          whileTap={{ scale: 0.95 }}
                          className="btn btn-outline w-full sm:w-auto"
                        >
                          View more of my work
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
