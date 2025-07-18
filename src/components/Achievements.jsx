const Achievements = () => {
  return (
    <section
      id="achievements"
      className="py-24 px-4 md:px-12 lg:px-32 font-sans bg-skills-gradient clip-path-custom-3"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          ACHIEVEMENTS
        </h2>
        <div className="w-24 md:w-32 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Achievement Image with hover effect */}
        <div className="w-80 h-80 bg-gray-800 rounded-lg overflow-hidden mb-6 md:mb-0 border border-white shadow-2xl transition-transform duration-300 hover:scale-105 hover:shadow-purple-500/50 cursor-pointer">
          <img
            src="/assets/tech_logo/formidium.jpeg"
            alt="Formidium Achievement"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Achievement Text */}
        <div className="max-w-xl text-center md:text-left">
          <p className="text-lg text-gray-300">
            Won 1st place at the Formidium National Hackathon out of 50+
            participating teams for developing a GenAI-driven accounting
            platform powered by Large Language Models (LLMs). The solution was
            recognized for its innovation, scalability, and real-world impact,
            earning a ₹1,00,000 cash prize from industry experts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
