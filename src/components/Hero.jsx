import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { heroData } from "../utils/constnants";
import myImage from "../assets/my-image.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  const { name, tagline } = heroData;
  const [isLoading, setIsLoading] = useState(true);
  const [experienceCount, setExperienceCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);

  useEffect(() => {
    let expCounter = setInterval(() => {
      setExperienceCount((prev) => {
        if (prev >= 2) {
          clearInterval(expCounter);
          return 2.8;
        }
        return prev + 0.1;
      });
    }, 50);

    let projCounter = setInterval(() => {
      setProjectsCount((prev) => {
        if (prev >= 20) {
          clearInterval(projCounter);
          return 20;
        }
        return prev + 1;
      });
    }, 80);

    return () => {
      clearInterval(expCounter);
      clearInterval(projCounter);
    };
  }, []);

  return (
    <div className="bg-base-100 min-h-screen flex justify-center items-center">
      <div className="container flex flex-col-reverse lg:flex-row items-center px-6 py-8">
        {/* Left Section: Text */}
        <div className="lg:w-1/2 text-center lg:text-left mt-5 md:">
          <motion.div
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <h3 className="font-bold text-error text-3xl ">Hi, I’m </h3>
            <h1 className="text-4xl lg:text-6xl font-bold text-error mb-4">
              <span className="text-accent">{name}</span> 👋
            </h1>
            <div className="py-4 text-lg text-base-content">
              {isLoading ? (
                <div className="skeleton w-3/4 h-6 mx-auto lg:mx-0 my-2"></div>
              ) : (
                tagline
              )}
            </div>
            <div className="mt-6 flex justify-center lg:justify-start gap-4">
              <Link to="projects" smooth={true} duration={500}>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className={`btn ${isLoading ? "btn-disabled" : "btn-error"}`}
                  disabled={isLoading}
                  whileTap={{ scale: 0.95 }}
                >
                  View Projects
                </motion.button>
              </Link>

              <motion.a
                href="/JunaidSyedCV.pdf"
                download="JunaidSyedCV"
                className={`btn ${
                  isLoading ? "btn-disabled" : "btn-secondary"
                }`}
                disabled={isLoading}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Download Junaid Syed CV"
              >
                Download CV
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Right Section: Image */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center relative">
          <motion.div
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative w-full max-w-xs lg:max-w-sm xl:max-w-md 2xl:max-w-lg"
          >
            {isLoading && (
              <motion.div
                className="skeleton w-full h-full rounded-lg"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
            )}
            <img
              src={myImage}
              alt="Junaid Syed"
              className={`w-full h-full object-cover rounded-lg shadow-2xl ${
                isLoading ? "hidden" : "block"
              }`}
              onLoad={() => setIsLoading(false)}
              draggable="false"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="hidden lg:flex items-center absolute left-[-20%] top-1/3 transform -translate-y-1/2 bg-secondary text-white font-bold px-6 py-3 rounded-lg shadow-lg"
            >
              <span className="text-3xl text-error font-extrabold mr-2">
                {experienceCount.toFixed(1)}
              </span>
              Years of Experience
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="hidden lg:flex items-center absolute right-[-25%] top-3/4 transform -translate-y-1/2 bg-white  text-slate-600 font-bold px-6 py-3 rounded-lg shadow-lg"
            >
              <span className="text-3xl text-secondary font-extrabold mr-3">
                {projectsCount}+
              </span>
              Projects Completed
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
