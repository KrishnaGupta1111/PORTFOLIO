// src/components/Skills/Skills.jsx
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";
import useIsMobile from "../../hooks/useIsMobile";

const Skills = () => {
  const isMobile = useIsMobile();
  return (
    <section
      id="skills"
      className="py-24 px-4 md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          SKILLS
        </h2>
        <div className="w-24 md:w-32 h-1 bg-[#8245ec] mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-lg md:text-xl font-medium max-w-2xl mx-auto">
          A collection of my technical skills and expertise honed through
          various projects and experiences
        </p>
      </div>

      {/* Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-8">
        {SkillsInfo.map((category) => (
          <div
            key={category.title}
            className="bg-gray-900/90 backdrop-blur-md w-full max-w-[340px] mx-auto px-4 md:px-6 py-4 md:py-6 rounded-2xl border border-white shadow-2xl shadow-[0_0_20px_1px_rgba(130,69,236,0.2)] flex flex-col items-center justify-start transition-transform duration-300 hover:scale-105 hover:shadow-purple-500/50 cursor-pointer"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6 text-center">
              {category.title}
            </h3>

            {/* Skill Items - 3 per row on all screens */}
            {isMobile ? (
              <div className="grid grid-cols-3 gap-2 w-full">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center justify-center bg-gray-800/80 border-2 border-[#8245ec] rounded-xl py-2 px-1 text-center shadow-md hover:scale-105 transition-transform duration-200"
                  >
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-7 h-7 md:w-8 md:h-8 mb-1"
                    />
                    <span className="text-xs md:text-sm text-gray-200 font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <Tilt
                key={category.title}
                tiltMaxAngleX={20}
                tiltMaxAngleY={20}
                perspective={1000}
                scale={1.05}
                transitionSpeed={1000}
                gyroscope={true}
              >
                <div className="grid grid-cols-3 gap-2 w-full">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center justify-center bg-gray-800/80 border-2 border-[#8245ec] rounded-xl py-2 px-1 text-center shadow-md hover:scale-105 transition-transform duration-200"
                    >
                      <img
                        src={skill.logo}
                        alt={`${skill.name} logo`}
                        className="w-7 h-7 md:w-8 md:h-8 mb-1"
                      />
                      <span className="text-xs md:text-sm text-gray-200 font-medium">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </Tilt>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
