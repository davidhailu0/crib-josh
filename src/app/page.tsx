"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ReactTyped } from "react-typed";
import { icons } from "lucide-react";

export default function Home() {
  const Facebook = icons["Facebook"];
  const Linkedin = icons["Linkedin"];
  const Instagram = icons["Instagram"];

  return (
    <main className="w-full min-h-screen flex flex-col bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-blue-500 text-white pt-16 px-6 md:px-12 flex items-center min-h-screen">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-center gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Hi, I'm{" "}
              <span className="text-yellow-300">Josh Cheetham</span>
            </h1>
            <ReactTyped
              strings={[
                "Business Coach.",
                "Network Marketing Expert.",
                "Your Partner in Success.",
              ]}
              typeSpeed={50}
              backSpeed={30}
              loop
              className="text-2xl font-semibold"
            />
            <p className="text-lg leading-relaxed mt-4">
              I specialize in helping entrepreneurs and business professionals
              build thriving networks and achieve financial independence. With
              my proven strategies, I can help you take your business to the
              next level.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/joshcheetham"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white text-blue-500 flex items-center justify-center shadow-lg hover:shadow-xl transition"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/joshcheetham/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white text-blue-600 flex items-center justify-center shadow-lg hover:shadow-xl transition"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/joshcheetham"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-400 to-yellow-500 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2 flex justify-center"
          >
            <Image
              src="/josh-cheetham.jpg"
              alt="Josh Cheetham Professional Portrait"
              width={500}
              height={500}
              className="rounded-full shadow-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="container mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-blue-500">
            About Me
          </h2>
          <p className="text-lg leading-relaxed text-gray-600">
            With over a decade of experience in coaching and network marketing,
            I've guided countless individuals to discover their full potential.
            My mission is to empower others to achieve success through personal
            branding, strategic leadership, and sustainable growth strategies.
          </p>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 px-6 md:px-12 bg-gray-100">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-blue-500">
                10+ Years of Experience
              </h3>
              <p className="text-gray-600 mt-4">
                A seasoned professional in network marketing and business coaching.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-blue-500">
                Leadership Excellence
              </h3>
              <p className="text-gray-600 mt-4">
                Mentored individuals and teams to develop leadership skills and
                build successful businesses.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-blue-500">
                Results-Driven Strategies
              </h3>
              <p className="text-gray-600 mt-4">
                Proven techniques to achieve financial growth and personal success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-6 md:px-12 bg-blue-500 text-white text-center">
        <div className="container mx-auto space-y-6">
          <h2 className="text-3xl font-bold">Ready to Work Together?</h2>
          <p className="text-lg">
            Whether you're looking to grow your business or take your career to
            the next level, I'm here to help. Let's create a strategy tailored
            to your goals.
          </p>
          <Link
            href="/work-with-me"
            className="inline-block mt-4 bg-yellow-300 text-blue-800 font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition"
          >
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
}
