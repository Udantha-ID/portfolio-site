import React from "react";
import { projects } from "@/data";
import { CardContainer, CardBody, CardItem } from "@/components/ui/Projectcard";
import { IconBrandGithub } from "@tabler/icons-react";

function RecentProjects() {
  return (
    <section id="project" className="py-24">
      <h1 className="heading text-center text-2xl md:text-4xl lg:text-5xl font-bold">
        Campus and Freelancer <span className="text-purple">Recent Projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-8 gap-x-20 gap-y-32 lg:gap-x-52 lg:gap-y-20 mt-10">
        {projects.map(({ id, title, des, img, link, githubLink }) => (
          <div
            key={id}
            className="h-[20rem] lg:h-[32.5rem] flex items-center justify-center sm:w-80 w-[90vw] lg:w-96"
          >
            <CardContainer containerClassName="group">
              <CardBody className="bg-gray-50 relative group-hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] lg:w-[30rem] h-auto rounded-xl p-4 lg:p-6 border">
                {/* Project Title */}
                <CardItem
                  translateZ={50}
                  className="text-base md:text-lg lg:text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {title}
                </CardItem>

                {/* Project Description */}
                <CardItem
                  as="p"
                  translateZ={60}
                  className="text-neutral-500 text-xs md:text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {des}
                </CardItem>

                {/* Project Image */}
                <CardItem translateZ={100} className="w-full mt-4">
                  <img
                    src={img}
                    alt={title}
                    className="h-40 lg:h-60 w-full object-cover rounded-xl group-hover:shadow-xl"
                  />
                </CardItem>

                {/* Project Actions */}
                <div className="flex justify-between items-center mt-10 lg:mt-20">
                  <CardItem
                    translateZ={20}
                    as="a"
                    href={link}
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
                    href={githubLink}
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

