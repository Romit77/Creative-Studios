"use client";
import React from "react";
import { BackgroundBeams } from "../../components/ui/background-beams";

function BackgroundBeamsDemo() {
  return (
    <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Contact Us
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          We're here to help with any questions about our courses, programs, or
          events. Reach out and let us know how we can assist you in your
          creative journey.
        </p>
        <input
          type="text"
          placeholder="Enter your email address"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 h-10 p-2"
        />
        <input
          type="text"
          placeholder="Your Message"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 h-20 p-2"
        />
      </div>
      <button
        type="submit"
        className="px-6 py-2 rounded-lg bg-gray-800 text-white font-medium hover:bg-zinc cursor-pointer"
      >
        Send Message
      </button>
      <BackgroundBeams />
    </div>
  );
}

export default BackgroundBeamsDemo;
