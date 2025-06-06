"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { SiGithub, SiLinkedin, SiWhatsapp, SiFacebook } from "react-icons/si";
import emailjs from "emailjs-com";
import { BackgroundBeamsWithCollision } from "./ui/AuroraBackgroundProps ";
import { DivOrigami } from "./DivOrigami";
import Swal from "sweetalert2";
import 'tailwindcss/tailwind.css';


type FormData = {
  name: string;
  email: string;
  message: string;
};

export const RevealBento = () => {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send(
        "service_z0btt2d", // Service ID
        "template_22k635l", // Template ID
        {
          name: form.name,
          email: form.email,
          message: form.message,
          to_name: "Induru Udantha",
          to_email: "induruudantha45615@gmail.com",
        },
        "j5XhaYmWWVErqfqKN" // Public Key
      )
      .then(
        () => {
          Swal.fire({
            icon: "success",
            title: "Email sent successfully..! ",
            text: "I will reply as soon as possible..✌️",
            customClass: {
              popup: "bg-gray-900 text-white",
              title: "text-purple-500",
              confirmButton: "bg-purple-500 text-white hover:bg-purple-700",
            },
          });
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Oops!",
            text: "Failed to send your message. Please try again later.",
            showConfirmButton: true,
            confirmButtonText: "Retry",
            customClass: {
              popup: "bg-gray-900 text-white",
              title: "text-purple-500",
              confirmButton: "bg-purple-500 text-white hover:bg-purple-700",
            },
          });
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <BackgroundBeamsWithCollision className="w-full">
      <section id="contact" className="w-full text-zinc-100">
        <h1 className="heading text-2xl md:text-4xl p-10  lg:text-5xl sm:text-2xl font-bold">Contact Us</h1>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-32 items-start max-w-6xl mx-auto  lg:py-8">
          {/* Left Side: Form */}
          <motion.form
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            onSubmit={handleSubmit}
            className="w-full lg:w-1/2 rounded-2xl bg-gradient-to-tr from-white to-neutral-100 dark:from-neutral-950 dark:to-neutral-800 p-8 shadow-2xl text-white"
          >
            <h2 className="mb-6 text-3xl font-extrabold bg-clip-text">Send an Email :</h2>
            <div className="mb-6">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-purple-300">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-600 bg-zinc-700 p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-purple-300">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-600 bg-zinc-700 p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-purple-300">Message</label>
              <textarea
                name="message"
                id="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-600 bg-zinc-700 p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 p-3 text-center text-white font-semibold hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-lg"
            >
              Send Message
            </button>
          </motion.form>

          {/* Right Side: Social Media Icons */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            animate="animate"
            className="grid justify-center items-center grid-cols-4 gap-12 lg:w-1/2"
          >
            <SocialBlock
              href="https://www.linkedin.com/in/induru-udantha/"
              icon={<SiLinkedin />}
              bgColor="bg-gradient-to-tr from-blue-600 to-blue-400"
              target="_blank"
            />
            <SocialBlock
              href="https://github.com/Udantha-ID"
              icon={<SiGithub />}
              bgColor="bg-gradient-to-tr from-gray-900 to-gray-600"
              target="_blank"
            />
            <SocialBlock
              href="https://web.facebook.com/iduru.udantha"
              icon={<SiFacebook />}
              bgColor="bg-gradient-to-tr from-blue-800 to-blue-700"
              target="_blank"
            />
            <SocialBlock
              href="https://wa.me/94763904365"
              icon={<SiWhatsapp />}
              bgColor="bg-gradient-to-tr from-green-500 to-green-300"
              target="_blank"
            />
            <div className="sm:block hidden">
            <DivOrigami />
            </div>
            
          </motion.div>
        </div>
      </section>
    </BackgroundBeamsWithCollision>
  );
};

type BlockProps = {
  href: string;
  icon: React.ReactNode;
  bgColor: string;
};

const SocialBlock = ({ href, icon, bgColor, target }: BlockProps & { target?: string }) => (
  <motion.div
    whileHover={{ scale: 2.1 }}
    className={twMerge(
      `flex justify-center items-center h-24 w-24 md:h-28 md:w-28 lg:h-24 lg:w-24 rounded-3xl shadow-lg hover:shadow-slate-600 transition-shadow duration-300`,
      bgColor
    )}
  >
    <a 
      href={href} 
      className="text-4xl md:text-5xl text-white"
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
    >
      {icon}
    </a>
  </motion.div>
);
