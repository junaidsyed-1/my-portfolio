import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaJs, FaNodeJs, FaDatabase, FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";

const Skills = () => {
  const [skills, setSkills] = useState([
    {
      name: "GitHub",
      icon: <FaGithub />,
      value: 0,
      targetValue: 75,
      color: "#000000",
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
      value: 0,
      targetValue: 85,
      color: "#F7DF1E",
    },
    {
      name: "React",
      icon: <FaReact />,
      value: 0,
      targetValue: 90,
      color: "#61DAFB",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />,
      value: 0,
      targetValue: 80,
      color: "#68A063",
    },
    {
      name: "MongoDB",
      icon: <FaDatabase />,
      value: 0,
      targetValue: 70,
      color: "#4DB33D",
    },
    {
      name: "Express",
      icon: <SiExpress />,
      value: 0,
      targetValue: 78,
      color: "#000000",
    },
  ]);

  const [isInView, setIsInView] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) observer.observe(skillsRef.current);

    return () => {
      if (skillsRef.current) observer.unobserve(skillsRef.current);
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      const skillTimers = skills.map((skill, index) => {
        const skillTimer = setInterval(() => {
          setSkills((prevSkills) => {
            const updatedSkills = [...prevSkills];
            if (updatedSkills[index].value < updatedSkills[index].targetValue) {
              updatedSkills[index].value += 1;
            } else {
              clearInterval(skillTimer);
            }
            return updatedSkills;
          });
        }, 40);

        return skillTimer;
      });

      return () => {
        skillTimers.forEach((timer) => clearInterval(timer));
      };
    }
  }, [isInView, skills]);

  return (
    <div
      className="min-h-screen flex items-center justify-center py-8"
      ref={skillsRef}
    >
      <div className="container flex flex-col items-center text-center">
        <motion.div
          initial={{ y: 200 }}
          animate={{ y: isInView ? 0 : 100 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-semibold text-error">My Skills</h2>
          <h1 className="my-5 text-5xl font-bold">
            I Develop Skills Regularly
          </h1>
        </motion.div>

        {/* Flexbox Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 mt-16">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center space-y-4"
              initial={{ y: 100 }}
              animate={{ y: isInView ? 0 : 100 }}
              transition={{
                delay: 0.3 + index * 0.1,
                duration: 1,
                ease: "easeOut",
              }}
            >
              <motion.span
                className="text-[5rem] sm:text-[6rem] lg:text-[7rem] text-center"
                style={{ color: skill.color }}
                animate={{ scale: 0.8 + skill.value / 100 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                {skill.icon}
              </motion.span>

              <span className="text-sm mx-2 pt-7">{skill.value}%</span>

              <progress
                className="progress w-32 sm:w-48 lg:w-64"
                value={skill.value}
                max="100"
                style={{ transition: "width 0.5s ease" }}
              />

              <span className="text-lg mt-2">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
