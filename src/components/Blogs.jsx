import React from "react";
import { useInView } from "react-intersection-observer";
import Button from "../layouts/Button";
import BlogCard from "../layouts/BlogCard";
import img1 from "../assets/img/blog1.jpg";
import img2 from "../assets/img/blog2.jpg";
import img3 from "../assets/img/blog3.jpg";
import img4 from "../assets/img/blog4.jpg";
import img5 from "../assets/img/blog5.jpg";
import img6 from "../assets/img/blog6.jpg";

const Blogs = () => {
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: false, // Animation will repeat every time header enters viewport
    threshold: 0.2,
  });

  const { ref: cardsRef, inView: cardsInView } = useInView({
    triggerOnce: false, // Animation will repeat every time cards enter viewport
    threshold: 0.2,
  });

  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 ">
      {/* Header Section */}
      <div
        ref={headerRef}
        className={`flex flex-col items-center lg:flex-row justify-between transform transition duration-1000 ${
          headerInView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
      >
        <div>
          <h1 className="text-4xl font-semibold text-center lg:text-start">
            Latest Post
          </h1>
          <p className="mt-2 text-center lg:text-start">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
            quidem.
          </p>
        </div>
        <div className="mt-4 lg:mt-0">
          <Button title="Our Articles" />
        </div>
      </div>

      {/* Blog Cards Section */}
      <div className="my-8">
        <div
          ref={cardsRef}
          className={`flex flex-wrap justify-center gap-5 transform transition duration-1000 ${
            cardsInView ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          <BlogCard img={img1} headlines="Unraveling the Mysteries of Sleep" />
          <BlogCard img={img2} headlines="The Heart-Healthy Diet" />
          <BlogCard
            img={img3}
            headlines="Understanding Pediatric Vaccinations"
          />
          <BlogCard img={img4} headlines="Navigating Mental Health" />
          <BlogCard img={img5} headlines="The Importance of Regular Exercise" />
          <BlogCard img={img6} headlines="Skin Health 101" />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
