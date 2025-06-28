
"use client";

import React, { useEffect, useRef, useState } from "react";
import Conatainer from "./Container";

const skills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 90 },
  { name: "TypeScript", level: 90 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Graphic Designing", level: 80 },
  { name: "Next.js", level:90 },
  { name: "Digital Marketing", level: 90 },
  { name: "Python", level: 90 },
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div id="Skills">
      <Conatainer>
        <section ref={sectionRef} className="py-10 mb-16">
          <div>
            <h2 className="text-4xl sm:font-bold sm:text-5xl text-white mb-6">
              My Specialities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-white sm:text-xl font-semibold">
                      {skill.name}
                    </span>
                    <span className="text-white sm:text-xl font-semibold">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="relative w-full bg-gray-300 rounded-full h-2">
                    <div
                      className={`absolute top-0 left-0 h-full bg-gradient-to-r from-[#8c4ac5] via-[#5dc0e4] to-[#d13ab8] rounded-full transition-all duration-700 ease-in-out`}
                      style={{
                        width: isVisible ? `${skill.level}%` : "0%",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Conatainer>
    </div>
  );
};

export default Skills;

