import React from "react";
import { useInView } from "react-intersection-observer"; // For scroll-based animations
import img from "../assets/img/about.jpg";

const About = () => {
  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: false, // Animation will repeat every time it enters the viewport
    threshold: 0.2, // Starts animation when 20% of the component is visible
  });

  const { ref: imgRef, inView: imgInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5  gap-5">
      {/* Text Section */}
      <div
        ref={textRef}
        className={`w-full lg:w-3/4 space-y-4 transform transition duration-1000 ${
          textInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-4xl font-semibold text-center lg:text-start">
          About Us
        </h1>
        <p className="text-justify lg:text-start">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
          labore rerum tempore tenetur commodi natus quos itaque voluptatum
          repudiandae nostrum accusantium vero voluptate aspernatur totam,
          laboriosam aut, et quae consequatur?
        </p>
        <p className="text-justify lg:text-start">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora quia
          suscipit illum, numquam incidunt nostrum dolor officia doloremque
          cupiditate, placeat explicabo sed iure atque neque quidem ipsam!
          Dolor, minus reiciendis.
        </p>
        <p className="text-justify lg:text-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, illum.
          Accusantium ab expedita veniam nobis aut, in rerum repellendus!
          Exercitationem libero recusandae corrupti accusantium reiciendis in
          placeat illo maxime ea.
        </p>
      </div>

      {/* Image Section */}
      <div
        ref={imgRef}
        className={`w-full lg:w-3/4 transform transition duration-1000 ${
          imgInView ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        <img className="rounded-lg" src={img} alt="About Us" />
      </div>
    </div>
  );
};

export default About;
