import React from "react";

const Heading = ({ punchLine, title, description, className = "" }) => {
  return (
    <div>
      <div className={`container flex flex-col gap-2 ${className} `}>
        <p className="text-center text-primary text-md">{punchLine}</p>
        <h2
          data-aos="fade-up"
          className="text-center font-bold text-3xl dark:text-white "
        >
          {title}
        </h2>
        <p data-aos="fade-up" className="text-center text-gray-400 text-sm">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Heading;
