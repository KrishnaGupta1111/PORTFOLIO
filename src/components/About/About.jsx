import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/krishna.png";
import ReactTypingEffect from "react-typing-effect";
import useIsMobile from "../../hooks/useIsMobile";

const About = () => {
  const isMobile = useIsMobile();
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Krishna Gupta
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                "Fullstack Developer",
                "Coder",
                "Frontend Developer",
                "Backend Developer",
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a final-year Computer Science student at BIT Mesra and a
            full-stack developer with experience in building scalable web
            applications using the MERN stack. I’m passionate about solving
            real-world problems, eager to learn and grow, and driven by a strong
            growth mindset to deliver impactful, user-centric solutions.
          </p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1z48DPt4u9n6ywBxK5I_LbI8l0gcWOmPW/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            View Resume ↗
          </a>
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end  ">
          {isMobile ? (
            <img
              src={profileImage}
              alt="Krishna Gupta"
              className="rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)] border-4 border-purple-700"
              style={{
                maxWidth: "250px",
                maxHeight: "250px",
                width: "100%",
                height: "auto",
              }}
            />
          ) : (
            <Tilt
              className="w-60 h-60 sm:w-45 sm:h-45 md:w-[26rem] md:h-[26rem] border-4 border-purple-700 rounded-full"
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <img
                src={profileImage}
                alt="Krishna Gupta"
                className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
              />
            </Tilt>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
