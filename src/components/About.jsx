import React from "react";

const About = () => {
  return (
    <>
      <div className="flex w-full flex-col">
        <div className="card rounded-box grid  place-items-center py-10">
          <div className="stats bg-base-300 shadow w-full max-w-7xl ">
            <div className="stat  place-items-center">
              <div className="stat-value">160 000</div>
              <div className="stat-desc ">Lines of Code</div>
            </div>

            <div className="stat place-items-center">
              <div className="stat-value text-secondary">25</div>
              <div className="stat-desc text-secondary">Projects Completed</div>
            </div>

            <div className="stat place-items-center">
              <div className="stat-value">310,456,321</div>
              <div className="stat-desc">Pixel Rendered</div>
            </div>
            <div className="stat place-items-center">
              <div className="stat-value">2052</div>
              <div className="stat-desc">Cups of Coffee drunk</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
