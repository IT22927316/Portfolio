import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase md:text-[10px]">
          Welcome To The Future
        </p>

        <AnimatedTitle
          title="Explore the <b>possibilities</b> of the digital <br /> world with web development"
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext">
          <p>
            The World of Web Development begins—your journey, now an endless
            digital frontier
          </p>
          <p className="text-gray-500">
            Web development unites developers and creators from various
            technologies and platforms to shape the digital landscape, creating
            innovative experiences for users worldwide.
          </p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <video
            src="videos/aboutloop.mp4"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </div>
    </div>
  );
};

export default About;
