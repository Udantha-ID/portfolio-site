import React from "react";
import { projects } from "@/data";
import { CardContainer, CardBody, CardItem } from "@/components/ui/Projectcard";
import { IconBrandGithub } from "@tabler/icons-react";

function RecentProjects() {
  return (
    <section id="project" className="py-24">
      <h1 className="heading">
        Campus and Freelancer <span className="text-purple">Recent Projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-36 mt-10">
        {projects.map(({ id, title, des, img, link, githubLink }) => (
          <div
            key={id}
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
          >
            <CardContainer containerClassName="group">
              <CardBody className="bg-gray-50 relative group-hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                {/* Project Title */}
                <CardItem
                  translateZ={50}
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {title}
                </CardItem>

                {/* Project Description */}
                <CardItem
                  as="p"
                  translateZ={60}
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {des}
                </CardItem>

                {/* Project Image */}
                <CardItem translateZ={100} className="w-full mt-4">
                  <img
                    src={img}
                    alt={title}
                    className="h-60 w-full object-cover rounded-xl group-hover:shadow-xl"
                  />
                </CardItem>

                {/* Project Actions */}
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    as="a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
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
                      className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-normal text-neutral-500 dark:text-neutral-300 hover:text-neutral-700 hover:bg-gray-500 transition"
                  >
                    <IconBrandGithub className="w-5 h-5" />
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
