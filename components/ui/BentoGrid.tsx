"use client";
import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";
// import Lottie from 'lottie-react';
// import animationData from '@/data/confetti.json'
import { useState } from "react";
import Button from "./Button";
import { BsLinkedin } from "react-icons/bs";
// import Image from "next/image";
// import DownloadButton from "./DownloadButton";
// import { FaDownload } from "react-icons/fa";


export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  className,
  title,
  description,
  
}: {
  id?: number;
  img: string;
  imgClassName: string;
  titleClassName: string;
  spareImg: string;
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  
  
}) => {

  const [copied, setCopied] = useState(false);

  const handleCopyMy = () => {
    window.open("https://www.linkedin.com/in/induru-udantha/", "_blank");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyCompany = () => {
    window.open("https://www.linkedin.com/in/phrasecode/", "_blank");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // const handelDownload = () => {
  //   const link = document.createElement('a');
  //   link.href = '/InduruUdantha.pdf';
  //   link.download = 'InduruUdantha.pdf';
  //   link.click();
  // };
  

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white/[0.1]",
        className
      )}
      style={{
        background: 'rgb(2,0,36)',
        backgroundColor:' linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 28%, rgba(0,188,226,1) 100%)',
      }}
    >
      <div className={`${id === 6} && 'flex justify-center'} 'h-full`}>
          <div className="w-full h-full absolute">
            <img src={img} 
                 alt={img} 
                 //fill
                 className={cn(imgClassName, 'object-cover, object-center')}
            />
          </div>
          <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              //fill
              className="object-cover object-center w-full h-full"
            />
          )}
          </div>
          {id === 6 && (
          // add background animation , remove the p tag
          <BackgroundGradientAnimation>
             <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"/>
          </BackgroundGradientAnimation>
           
        )}

        <div className={cn(titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10')}>
            <div className="font-sans font-extralight text-[#c1c2d3] text-xs md:text-xs lg:text-base z-10 dark:text-neutral-300">
              {description}
            </div>

            <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
          {title}
          </div>
          {/* {id === 2 && <GlobeDemo/>} */}

          {id === 2 && (
          <div className="mt-5 relative background: rgb(6,2,62); background: linear-gradient(90deg, rgba(6,2,62,1) 0%, rgba(5,5,89,1) 99%, rgba(36,74,82,1) 100%);">
              <div className={`absolute -bottom-5 right-7`}>
              {/* <Lottie
                  animationData={animationData}
                  loop={true}
                  autoplay={true}
                  height={200}
                  width={400}
              /> */}
              </div>
              <div className="mt-5 relative">
              <Button
                title="Likedin Profile"
                icon={<BsLinkedin/>}
                position="right"
                otherClasses="!bg-[#161A31]"
                handleCopy={handleCopyCompany}
              />
            {copied && (
              <div className="absolute top-0 left-0 bg-transparent text-white px-4 py-2 rounded">
               Link opened!
              </div>
          )}
          </div>
          </div>
        )}

        {id === 3 && (
          <div className="flex gap-0 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
            <div className="flex flex-col gap-2 lg:gap-8">
                {['React.js', 'Next.js', 'TypeScript.js'].map((item) => (
                  <span key={item} className="py-2 lg:py4 lg:px-3 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                      {item}
                    </span>
                ))}
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]"></span>
            </div>
            <div className="flex flex-col gap-3 lg:gap-8">
            <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]"></span>

                {['VueJS', 'JavaScript.js', 'MongoDB'].map((item) => (
                  <span key={item} className="py-2 lg:py4 lg:px-3 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                      {item}
                    </span>
                ))}
            </div>
          </div>
        )}
        
        {id === 6 && (
          <div className="mt-5 relative">
              <Button
                title="Likedin Profile"
                icon={<BsLinkedin/>}
                position="right"
                otherClasses="!bg-[#161A31]"
                handleCopy={handleCopyMy}
              />
            {copied && (
              <div className="absolute top-0 left-0 bg-transparent text-white px-4 py-2 rounded">
               Link opened!
              </div>
          )}
          </div>
        )}
      </div>
    </div>
  </div>
  );
};
