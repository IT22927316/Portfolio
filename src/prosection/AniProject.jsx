import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import "./AniProject.css";
import { TiLocationArrow } from 'react-icons/ti';
import Button from "../components/Button";

const AniProject = () => {
  const [activeIndex, setActiveIndex] = useState(3);

  useEffect(() => {
    gsap.fromTo(
      ".details h2",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
    gsap.fromTo(
      ".details p",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power2.out" }
    );
  }, [activeIndex]);

  const sliderData = [
    {
      src: "projects/project1.png",
      alt: "1",
      name: "UrbanHarvest",
      role: "MERN Stack Developer",
      description: "Agriculture management in urban areas",
      gitlink: "https://github.com/IT22927316/ITP-project-urban",
    },
    {
      src: "projects/project2.png",
      alt: "2",
      name: "Takas.lk Reimagined",
      role: "UI/UX Designer",
      description: "Reimagined and designed Takas.lk using Figma",
      gitlink: "https://www.figma.com/community/file/1455636005498695016",
    },
    {
      src: "projects/project3.png",
      alt: "3",
      name: "PregnancyPath",
      role: "React Native Developer",
      description: "CRUD functions with React Native, MongoDB for pregnancy tracking",
      frontendLink: "https://github.com/nimashag/pregnancy-path-frontend",
      backendLink: "https://github.com/vihangamallawaarachchi2001/Well-backend",
    },
    {
      src: "projects/project4.png",
      alt: "4",
      name: "SpringBing",
      role: "Web Developer",
      description: "Sales optimization platform for fashion retail",
      frontendLink: "https://github.com/nimashag/spring_bing",
      backendLink: "https://github.com/nimashag/spring-bing-frontend",
      active: true,
    },
    {
      src: "projects/project5.png",
      alt: "5",
      name: "TaskSprint",
      role: "Android Developer",
      description: "Task management app with Kotlin and SQL",
      gitlink: "https://github.com/IT22927316/TaskSprint-Task-Manager-Mobile-App",
    },
    {
      src: "projects/project6.png",
      alt: "6",
      name: "MediLink",
      role: "Full-Stack Developer",
      description: "Hospital management application with full CRUD functionality",
      frontendLink: "https://github.com/nimashag/csse-frontend",
      backendLink: "https://github.com/nimashag/csse-backend",
    },
    {
      src: "projects/project7.png",
      alt: "7",
      name: "Eco-Cycle",
      role: "UI/UX Designer",
      description: "Waste management application designed in Figma",
      gitlink: "https://www.figma.com/design/PLabWtOvtGuwueuweO9zk6/Smart-Waste-Management-System?node-id=0-1&t=agOzuMEtcW50rvLI-1",
    },
  ];

  const handleImageClick = (index) => {
    setActiveIndex(index);
  };

  const openLinks = (frontend, backend) => {
    if (frontend) {
      window.open(frontend, "_blank");
    }
    if (backend) {
      window.open(backend, "_blank");
    }
  };

  return (
    <div className="ani-project">
      <section className="slider-container">
        <div className="slider-images">
          {sliderData.map((item, index) => (
            <div
              key={index}
              className={`slider-img ${index === activeIndex ? "active" : ""}`}
              onClick={() => handleImageClick(index)}
            >
              <img src={item.src} alt={item.name} />
              {index === activeIndex && (
                <div className="details">
                  <h2>{item.name}</h2>
                  <p className="role">{item.role}</p>
                  <p className="description">{item.description}</p>
                  {item.frontendLink && item.backendLink ? (
                    <Button
                      id="view-links"
                      title="View Frontend & Backend"
                      leftIcon={<TiLocationArrow />}
                      containerClass="!bg-yellow-300 flex-center gap-1"
                      onClick={() => openLinks(item.frontendLink, item.backendLink)}
                    />
                  ) : item.gitlink ? (
                    <a href={item.gitlink} target="_blank" rel="noopener noreferrer">
                      <Button
                        id="view-work"
                        title={item.gitlink.includes('figma') ? 'View on Figma' : 'View on GitHub'}
                        leftIcon={<TiLocationArrow />}
                        containerClass="!bg-yellow-300 flex-center gap-1"
                      />
                    </a>
                  ) : null}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AniProject;
