import React from 'react';
import Typewriter from "typewriter-effect";
import AnimatedTitle from './AnimatedTitle';

const Contact = () => {
  return (
    <div id="contact" className="bg-black pb-24 px-6">
      {/* Animated Title with Typewriter Effect */}
      <div className="text-center text-2xl pt-10">
        <AnimatedTitle
          title="Contact Now" // Pass plain text here
          containerClass="!text-white text-center"
        />
        <Typewriter
          options={{
            strings: ["Contact Now"],
            autoStart: true,
            loop: true,
            delay: 75,
          }}
        />
      </div>

      <div className="my-10 flex flex-col md:flex-row items-center justify-center gap-12 mb-28">
        {/* Video Section */}
        <video
          className="md:max-w-[420px] rounded-lg shadow-lg border-4 border-gray-800"
          src="videos/lastloop.mp4"
          autoPlay
          muted
          loop
        />

        {/* Contact Info Card */}
        <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-2xl shadow-xl flex flex-col gap-6 max-w-lg text-white border border-gray-700">
          <p className="text-3xl font-bold">Rusiru De Silva</p>
          <p className="text-lg">
            📍 <strong>Address:</strong> <br />
            No. 184, Kanampitiya Road, Galle, Sri Lanka
          </p>
          <p className="text-lg">
            📞 <strong>Mobile:</strong> <br />
            (+94)-7570-33-849
          </p>
          <p className="text-lg">
            ✉️ <strong>Email:</strong> <br />
            russapaypal@gmail.com
          </p>

          {/* Email Button */}
          <a
            href="mailto:russapaypal@gmail.com"
            className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-500 transition duration-300 text-center"
          >
            📧 Contact Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
