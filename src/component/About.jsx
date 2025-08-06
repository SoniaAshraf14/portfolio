import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-white py-20 px-6 border-t border-gray-100">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">About Me</h2>

        <p className="text-lg text-gray-700 leading-relaxed text-center">
          Hello! I'm <span className="text-blue-600 font-semibold">Sonia</span>, a passionate and detail-oriented web developer currently focused on the 
          <span className="font-medium"> MERN Stack</span> — MongoDB, Express.js, React, and Node.js. I love building clean, responsive, and user-friendly web interfaces with modern tools.
          <br /><br />
          As a self-driven learner, I enjoy taking on new challenges, solving real-world problems, and continuously improving my skills through hands-on projects. My goal is to become a full-stack developer who creates meaningful and scalable digital solutions.
        </p>

        {/* Skills Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800 text-center mb-6">Skills</h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center text-sm text-gray-700">
            {/* Frontend */}
            <span className="bg-blue-50 py-2 px-3 rounded-lg shadow-sm">HTML5</span>
            <span className="bg-blue-50 py-2 px-3 rounded-lg shadow-sm">CSS3</span>
            <span className="bg-blue-50 py-2 px-3 rounded-lg shadow-sm">JavaScript</span>
            <span className="bg-blue-50 py-2 px-3 rounded-lg shadow-sm">React</span>
            <span className="bg-blue-50 py-2 px-3 rounded-lg shadow-sm">Tailwind CSS</span>

            {/* Backend */}
            <span className="bg-green-50 py-2 px-3 rounded-lg shadow-sm">Node.js</span>
            <span className="bg-green-50 py-2 px-3 rounded-lg shadow-sm">Express.js</span>
            <span className="bg-green-50 py-2 px-3 rounded-lg shadow-sm">MongoDB</span>

            {/* Tools */}
            <span className="bg-yellow-50 py-2 px-3 rounded-lg shadow-sm">Git & GitHub</span>
            <span className="bg-yellow-50 py-2 px-3 rounded-lg shadow-sm">JWT Auth</span>
            <span className="bg-yellow-50 py-2 px-3 rounded-lg shadow-sm">REST APIs</span>
            <span className="bg-yellow-50 py-2 px-3 rounded-lg shadow-sm">Postman</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
