const HeroSection = () => {
  return (
    <section className="bg-[#0f172a] text-[#f1f5f9] min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hi, I'm <span className="text-[#14b8a6]">Sonia Ashraf</span>
        </h1>
        <p className="text-lg md:text-xl text-[#cbd5e1] mb-8">
          MERN Stack Developer | Teachable Machine Projects | Creative Web Solutions
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="#projects"
            className="bg-[#14b8a6] text-[#0f172a] px-6 py-3 rounded-md font-medium transition hover:bg-[#0d9488]"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-[#14b8a6] text-[#14b8a6] px-6 py-3 rounded-md font-medium transition hover:bg-[#14b8a6] hover:text-[#0f172a]"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
