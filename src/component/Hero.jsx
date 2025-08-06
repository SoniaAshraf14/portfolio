import React from "react";
import Typewriter from "typewriter-effect";
import profile from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section className="bg-[#f1f5f9] py-24 px-6">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        
        {/* Left Text */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-5xl font-extrabold text-[#0f172a] leading-tight mb-4">
            Hi, I'm <span className="text-[#3b82f6]">Sonia Ashraf</span>
          </h1>

          <div className="text-xl text-[#334155] mb-6 h-[50px]">
            <Typewriter
              options={{
                strings: [
                  "MERN Stack Developer",
                  "Frontend UI Designer",
                  "Backend API Builder",
                  "MongoDB Pro",
                  "Passionate Coder 💻"
                ],
                autoStart: true,
                loop: true,
                delay: 70,
                deleteSpeed: 40,
              }}
            />
          </div>

          <p className="text-[#475569] mb-6 leading-relaxed">
            I build sleek, scalable, and modern web applications using MERN technologies. I’m driven by curiosity, coffee, and clean code.
          </p>

          <a
            href="#projects"
            className="inline-block bg-[#3b82f6] text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-[#2563eb] transition duration-300"
          >
            Explore Projects
          </a>
        </div>

        {/* Right Image */}
        <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white shadow-xl hover:scale-105 transition duration-300">
          <img
            src={profile}
            alt="Sonia"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
