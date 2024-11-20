import React, { useState } from "react";
import { Link } from "react-scroll";
import { heroData } from "../utils/constnants";
import myImage from "../assets/my-image.jpg";

const Hero = () => {
  const { name, tagline } = heroData;

  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="hero bg-base-100 min-h-screen flex flex-col justify-center items-center">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="w-72 h-72 lg:w-96 lg:h-96 overflow-hidden rounded-full">
          {isLoading && (
            <div className="skeleton w-full h-full rounded-full"></div>
          )}
          <img
            src={myImage}
            alt="Junaid Syed"
            className={`w-full h-full object-cover ${
              isLoading ? "hidden" : "block"
            }`}
            onLoad={() => setIsLoading(false)}
          />
        </div>
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-error mb-4">
            Hi, I’m <span className="text-accent">{name}</span> 👋
          </h1>
          <div className="py-4 text-lg text-base-content">
            {isLoading ? (
              <div className="skeleton w-3/4 h-6 mx-auto lg:mx-0 my-2"></div>
            ) : (
              tagline
            )}
          </div>
          <div className="mt-4 flex justify-center lg:justify-start gap-4">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className={`btn ${isLoading ? "btn-disabled" : "btn-error"}`}
              disabled={isLoading}
            >
              View Projects
            </Link>
            <a
              href="/JunaidSyedCV.pdf"
              download="JunaidSyedCV"
              smooth={true}
              duration={500}
              className={`btn ${isLoading ? "btn-disabled" : "btn-secondary"}`}
              disabled={isLoading}
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
