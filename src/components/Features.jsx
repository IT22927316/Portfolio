import React, { useRef , useState} from 'react'
import { TiLocationArrow } from 'react-icons/ti'
import AnimatedTitle from './AnimatedTitle';
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub, FaFacebook, FaDiscord } from 'react-icons/fa';
import IconAnimation from '../animations/iconani';
import IconAnimation1 from '../animations/iconani2';


const BentoTilt = ({ children, className = ''}) => {

    const[transformStyle, setTransformStyle] = useState('');
    const itemRef = useRef();

    const handleMouseMove = (e) => {
        if(!itemRef.current) return;

        const { left, top, width, height } = itemRef.current.getBoundingClientRect();

        const relativeX = (e.clientX - left) / width;
        const relativeY = (e.clientY - top) / height;

        const tiltX = (relativeY - 0.5) * 15;
        const tiltY = (relativeX - 0.5) * 15;

        const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.95, 0.95, 0.95)`;

        setTransformStyle(newTransform)
    }

    const handleMouseLeave = () => {
        setTransformStyle('');
    }

    return(
        <div className={className} ref={itemRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{ transform: transformStyle}}>
            {children}
        </div>
    )
}

const BentoCard = ({ images = [], title }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animating, setAnimating] = useState(false); 
    const [hovered, setHovered] = useState(false); 

    if (images.length === 0) {
        return <div>No images available</div>;
    }

    const handleNextImage = () => {
        if (animating || images.length <= 1) return; 

        setAnimating(true);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); 

        setTimeout(() => {
            setAnimating(false); 
        }, 500); 
    };

    const currentImage = images[currentIndex];

    if (!currentImage || !currentImage.src) {
        return <div>No valid image or video source provided</div>;
    }

    const isVideo = currentImage.src?.includes('mp4') || currentImage.src?.includes('mov'); 

    return (
        <div 
            className='relative size-full group overflow-hidden cursor-pointer' 
            onClick={handleNextImage}
            onMouseEnter={() => setHovered(true)} // When mouse enters
            onMouseLeave={() => setHovered(false)} // When mouse leaves
        >
            {/* Image or Video with Tailwind Transitions */}
            <div
                className={`absolute left-0 top-0 size-full object-cover object-center transition-opacity duration-500 ease-in-out ${animating ? 'opacity-0' : 'opacity-100'}`}
            >
                {isVideo ? (
                    <video 
                        src={currentImage.src}
                        loop
                        muted
                        autoPlay
                        className="size-full object-cover object-center"
                    />
                ) : (
                    <img 
                        src={currentImage.src}
                        alt={title}
                        className="size-full object-cover object-center"
                    />
                )}
            </div>

            {/* Content Overlay */}
            <div className='relative z-10 flex size-full flex-col justify-between p-5 text-blue-50'>
                <div>
                    <h1 className="bento-title special-font">{title}</h1>
                </div>
            </div>

            {/* Hover Popup with Smooth Downward Animation */}
            <div 
                className={`hover-popup absolute bottom-0 left-0 right-0 bg-white text-black text-center p-3 transition-transform duration-500 ease-in-out ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-100'}`}
            >
                <h1 className='font-general'>{currentImage.popupdesc}</h1>
            </div>
        </div>
    );
};

const Features = () => {
  return (
    <section className='bg-black pb-52'>
        <div className='container mx-auto px-3 md:px-10'>
            <div className='px-5 py-12'>
                <AnimatedTitle title="<b>About Me</b>" containerClass="mt-5 !text-white text-center"/>

                <div className="social text-center py-7">
                    <h2 className="text-white font-circular-web font-bold text-2xl md:text-4xl mb-6">Say Hello!</h2>
                    <div className="flex justify-center space-x-32">
                        <a href="https://www.instagram.com/rusiru.gram/?hl=en" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-pink-500 transition duration-300">
                            <FaInstagram />
                        </a>
                        <a href="https://x.com/_Bi_n_gO_" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-blue-500 transition duration-300">
                            <FaTwitter />
                        </a>
                        <a href="https://www.linkedin.com/in/rusiru-de-silva/" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-blue-700 transition duration-300">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/IT22927316" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-gray-500 transition duration-300">
                            <FaGithub />
                        </a>
                        <a href="https://www.facebook.com/rusiru.kalendra" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-blue-500 transition duration-300">
                            <FaFacebook />
                        </a>
                        <a href="https://discord.com/users/Rusiru#6126" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-purple-500 transition duration-300">
                            <FaDiscord />
                        </a>
                    </div>
                </div>
            </div>

            <div className='grid h-[84vh] grid-cols-2 grid-rows-2 gap-7'>
                <BentoTilt className='bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2'>
                    <BentoCard 
                        title={<><p className="!text-black">RUSIRU<br />KALENDRA<br />DE SILVA</p></>}
                        images={[
                            { 
                                src: 'img/pp.webp', 
                                popupdesc: 'Hi, I’m Rusiru (He/Him), a creative developer passionate about blending web development and UI/UX design to craft intuitive and user-focused digital experiences. I enjoy solving complex design challenges and building interfaces that are both functional and visually engaging.' 
                            }
                        ]}
                    />
                </BentoTilt>

                <BentoTilt className='bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0'>
                    <BentoCard
                            title={
                                <div className="flex justify-between items-center">
                                    <p className="!text-black">Licenses & Certificates</p>
                                    <button className="text-white !font-circular-web uppercase bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded-md text-sm">
                                        Click Me
                                    </button>
                                </div>
                            }
                            images={[
                                {
                                    src: 'certificates/futurelearn.webp',
                                    popupdesc: 'I’m pursuing a BSc Honours in IT, specializing in Software Engineering at SLIIT, now in my third year, focusing on software development and engineering'
                                },
                                {
                                    src: 'certificates/accenture2.webp',
                                    popupdesc: 'I completed both my A/Ls in the Physical Science stream and O/Ls at Mahinda College, gaining a solid foundation in analytical thinking, IT, and business principles.'
                                },
                                {
                                    src: 'certificates/alison.webp',
                                    popupdesc: 'I have earned certifications through CODL at the University of Moratuwa and am currently pursuing additional courses to further expand my skills'
                                },
                                {
                                    src: 'certificates/simpli.webp',
                                    popupdesc: 'I have earned certifications through CODL at the University of Moratuwa and am currently pursuing additional courses to further expand my skills'
                                },
                                {
                                    src: 'certificates/semrush.webp',
                                    popupdesc: 'I have earned certifications through CODL at the University of Moratuwa and am currently pursuing additional courses to further expand my skills'
                                },
                                {
                                    src: 'certificates/pmi.webp',
                                    popupdesc: 'I have earned certifications through CODL at the University of Moratuwa and am currently pursuing additional courses to further expand my skills'
                                },
                                {
                                    src: 'certificates/hplife.webp',
                                    popupdesc: 'I have earned certifications through CODL at the University of Moratuwa and am currently pursuing additional courses to further expand my skills'
                                },
                                {
                                    src: 'certificates/moracodl.webp',
                                    popupdesc: 'I have earned certifications through CODL at the University of Moratuwa and am currently pursuing additional courses to further expand my skills'
                                },
                            ]}
                    />
                </BentoTilt>


                <BentoTilt className='bento-tilt_1 me-14 md:col-span-1 md:me-0'>
                    <BentoCard 
                        title={
                            <div className="flex justify-between items-center">
                                <p className="!text-black">HOBBIES</p>
                                <button className="text-white bg-blue-500 !font-circular-web uppercase hover:bg-blue-700 px-4 py-2 rounded-md text-sm">
                                    Click Me
                                </button>
                            </div>
                        }
                        images={[
                            { 
                                src: "img/gaming.jpg", 
                                popupdesc: "I am passionate about gaming, which allows me to unwind and immerse myself in various virtual worlds and challenges" 
                            },
                            { 
                                src: "img/diecast1.webp", 
                                popupdesc: "One of my hobbies is collecting diecast cars, where I appreciate the craftsmanship and attention to detail in each model" 
                            },
                            { 
                                src: "img/chessimg.webp", 
                                popupdesc: "I enjoy playing chess, which helps enhance my strategic thinking and problem-solving skills" 
                            },
                            { 
                                src: "img/films.webp", 
                                popupdesc: "I also enjoy watching films and related content, appreciating storytelling and cinematic art across various genres" 
                            }
                        ]}
                    />
                </BentoTilt>

            </div>

            <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh] mt-10">
                <BentoCard 
                        title={
                            <div className="flex justify-between items-center">
                                <p className="!text-black">Education</p>
                                <button className="text-white !font-circular-web uppercase bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded-md text-sm">
                                    Click Me
                                </button>
                            </div>
                        }
                        images={[
                            {
                                src: 'img/sliit.webp',
                                popupdesc: 'I am currently pursuing a Bachelor of Science (Honours) in Information Technology with a specialization in Software Engineering at SLIIT. Now in my third year, I am deeply focused on advancing my expertise in software development, engineering principles, and cutting-edge technologies to build innovative and efficient software solutions.'
                            },
                            {
                                src: 'img/mahindac.webp',
                                popupdesc: 'I successfully completed my Advanced Level examinations in the Physical Science stream and my Ordinary Level examinations at Mahinda College, establishing a strong foundation in analytical thinking, information technology, and business principles.'
                            },
                        ]}
                    />
            </BentoTilt>

        </div>
        <div className='mt-10 container mx-auto px-3 md:px-10'>
            <AnimatedTitle title="<b>SKILLS</b>" containerClass="mt-5 !text-white text-center !text-7xl"/>
            <h1 className='mt-3 mb-5 text-white text-center font-general'>I specialize in front-end and back-end development with a strong focus on technologies like React, TypeScript, JavaScript, and HTML. I also have expertise 
                in mobile app development using React Native and Kotlin, along with experience working with databases such as MongoDB and MySQL. I am skilled in UI/UX design, 
                utilizing tools like Figma and Framer to create intuitive, user-centric interfaces. I am also proficient in backend technologies, including Express.js, Node.js, and 
                Firebase, and have experience with PHP and Java. Additionally, I work with modern tools like Vite and GSAP to create dynamic, high-performance web applications.</h1>
            <IconAnimation/>
            <IconAnimation1/>
        </div>
        
    </section>
  )
}

export default Features