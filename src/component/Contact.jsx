import React from 'react';
import { FiMail, FiPhone, FiLinkedin, FiMapPin } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="contact" className="bg-white py-20 px-6 border-t border-gray-200">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-10">Get in Touch</h2>

        <div className="space-y-6 text-slate-700 text-lg">
          <div className="flex items-center justify-center gap-3">
            <FiMail className="text-blue-600 text-2xl" />
            <a href="mailto:soniaashraf2win@gmail.com" className="hover:underline">
              soniaashraf2win@gmail.com
            </a>
          </div>

          <div className="flex items-center justify-center gap-3">
            <FiPhone className="text-blue-600 text-2xl" />
            <a href="tel:+923058222130" className="hover:underline">
              +92 305 8222130
            </a>
          </div>

          <div className="flex items-center justify-center gap-3">
            <FiLinkedin className="text-blue-600 text-2xl" />
            <a href="https://www.linkedin.com/in/sonia-a-562022341" target="_blank" rel="noopener noreferrer" className="hover:underline">
              linkedin.com/in/sonia-a-562022341
            </a>
          </div>

          <div className="flex items-center justify-center gap-3">
            <FiMapPin className="text-blue-600 text-2xl" />
            <span>Lahore, Pakistan</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
