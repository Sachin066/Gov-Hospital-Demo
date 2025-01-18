import React from "react";
import { useInView } from "react-intersection-observer";
import Button from "../layouts/Button";

const Home = () => {
  const { ref: contentRef, inView: contentInView } = useInView({
    triggerOnce: false, // Animation har baar trigger hoga
    threshold: 0.2,
  });

  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-[url('assets/img/home2.jpg')] bg-no-repeat bg-cover opacity-90">
      <div
        ref={contentRef}
        className={`w-full lg:w-4/5 space-y-5 mt-10 transform transition duration-1000 ${
          contentInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-5xl font-bold leading-tight">
          Empowering Health Choices for a Vibrant Life Your Trusted..
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam magnam
          omnis natus accusantium quos. Reprehenderit incidunt expedita
          molestiae impedit at sequi dolorem iste sit culpa, optio voluptates
          fugiat vero consequatur?
        </p>

        <Button title="See Services" />
      </div>
    </div>
  );
};

export default Home;
