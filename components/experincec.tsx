import React from 'react'
import { motion } from 'framer-motion'

export const Experiences =[
    {
        title: "Programming",
        year: "2024",
        role: "Juener Full Stack Development",
        description: "Java: A widely-used programming language known for running on different platforms. C: A low-level language used for building systems and applications. C++: An upgraded version of C with object-oriented features, ideal for high-performance tasks. Python: A simple, versatile language popular in web development, data science, and automation.",
        technologies: ["Java", "C", "C++", "Python"]
    },
    {
        title: "Web Development",
        year: "2024",
        role: "Juener Full Stack Development",
        description: "HTML5: The newest version of the language for building web pages and apps. CSS3: The latest version of CSS for styling web pages, with features like animations and flexbox. JavaScript: A language for adding interactivity to websites, often used with HTML and CSS. PHP: A server-side language for creating dynamic web pages.",
        technologies: ["HTML 5", "SCC3", "JavaScript", "PHP"]
    },
    {
        title: "Frameworks",
        year: "2024",
        role: "Juener Full Stack Development",
        description: "Node.js: A runtime environment for running JavaScript on the server, used to build scalable server applications. React.js: A library for creating user interfaces, especially single-page apps, using a component-based approach. Vite.js: A fast build tool and development server for modern web projects. Next.js: A React framework for server-side rendering, static site generation, and high-performance web apps. TailwindCSS: A utility-first CSS framework for building custom designs with reusable utility classes.",
        technologies: ["Node.js", "React.Js", "Next.js", "Bootstrap", "Vite.js","Tailwindcss","Spring-Boot"]
    },
    {
        title: "Mobile Application Development",
        year: "2024",
        role: "Juener Full Stack Development",
        description: "Android Studio: An IDE for creating Android apps using Java or Kotlin. Kotlin: A modern language for Android development that works seamlessly with Java.",
        technologies: ["Android Studeo", "Kotlin"]
    },
    {
        title: "Database",
        year: "2024",
        role: "Juener Full Stack Development",
        description: "MongoDB: A NoSQL database that stores data in a flexible, document-based format. MySQL: A fast and reliable relational database management system (RDBMS). SQLite: A lightweight, serverless database engine commonly used in embedded applications.",
        technologies: ["MongoDB", "MySQL", "SQLite"]
    },
    {
        title: "Version Control",
        year: "2024",
        role: "Juener Full Stack Development",
        description: "Git: A distributed version control system used to track changes in source code during software development. GitHub: A platform that hosts Git repositories, enabling collaboration and sharing of code with version control.",
        technologies: ["Git", "GitHub"]
    },
]

export default function experincec() {
  return (
    <div className='border-b border-neutral-900 pb-16'>
        <motion.h1 
        whileInView={{opacity: 1, y:0}}
        initial={{opacity: 0, y:-50}}
        transition={{duration: 0.5, delay: 0.5 }}
        className='heading mb-12'>Experiences</motion.h1>
        {Experiences.map((experincec, index) =>(
            <div key={index} className='mb-10 flex flex-wrap lg:justify-center'>
                <motion.div
                whileInView={{opacity: 1, x: 0}}
                initial={{opacity: 1, x: -100}}
                transition={{duration: 0.5, delay: index * 0.2}}
                className='w-full lg:w-1/4'>
                    <p className='mb-4 text-2xl text-neutral-400'>{experincec.title}</p>
                </motion.div>
                <motion.div 
                whileInView={{opacity: 1, x: 0}}
                initial={{opacity: 0, x: 100}}
                transition={{duration: 1}}
                className='w-full max-w-xl lg:w-3/4'>
                    <p className='mb-4 text-neutral-400'>{experincec.description}</p>
                    {experincec.technologies.map((tech, index) =>(
                        <span key={index}
                              className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple'
                        >
                            {tech}
                        </span>
                    ))}
                </motion.div>
            </div>
        ))}
    </div>
  )
}


