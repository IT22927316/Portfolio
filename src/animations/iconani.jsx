import React, { useRef, useEffect } from 'react';
import './iconani.css';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaFigma, FaJava, FaGithub } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandReactNative } from "react-icons/tb";
import { SiMongodb, SiFramer, SiKotlin, SiExpress, SiFirebase, SiTypescript, SiVite, SiMysql, SiPhp } from "react-icons/si";

const IconAnimation = () => {
    const items = [
        { id: 1, icon: <FaReact />, name: "React" },
        { id: 2, icon: <BiLogoTypescript />, name: "TypeScript" },
        { id: 3, icon: <RiJavascriptFill />, name: "JavaScript" },
        { id: 4, icon: <FaHtml5 />, name: "HTML" },
        { id: 5, icon: <TbBrandReactNative />, name: "ReactNative" },
        { id: 6, icon: <SiMongodb />, name: "MongoDB" },
        { id: 7, icon: <FaFigma />, name: "Figma" },
        { id: 8, icon: <SiFramer />, name: "Framer" },
        { id: 9, icon: <SiKotlin />, name: "Kotlin" },
        { id: 10, icon: <SiExpress />, name: "Express.js" },
        { id: 11, icon: <FaNodeJs />, name: "Node.js" },
        { id: 12, icon: <SiFirebase />, name: "Firebase" },
        { id: 13, icon: <FaCss3Alt />, name: "CSS" },
        { id: 14, icon: <SiVite />, name: "Vite" },
        { id: 15, icon: <SiMysql />, name: "MySQL" },
        { id: 16, icon: <SiPhp />, name: "PHP" },
        { id: 17, icon: <FaJava />, name: "Java" },
        { id: 18, icon: <FaGithub />, name: "GSAP" },
        { id: 19, icon: <FaReact />, name: "React" },
        { id: 20, icon: <BiLogoTypescript />, name: "TypeScript" },
        { id: 21, icon: <RiJavascriptFill />, name: "JavaScript" },
        { id: 21, icon: <FaHtml5 />, name: "HTML" },
        { id: 23, icon: <FaNodeJs />, name: "Node.js" },
        { id: 24, icon: <SiMongodb />, name: "MongoDB" },
        { id: 25, icon: <FaFigma />, name: "Figma" },
        { id: 26, icon: <FaJava />, name: "Java" },
    ];

    const listRef = useRef(null);
    const quantity = items.length;

    useEffect(() => {
        if (listRef.current) {
            const itemWidth = 200; 
            const totalWidth = (itemWidth + 30) * quantity;
            listRef.current.style.setProperty('--width', totalWidth + 'px');
        }
    }, [quantity]);

    return (
        <div className="automated-slider" style={{ '--quantity': quantity, '--gap': '30px' }}>
            <div className="list" ref={listRef}>
                {items.map((item, index) => (
                    <div
                        key={item.id}
                        className="item"
                        style={{ '--position': index + 1 }}
                    >
                        <span className="icon">{item.icon}</span>
                        <span className="name">{item.name}</span>
                    </div>
                ))}
                {items.map((item, index) => (
                    <div
                        key={item.id}
                        className="item"
                        style={{ '--position': index + 1 }}
                    >
                        <span className="icon">{item.icon}</span>
                        <span className="name">{item.name}</span>
                    </div>
                ))}
                {items.map((item, index) => (
                    <div
                        key={item.id}
                        className="item"
                        style={{ '--position': index + 1 }}
                    >
                        <span className="icon">{item.icon}</span>
                        <span className="name">{item.name}</span>
                    </div>
                ))}
                {items.map((item, index) => (
                    <div
                        key={item.id}
                        className="item"
                        style={{ '--position': index + 1 }}
                    >
                        <span className="icon">{item.icon}</span>
                        <span className="name">{item.name}</span>
                    </div>
                ))}
                {items.map((item, index) => (
                    <div
                        key={item.id}
                        className="item"
                        style={{ '--position': index + 1 }}
                    >
                        <span className="icon">{item.icon}</span>
                        <span className="name">{item.name}</span>
                    </div>
                ))}
                {items.map((item, index) => (
                    <div
                        key={item.id}
                        className="item"
                        style={{ '--position': index + 1 }}
                    >
                        <span className="icon">{item.icon}</span>
                        <span className="name">{item.name}</span>
                    </div>
                ))}
                {items.map((item, index) => (
                    <div
                        key={item.id}
                        className="item"
                        style={{ '--position': index + 1 }}
                    >
                        <span className="icon">{item.icon}</span>
                        <span className="name">{item.name}</span>
                    </div>
                ))}
                {items.map((item, index) => (
                    <div
                        key={item.id}
                        className="item"
                        style={{ '--position': index + 1 }}
                    >
                        <span className="icon">{item.icon}</span>
                        <span className="name">{item.name}</span>
                    </div>
                ))}
                {items.map((item, index) => (
                    <div
                        key={item.id}
                        className="item"
                        style={{ '--position': index + 1 }}
                    >
                        <span className="icon">{item.icon}</span>
                        <span className="name">{item.name}</span>
                    </div>
                ))}
                {items.map((item, index) => (
                    <div
                        key={item.id}
                        className="item"
                        style={{ '--position': index + 1 }}
                    >
                        <span className="icon">{item.icon}</span>
                        <span className="name">{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IconAnimation;
