"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/StickyScroll";
import Image from "next/image";

const content = [
  {
    title: "Programming ",
    description:
      "Java: A popular, general-purpose programming language known for its portability across platforms.C: A low-level programming language used for system and application software development.C++: An extension of C with object-oriented features, used for performance-critical applications.Python: A versatile, high-level programming language known for its simplicity and use in various fields like web development, data science, and automation.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/programming1.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Web Development",
    description:
      "HTML 5: The latest version of the standard language for creating web pages and applications.CSS3: The latest version of CSS used to style web pages, offering advanced features like animations and flexbox.JavaScript: A programming language that enables interactivity on websites, commonly used alongside HTML and CSS.PHP: A server-side scripting language mainly used for web development to create dynamic web pages.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/programming.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Frameworks",
    description:
      "Node.js: A runtime environment that allows JavaScript to be used on the server side, enabling the development of scalable server applications.React.js: A JavaScript library for building user interfaces, especially single-page applications, with a component-based architecture.Vite.js: A build tool and development server designed to provide a fast and efficient development experience for modern web projects.Next.js: A React-based framework used for server-side rendering, static site generation, and building web applications with enhanced performance.TailwindCSS: A utility-first CSS framework that allows you to create custom designs by combining utility classes directly in your HTML",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Mobile Application Development",
    description:
      "Android Studio: An integrated development environment (IDE) used for building Android apps, primarily with Java or Kotlin. Kotlin: A modern programming language for Android development, fully interoperable with Java. Flutter: A UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase. Dart: A programming language used with Flutter for building mobile and web applications.",

    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
      <Image
        src="/app.png"
        width={300}
        height={300}
        className="h-full w-full object-cover"
        alt="linear board demo"
      />
    </div>
    ),
  },
  {
    title: "Database",
    description:"MongoDB: A NoSQL database that stores data in a flexible, document-oriented format. MySQL: A widely used relational database management system (RDBMS), known for its stability and speed. SQLite: A self-contained, serverless, and lightweight database engine often used for embedded applications.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
      <Image
        src="/database.png"
        width={300}
        height={300}
        className="h-full w-full object-cover"
        alt="linear board demo"
      />
    </div>
    ),
  },
  {
    title: "Version Control",
    description:"Git: A distributed version control system used to track changes in source code during software development. GitHub: A platform that hosts Git repositories, enabling collaboration and sharing of code with version control.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
      <Image
        src="/versioncontrol.png"
        width={300}
        height={300}
        className="h-full w-full object-cover"
        alt="linear board demo"
      />
    </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (

    <section id="expirence" className="py-28">
        <h1 className="heading">
        Experience
      </h1>
        <div className="flex flex-row py-48 p-90 w-full h-[500px] justify-center items-center">
            <StickyScroll 
                content={content} 
            />
        </div>
    </section>
  );
}
