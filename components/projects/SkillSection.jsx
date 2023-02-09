import React from 'react'

function SkillSection() {
    let skills = [
        {
            key : 'html',
            name : "HTML",
            image : "https://cdn-icons-png.flaticon.com/512/732/732212.png",
        },
        {
            key : 'css',
            name : "CSS",
            image : "https://cdn4.iconfinder.com/data/icons/iconsimple-programming/512/css-512.png",
        },
        {
            key : 'javascript',
            name : "Javascript",
            image : "https://icon-library.com/images/javascript-icon-png/javascript-icon-png-23.jpg",
        },
    ]
    return (
        <section className="py-5 sm:py-10 my-5 sm:mt-10">
            <div className="text-center">
                <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
                    Skills
                </p>
            </div>
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 text-white">
                {skills.map(res => (
                    <div
                        key={res.key}
                        className={"hover:scale-105 duration-500 py-2 rounded-lg "}
                    >
                        <img src={res.image} alt="" className="w-20 mx-auto" />
                        <p className="mt-4">{res.name}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default SkillSection