import React from "react";
import Button from "../layouts/Button";
import { RiMicroscopeLine } from "react-icons/ri";
import ServicesCard from "../layouts/ServicesCard";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const Services = () => {
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const { ref: cardsRef, inView: cardsInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const icon1 = <RiMicroscopeLine size={35} className=" text-backgroundColor" />;
  const icon2 = <MdHealthAndSafety size={35} className=" text-backgroundColor" />;
  const icon3 = <FaHeartbeat size={35} className=" text-backgroundColor" />;

  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 ">
      {/* Header Section */}
      <div
        ref={headerRef}
        className={`flex flex-col items-center lg:flex-row justify-between transform transition duration-1000 ${
          headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div>
          <h1 className="text-4xl font-semibold text-center lg:text-start">
            Our Services
          </h1>
          <p className="mt-2 text-center lg:text-start">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
            quidem.
          </p>
        </div>
        <div className="mt-4 lg:mt-0">
          <Button title="See Services" />
        </div>
      </div>

      {/* Services Cards Section */}
      <div
        ref={cardsRef}
        className={`flex flex-col lg:flex-row gap-5 pt-14 transform transition duration-1000 ${
          cardsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <ServicesCard icon={icon1} title="Lab Test" />
        <ServicesCard icon={icon2} title="Health Check" />
        <ServicesCard icon={icon3} title="Heart Health" />
      </div>
    </div>
  );
};

export default Services;
