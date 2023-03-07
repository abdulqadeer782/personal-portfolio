import React from 'react'
import useThemeSwitcher from '../../hooks/useThemeSwitcher'
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
    {
        key : 'react',
        name : "React JS",
        image : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    },
    {
        key : 'redux',
        name : "Redux",
        image : "https://seeklogo.com/images/R/redux-logo-9CA6836C12-seeklogo.com.png",
    },
    {
        key : 'electron',
        name : "Electron JS",
        image : "https://d2nir1j4sou8ez.cloudfront.net/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png",
    },
    {
        key : 'antd',
        name : "Ant-design",
        image : "https://static-00.iconduck.com/assets.00/ant-design-icon-512x512-ncocfg8e.png",
    },
    {
        key : 'material',
        name : "Material UI",
        image : "https://mui.com/static/logo.png",
    },
    {
        key : 'styled-component',
        name : "Styled-component",
        image : "https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png",
    },
]

function SkillSection() {
    
    return (
        <section className="py-5 sm:py-10 my-5 sm:mt-10">
            <div className="text-center">
                <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
                    Skills
                </p>
            </div>
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                {skills.map(res => (
                    <div
                        key={res.key}
                        className={"hover:scale-105 duration-500 py-2 rounded-lg cursor-pointer"}
                        title={res.name}
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