import Image from 'next/image';
import { useState } from 'react';
import { aboutMeData } from './../data/aboutMeData';

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

                <div className="w-full sm:w-1/4 mb-7 sm:mb-0">
                    <Image
                        src="/images/abdul.jpg"
                        width={200}
                        height={200}
                        className="rounded-lg"
                        alt="Profile Image"
                    />
                </div>

                <div className="font-general-regular w-full sm:w-3/4 text-left">

                    <p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg">
                        Seeking a position in the field of IT and Software Development to utilize my skills for
                        the growth of the organization as well as enhance my knowledge about new and emerging trends. 
                        To build strong relationship with people within an organization and effectively contribute towards its growth by taking 
                        my skills and efforts to reach the pinnacle of success through sheer hard work, integrity, commitment & dedication. 
                        I will try my level best to achieve the goals which i set for myself.
                        I have the willingness to learn from and share knowledge with others. And i am able to adapt any situation 
                        and challenges that comes my way
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;
