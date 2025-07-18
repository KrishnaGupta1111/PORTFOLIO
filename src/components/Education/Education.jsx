import { education } from "../../constants"; // Import the education data

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-4 md:px-12 lg:px-32 font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          EDUCATION
        </h2>
        <div className="w-24 md:w-32 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-lg md:text-xl font-medium max-w-2xl mx-auto">
          My education has been a journey of learning and development. Here are
          the details of my academic background
        </p>
      </div>

      {/* Education Timeline */}
      <div className="flex flex-col items-center w-full">
        <div className="relative w-full">
          {/* Vertical line */}
          <div className="absolute left-7 md:left-1/2 md:transform md:-translate-x-1/2 w-1 bg-white h-full z-0"></div>

          {education.slice(0, 3).map((edu, index, arr) => (
            <div
              key={edu.id}
              className={`relative flex md:flex-row ${
                index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
              } md:items-center w-full min-h-[120px] ${
                index !== arr.length - 1 ? "mb-24" : ""
              }`}
            >
              {/* Timeline Circle */}
              <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 bg-white border-4 border-[#8245ec] w-16 h-16 md:w-13 md:h-13 rounded-full flex justify-center items-center z-10 shadow-lg">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-12 h-12 md:w-16 md:h-16 object-contain rounded-full"
                />
              </div>

              {/* Content Section */}
              <div
                className={`relative w-full md:max-w-[calc(50%-35px)] p-4 md:p-6 rounded-2xl shadow-2xl border border-white bg-gray-900/90 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.2)] transition-transform duration-300 hover:scale-[1.03] ${
                  index % 2 === 0
                    ? "mt-16 md:mt-0 ml-11 md:ml-0 md:mr-[18px]"
                    : "mt-16 md:mt-0 ml-11 md:ml-[18px]"
                }`}
              >
                <div className="flex items-center space-x-4">
                  {/* School Logo/Image */}
                  <div className="w-16 h-16 bg-white rounded-lg overflow-hidden flex-shrink-0 shadow-md">
                    <img
                      src={edu.img}
                      alt={edu.school}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-white leading-tight">
                        {edu.degree}
                      </h3>
                      <h4 className="text-md text-gray-300 font-medium">
                        {edu.school}
                      </h4>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
                  </div>
                </div>
                <div className="mt-4 flex flex-col md:flex-row md:items-center md:space-x-4">
                  <span className="text-gray-400 font-bold text-base md:text-lg">
                    Grade: {edu.grade}
                  </span>
                  <span className="hidden md:inline-block text-gray-500">
                    |
                  </span>
                  <span className="text-gray-400 text-base md:text-lg mt-2 md:mt-0">
                    {edu.desc}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
