"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "Working with Creative Minds Studio was an absolute pleasure. Their team's creativity and professionalism exceeded our expectations, and the final result was beyond anything we could have imagined.",
    name: "Emily Johnson",
    title: "Marketing Director",
  },
  {
    quote:
      "Innovative Design Hub helped us redefine our brand identity. Their designs were not only visually stunning but also perfectly captured the essence of our company. Highly recommend their services!",
    name: "Michael Chang",
    title: "CEO",
  },
  {
    quote:
      "Visionary Studios transformed our vision into reality. Their expertise in immersive technologies allowed us to create an unforgettable experience for our audience. We're grateful for their dedication and creativity.",
    name: "Sarah Rodriguez",
    title: "Event Coordinator",
  },
  {
    quote:
      "Artistry Collective brought our story to life in ways we never thought possible. Their team's passion for their craft is evident in every detail. We couldn't be happier with the outcome!",
    name: "David Thompson",
    title: "Creative Director",
  },
  {
    quote:
      "Studio Xpression's work speaks for itself - bold, innovative, and captivating. They took our ideas and elevated them to a whole new level. It was a pleasure collaborating with such talented individuals.",
    name: "Jessica Patel",
    title: "Product Manager",
  },
  {
    quote:
      "Creative Minds Studio exceeded our expectations at every turn. Their ability to translate our vision into reality was truly remarkable. We look forward to working with them on future projects.",
    name: "Alexandre Dubois",
    title: "Art Director",
  },
  {
    quote:
      "Innovative Design Hub's attention to detail is unmatched. They listened to our needs and delivered designs that perfectly aligned with our brand identity. We couldn't be happier with the results!",
    name: "Sophia Lee",
    title: "Brand Manager",
  },
];

function Cards() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Hear our Harmony: Voices of success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default Cards;
