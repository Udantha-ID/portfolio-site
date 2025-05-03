import React from "react";
import { projects, Project } from "@/data";
import { CardContainer, CardBody, CardItem } from "@/components/ui/Projectcard";
import { IconBrandGithub } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";

function RecentProjects() {
  return (
    <section id="project" className="py-11">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="heading text-center text-2xl md:text-4xl lg:text-5xl font-bold"
      >
        Recent <span className="text-purple">Projects</span>
      </motion.h1>
      <div className="flex flex-wrap items-center justify-center p-8 gap-x-20 gap-y-32 lg:gap-x-52 lg:gap-y-20 mt-10">
        {projects.map((project: Project) => (
          <div
            key={project.id}
            className="h-[20rem] lg:h-[32.5rem] flex items-center justify-center sm:w-80 w-[90vw] lg:w-96"
          >
            <CardContainer containerClassName="group">
              <CardBody className="bg-gray-50 relative group-hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] lg:w-[30rem] h-auto rounded-xl p-4 lg:p-6 border">
                {/* Project Title */}
                <CardItem
                  translateZ={50}
                  className="text-base md:text-lg lg:text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {project.title}
                </CardItem>

                {/* Project Description */}
                <CardItem
                  as="p"
                  translateZ={60}
                  className="text-neutral-500 text-xs md:text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {project.des}
                </CardItem>

                {/* Project Image */}
                <CardItem translateZ={100} className="w-full mt-4">
                  <Image
                    src={project.img}
                    alt={project.title}
                    width={440}
                    height={240}
                    className="rounded-xl object-cover"
                  />
                </CardItem>

                {/* Project Actions */}
                <div className="flex justify-between items-center mt-10 lg:mt-20">
                  <CardItem
                    translateZ={20}
                    as="a"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 lg:px-4 py-1 lg:py-2 rounded-xl text-xs lg:text-sm font-normal dark:text-white bg-purple-500 text-white hover:bg-purple-600 transition"
                  >
                    View Project Repo →
                  </CardItem>

                  {/* GitHub Link */}
                  <CardItem
                    translateZ={20}
                    as="a"
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 lg:px-4 py-1 lg:py-2 rounded-xl text-xs lg:text-sm font-normal text-neutral-500 dark:text-neutral-300 hover:text-neutral-700 hover:bg-gray-500 transition"
                  >
                    <IconBrandGithub className="w-4 lg:w-5 h-4 lg:h-5" />
                    GitHub
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RecentProjects;
