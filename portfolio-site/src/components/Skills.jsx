import React, { useRef, useEffect, useContext } from 'react';

import Python from '../assets/stack_image_icons/python.png';
import Nodejs from '../assets/stack_image_icons/nodejs.png';
import Reactjs from '../assets/stack_image_icons/reactjs.png';
import Tailwind from '../assets/stack_image_icons/tailwind.png';
import CSS from '../assets/stack_image_icons/css.png';
import HTML from '../assets/stack_image_icons/html.png';
import AWS from '../assets/stack_image_icons/aws.png';
import JavaScript from '../assets/stack_image_icons/javascript.png';
import TypeScript from '../assets/stack_image_icons/typescript.png';
import Django from '../assets/stack_image_icons/django.png';
import Firebase from '../assets/stack_image_icons/firebase.png';
import Java from '../assets/stack_image_icons/java.png';
import D3 from '../assets/stack_image_icons/d3.png';
import Selenium from '../assets/stack_image_icons/selenium.png';
import Scikit from '../assets/stack_image_icons/scikitlearn.png';
import Gensim from '../assets/stack_image_icons/gensim.png';
import Express from '../assets/stack_image_icons/express.png';
import Nextjs from '../assets/stack_image_icons/nextjs.png';
import Opencv from '../assets/stack_image_icons/opencv.png';
import C from '../assets/stack_image_icons/C.png';
import Cpp from '../assets/stack_image_icons/C++.png';
import Rust from '../assets/stack_image_icons/rust.png';
import SQL from '../assets/stack_image_icons/sql.png';
import Git from '../assets/stack_image_icons/git.png';
import Mongodb from '../assets/stack_image_icons/mongodb.png';
import Flutter from '../assets/stack_image_icons/flutter.png';
import useOnScreen from '../hooks/useScreenView';
import { motion } from 'framer-motion';

import { AppContext } from '../providers/AppStateProvider';

const Skills = (data) => {

    // const [activeTheme] = useThemeSwitcher();

    const { inSkillsSection, setInSkillsSection } = useContext(AppContext);

    const ref = useRef(null);
    const isVisible = useOnScreen(ref);

    useEffect(() => {
        if (isVisible) {
            console.log("Element is on screen");
            setInSkillsSection(true);
        } else {
            console.log("Element is not on screen");
            setInSkillsSection(false);
        }
    }, [isVisible]);

    return (
        <section ref={ref} id="skills-section" className="border border-white mb-24">
            <div className="font-mono flex flex-row items-center mb-24 mt-16">
                <div className="font-bold text-left text-5xl text-purple-600">
                    <span>Skills</span>
                </div>
                <hr className="ml-4 mt-6 border-t-1 border-purple-600 h-2 w-72" />
            </div>
            {isVisible ? (
                <div className='mb-60'>
                    <motion.section
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
                    >
                        <div className="flex flex-col mb-24 sm:mx-24">
                            <div className='text-center mb-12 text-xl font-bold'>Programming Languages</div>
                            <div className="sm:grid sm:grid-cols-5 sm:gap-10 flex flex-col flex-wrap justify-center items-center">
                                <div className='flex flex-row items-center gap-2'>
                                    <img src={JavaScript} alt="JavaScript Icon" className="w-10 h-10 hover:scale-125 transition-transform duration-300 ease-in-out" />
                                    <span>JavaScript</span>
                                </div>
                                <div className='flex flex-row items-center gap-2'>
                                    <img src={TypeScript} alt="TypeScript Icon" className="w-10 h-10 hover:scale-125 transition-transform duration-300 ease-in-out" />
                                    <span>TypeScript</span>
                                </div>
                                <div className='flex flex-row items-center gap-2'>
                                    <img src={Python} alt="Python Icon" className="w-10 h-10 hover:scale-125 transition-transform duration-300 ease-in-out" />
                                    <span>Python</span>
                                </div>
                                <div className='flex flex-row items-center gap-2'>
                                    <img src={Java} alt="Java Icon" className="w-10 h-10 hover:scale-125 transition-transform duration-300 ease-in-out" />
                                    <span>Java</span>
                                </div>
                                <div className='flex flex-row items-center gap-2'>
                                    <img src={C} alt="C Icon" className="w-10 h-10 hover:scale-125 transition-transform duration-300 ease-in-out" />
                                    <span>C</span>
                                </div>
                                <div className='flex flex-row items-center gap-2'>
                                    <img src={Cpp} alt="C++ Icon" className="w-10 h-10 hover:scale-125 transition-transform duration-300 ease-in-out" />
                                    <span>C++</span>
                                </div>
                                <div className='flex flex-row items-center gap-2'>
                                    <img src={Rust} alt="Rust Icon" className="w-10 h-10 hover:scale-125 transition-transform duration-300 ease-in-out" />
                                    <span>Rust</span>
                                </div>
                                <div className='flex flex-row items-center gap-2'>
                                    <img src={SQL} alt="SQL Icon" className="w-10 h-10 hover:scale-125 transition-transform duration-300 ease-in-out" />
                                    <span>SQL</span>
                                </div>
                            </div>

                        </div>
                        <div className="flex flex-col my-24 sm:mx-24">
                            <div className="flex flex-col mb-12 text-center text-xl font-bold">Frameworks and Technologies</div>
                            <div className="sm:grid sm:grid-cols-5 sm:gap-10 flex flex-col flex-wrap justify-center items-center">
                                <div className='flex flex-row items-center gap-2'>
                                    <img src={Django} alt="Django Icon" className="w-10 h-10 hover:scale-125 transition-transform duration-300 ease-in-out" />
                                    <span>Django</span>
                                </div>
                                <div className='flex flex-row items-center gap-2'>
                                    <img src={Nodejs} alt="Nodejs Icon" className="w-10 h-10 hover:scale-125 transition-transform duration-300 ease-in-out" />
                                    <span>Node.js</span>
                                </div>
                                <div className='flex flex-row items-center gap-2'>
                                    <img src={Reactjs} alt="Reactjs Icon" className="w-10 h-10 hover:scale-125 transition-transform duration-300 ease-in-out" />
                                    <span>React</span>
                                </div>
                                <div className='flex flex-row items-center gap-2'>
                                    <img src={Tailwind} alt="Tailwind Icon" className="w-10 h-10 hover:scale-125 transition-transform duration-300 ease-in-out" />
                                    <span>Tailwind</span>
                                </div>
                                <div className='flex flex-row items-center gap-2'>
                                    <img src={Flutter} alt="Tailwind Icon" className="w-10 h-10 hover:scale-125 transition-transform duration-300 ease-in-out" />
                                    <span>Flutter</span>
                                </div>
                                <div className='flex flex-row items-center gap-2'>
                                    <img src={CSS} alt="CSS Icon" className="w-10 h-10 hover:scale-125 transition-transform duration-300 ease-in-out" />
                                    <span>CSS</span>
                                </div>
                                <div className='flex flex-row items-center gap-2'>
                                    <img src={HTML} alt="HTML Icon" className="w-10 h-10 hover:scale-125 transition-transform duration-300 ease-in-out" />
                                    <span>HTML</span>
                                </div>
                                <div className='flex flex-row items-center gap-2'>
                                    <img src={D3} alt="D3 Icon" className="w-10 h-10 hover:scale-125 transition-transform duration-300 ease-in-out" />
                                    <span>D3.js</span>
                                </div>
                                <div className='flex flex-row items-center gap-2'>
                                    <img src={Express} alt="Express Icon" className="w-10 h-10 hover:scale-125 transition-transform duration-300 ease-in-out" />
                                    <span>Express.js</span>
                                </div>
                                <div className='flex flex-row items-center gap-2'>
                                    <img src={Nextjs} alt="Nextjs Icon" className="w-10 h-10 hover:scale-125 transition-transform duration-300 ease-in-out" />
                                    <span>Next.js</span>
                                </div>
                                <div className='flex flex-row items-center gap-2'>
                                    <img src={AWS} alt="AWS Icon" className="w-10 h-10 hover:scale-125 transition-transform duration-300 ease-in-out" />
                                    <span>AWS</span>
                                </div>
                                <div className='flex flex-row items-center gap-2'>
                                    <img src={Firebase} alt="Firebase Icon" className="w-10 h-10 hover:scale-125 transition-transform duration-300 ease-in-out" />
                                    <span>Firebase</span>
                                </div>
                                <div className='flex flex-row items-center gap-2'>
                                    <img src={Mongodb} alt="Mongodb Icon" className="w-10 h-10 hover:scale-125 transition-transform duration-300 ease-in-out" />
                                    <span>Mongodb</span>
                                </div>
                                <div className='flex flex-row items-center gap-2'>
                                    <img src={Selenium} alt="Selenium Icon" className="w-10 h-10 hover:scale-125 transition-transform duration-300 ease-in-out" />
                                    <span>Selenium</span>
                                </div>
                                <div className='flex flex-row items-center gap-2'>
                                    <img src={Scikit} alt="Scikit Icon" className="w-10 h-10 hover:scale-125 transition-transform duration-300 ease-in-out" />
                                    <span>Scikit-Learn</span>
                                </div>
                                <div className='flex flex-row items-center gap-2'>
                                    <img src={Gensim} alt="Gensim Icon" className="w-10 h-10 hover:scale-125 transition-transform duration-300 ease-in-out" />
                                    <span>Gensim</span>
                                </div>
                                <div className='flex flex-row items-center gap-2'>
                                    <img src={Opencv} alt="Opencv Icon" className="w-10 h-10 hover:scale-125 transition-transform duration-300 ease-in-out" />
                                    <span>OpenCV</span>
                                </div>
                                <div className='flex flex-row items-center gap-2'>
                                    <img src={Git} alt="Git Icon" className="w-10 h-10 hover:scale-125 transition-transform duration-300 ease-in-out" />
                                    <span>Git</span>
                                </div>
                            </div>
                        </div>
                    </motion.section>
                </div>
            ) :
                <div className='mb-60 opacity-0'>
                    <div className="flex flex-col mb-24 sm:mx-24">
                        <div className='text-center mb-12 text-xl font-bold'>Programming Languages</div>
                        <div className="sm:grid sm:grid-cols-5 sm:gap-10 flex flex-col flex-wrap justify-center items-center">
                            <div className='flex flex-row items-center gap-2'>
                                <img src={JavaScript} alt="JavaScript Icon" className="w-10 h-10 hover:scale-125 transition-transform duration-300 ease-in-out" />
                                <span>JavaScript</span>
                            </div>
                            <div className='flex flex-row items-center gap-2'>
                                <img src={TypeScript} alt="TypeScript Icon" className="w-10 h-10" />
                                <span>TypeScript</span>
                            </div>
                            <div className='flex flex-row items-center gap-2'>
                                <img src={Python} alt="Python Icon" className="w-10 h-10" />
                                <span>Python</span>
                            </div>
                            <div className='flex flex-row items-center gap-2'>
                                <img src={Java} alt="Java Icon" className="w-10 h-10" />
                                <span>Java</span>
                            </div>
                            <div className='flex flex-row items-center gap-2'>
                                <img src={C} alt="C Icon" className="w-10 h-10" />
                                <span>C</span>
                            </div>
                            <div className='flex flex-row items-center gap-2'>
                                <img src={Cpp} alt="C++ Icon" className="w-10 h-10" />
                                <span>C++</span>
                            </div>
                            <div className='flex flex-row items-center gap-2'>
                                <img src={Rust} alt="Rust Icon" className="w-10 h-10" />
                                <span>Rust</span>
                            </div>
                            <div className='flex flex-row items-center gap-2'>
                                <img src={SQL} alt="SQL Icon" className="w-10 h-10" />
                                <span>SQL</span>
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-col my-24 sm:mx-24">
                        <div className="flex flex-col mb-12 text-center text-xl font-bold">Frameworks and Technologies</div>
                        <div className="sm:grid sm:grid-cols-5 sm:gap-10 flex flex-col flex-wrap justify-center items-center">
                            <div className='flex flex-row items-center gap-2'>
                                <img src={Django} alt="Django Icon" className="w-10 h-10" />
                                <span>Django</span>
                            </div>
                            <div className='flex flex-row items-center gap-2'>
                                <img src={Nodejs} alt="Nodejs Icon" className="w-10 h-10" />
                                <span>Nodejs</span>
                            </div>
                            <div className='flex flex-row items-center gap-2'>
                                <img src={Reactjs} alt="Reactjs Icon" className="w-10 h-10" />
                                <span>Reactjs</span>
                            </div>
                            <div className='flex flex-row items-center gap-2'>
                                <img src={Tailwind} alt="Tailwind Icon" className="w-10 h-10" />
                                <span>Tailwind</span>
                            </div>
                            <div className='flex flex-row items-center gap-2'>
                                <img src={CSS} alt="CSS Icon" className="w-10 h-10" />
                                <span>CSS</span>
                            </div>
                            <div className='flex flex-row items-center gap-2'>
                                <img src={HTML} alt="HTML Icon" className="w-10 h-10" />
                                <span>HTML</span>
                            </div>
                            <div className='flex flex-row items-center gap-2'>
                                <img src={D3} alt="D3 Icon" className="w-10 h-10" />
                                <span>D3</span>
                            </div>
                            <div className='flex flex-row items-center gap-2'>
                                <img src={Express} alt="Express Icon" className="w-10 h-10" />
                                <span>Express</span>
                            </div>
                            <div className='flex flex-row items-center gap-2'>
                                <img src={Nextjs} alt="Nextjs Icon" className="w-10 h-10" />
                                <span>Nextjs</span>
                            </div>
                            <div className='flex flex-row items-center gap-2'>
                                <img src={AWS} alt="AWS Icon" className="w-10 h-10" />
                                <span>AWS</span>
                            </div>
                            <div className='flex flex-row items-center gap-2'>
                                <img src={Firebase} alt="Firebase Icon" className="w-10 h-10" />
                                <span>Firebase</span>
                            </div>
                            <div className='flex flex-row items-center gap-2'>
                                <img src={Mongodb} alt="Mongodb Icon" className="w-10 h-10" />
                                <span>Mongodb</span>
                            </div>
                            <div className='flex flex-row items-center gap-2'>
                                <img src={Selenium} alt="Selenium Icon" className="w-10 h-10" />
                                <span>Selenium</span>
                            </div>
                            <div className='flex flex-row items-center gap-2'>
                                <img src={Scikit} alt="Scikit Icon" className="w-10 h-10" />
                                <span>Scikit</span>
                            </div>
                            <div className='flex flex-row items-center gap-2'>
                                <img src={Gensim} alt="Gensim Icon" className="w-10 h-10" />
                                <span>Gensim</span>
                            </div>
                            <div className='flex flex-row items-center gap-2'>
                                <img src={Opencv} alt="Opencv Icon" className="w-10 h-10" />
                                <span>Opencv</span>
                            </div>
                            <div className='flex flex-row items-center gap-2'>
                                <img src={Git} alt="Git Icon" className="w-10 h-10" />
                                <span>Git</span>
                            </div>
                        </div>
                    </div>

                </div>}
        </section>
    );
};

export default Skills;
