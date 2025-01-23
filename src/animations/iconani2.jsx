import React, { useRef, useEffect } from 'react';
import './iconani.css';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaFigma, FaJava, FaGithub } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandReactNative } from "react-icons/tb";
import { SiMongodb, SiFramer, SiKotlin, SiExpress, SiFirebase, SiTypescript, SiVite, SiMysql, SiPhp } from "react-icons/si";

const IconAnimation = () => {
    const items = [
            { id: 1, icon: <FaJava />, name: "Java" },
            { id: 2, icon: <SiExpress />, name: "Express.js" },
            { id: 3, icon: <FaHtml5 />, name: "HTML" },
            { id: 4, icon: <SiFirebase />, name: "Firebase" },
            { id: 5, icon: <FaReact />, name: "React" },
            { id: 6, icon: <SiMysql />, name: "MySQL" },
            { id: 7, icon: <TbBrandReactNative />, name: "ReactNative" },
            { id: 8, icon: <FaCss3Alt />, name: "CSS" },
            { id: 9, icon: <SiKotlin />, name: "Kotlin" },
            { id: 10, icon: <FaFigma />, name: "Figma" },
            { id: 11, icon: <FaNodeJs />, name: "Node.js" },
            { id: 12, icon: <RiJavascriptFill />, name: "JavaScript" },
            { id: 13, icon: <SiFramer />, name: "Framer" },
            { id: 14, icon: <SiMongodb />, name: "MongoDB" },
            { id: 15, icon: <SiVite />, name: "Vite" },
            { id: 16, icon: <BiLogoTypescript />, name: "TypeScript" },
            { id: 17, icon: <FaGithub />, name: "GSAP" } 
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
