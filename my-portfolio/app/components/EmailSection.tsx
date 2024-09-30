"use client";
import React, { useState } from "react";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const form = e.currentTarget;

      const response = await fetch("https://formspree.io/f/mvgpekoa", {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        console.log("Message sent.");
        setEmailSubmitted(true);
      } else {
        console.error("Error sending message.");
      }
  };

  return (
    <section id="contact" className="py-16 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Contact Me</h2>
        <div className="max-w-md mx-auto">
          {emailSubmitted ? (
            <p className="text-sky-300 text-xl sm:text-2xl mt-8 text-center">
              Email sent successfully!
            </p>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="text-white block mb-1 text-sm font-medium"
                >
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  required
                  className="w-full px-3 py-2 bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email..."
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="text-white block text-sm mb-2 font-medium"
                >
                  Subject
                </label>
                <input
                  name="subject"
                  type="text"
                  id="subject"
                  required
                  className="w-full px-3 py-2 bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="<No Subject>"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="text-white block text-sm mb-2 font-medium"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  className="w-full px-3 py-2 bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Start typing..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-4 rounded-md transition-transform transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default EmailSection;