import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-4 md:px-12 lg:px-32 font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          EXPERIENCE
        </h2>
        <div className="w-24 md:w-32 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-lg md:text-xl font-medium max-w-2xl mx-auto">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative w-full flex flex-col items-center">
        <div className="relative w-full">
          {/* Timeline Vertical Line - moved inside the wrapper for correct height */}
          <div className="absolute top-0 bottom-0 left-7 md:left-1/2 md:transform md:-translate-x-1/2 w-1 bg-white z-0" />
          {experiences.slice(0, 2).map((experience, index, arr) => (
            <div
              key={experience.id}
              className={`relative flex md:flex-row ${
                index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
              } md:items-center w-full min-h-[120px]${
                index !== arr.length - 1 ? " mb-24" : ""
              }`}
            >
              {/* Timeline Circle */}
              <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 bg-white border-4 border-[#8245ec] w-16 h-16 md:w-20 md:h-20 rounded-full flex justify-center items-center z-10 shadow-lg">
                <img
                  src={experience.img}
                  alt={experience.company}
                  className="w-12 h-12 md:w-16 md:h-16 object-contain rounded-full"
                />
              </div>

              {/* Experience Card */}
              <div
                className={`relative w-full md:max-w-[calc(50%-30px)] p-4 md:p-6 rounded-2xl shadow-2xl border border-white bg-gray-900/90 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.2)] transition-transform duration-300 hover:scale-[1.03] ${
                  index % 2 === 0
                    ? "mt-16 md:mt-0 ml-11 md:ml-0 md:mr-[18px]"
                    : "mt-16 md:mt-0 ml-11 md:ml-[18px]"
                }`}
              >
                <div className="flex items-center space-x-4">
                  {/* Company Logo */}
                  <div className="w-16 h-16 bg-white rounded-lg overflow-hidden flex-shrink-0 shadow-md">
                    <img
                      src={experience.img}
                      alt={experience.company}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg md:text-2xl font-bold text-white leading-tight">
                        {experience.role}
                      </h3>
                      <h4 className="text-sm md:text-base text-gray-300 font-medium">
                        {experience.company}
                      </h4>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                      {experience.date}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-gray-400 text-base leading-relaxed">
                  {experience.desc}
                </p>
                <div className="mt-4">
                  <h5 className="font-semibold text-white mb-2">Skills:</h5>
                  <ul className="flex flex-wrap gap-2">
                    {experience.skills.map((skill, idx) => (
                      <li
                        key={idx}
                        className="bg-[#8245ec] text-white px-4 py-1 text-xs md:text-sm rounded-lg border border-gray-400 shadow-sm"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
