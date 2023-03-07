import Image from 'next/image';
import { useState } from 'react';
import { aboutMeData } from './../data/aboutMeData';
import {motion} from 'framer-motion'

function About() {
    const [aboutMe, setAboutMe] = useState(aboutMeData);
    return (
        <section id='About' className="py-5 sm:py-10 my-5 sm:mt-10">
            <div className="text-center">
                <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
                    About Me
                </p>
            </div>
            <div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">

                <motion.div className="w-full sm:w-1/4 mb-7 sm:mb-0">
                    <Image
                        src="/images/abdul.jpg"
                        width={200}
                        height={200}
                        className="rounded-lg"
                        alt="Profile Image"
                    />
                </motion.div>

                <div className="font-general-regular w-full sm:w-3/4 text-left">

                    <p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg">
                    I am a versatile software developer with over 2 years of experience in both front-end and back-end development. My skill set encompasses HTML, CSS, JavaScript, React, Ant Design, Next.js, Node.js, and Express. I am passionate about creating well-designed, functional, and user-friendly web applications that deliver a seamless experience for users.

With my strong foundation in front-end development and my experience in back-end development, I am able to bring projects to life from start to finish. I take pride in delivering high-quality code and working closely with clients to understand their needs and create solutions that meet their specific requirements. I am dedicated to continuous learning and improvement, and I am always striving to expand my skillset and stay up-to-date with the latest web development technologies.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;
