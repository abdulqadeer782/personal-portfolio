import Image from 'next/image';
import { useState } from 'react';
import { aboutMeData } from '../../data/aboutMeData';

function AboutMeBio() {
    const [aboutMe, setAboutMe] = useState(aboutMeData);
    return (
        <section className="py-5 sm:py-10 my-5 sm:mt-10">
            <div className="text-center">
                <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
                    About Me
                </p>
            </div>
            <div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">

                <div className="w-full sm:w-1/4 mb-7 sm:mb-0">
                    <Image
                        src="/images/profile.jpeg"
                        width={200}
                        height={200}
                        className="rounded-lg"
                        alt="Profile Image"
                    />
                </div>

                <div className="font-general-regular w-full sm:w-3/4 text-left">
                    {aboutMe.map((bio) => (
                        <p
                            className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
                            key={bio.id}
                        >
                            {bio.bio}
                        </p>
                    ))}
                </div>  
            </div>
        </section>
    );
}

export default AboutMeBio;
