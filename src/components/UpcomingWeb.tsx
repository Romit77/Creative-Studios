"use client";
import Link from "next/link";
import { HoverEffect } from "@/components/ui/card-hover-effect";

const featuredWebinars = [
  {
    title: "Understanding Music Theory",
    description:
      "Dive deep into the fundamentals of music theory and enhance your musical skills.",
    slug: "understanding-music-theory",
    isFeatured: true,
    link: "/",
  },
  {
    title: "The Art of Programming",
    description:
      "Learn the craft of Programming from experienced programmers and developers.",
    slug: "the-art-of-songwriting",
    isFeatured: true,
    link: "/",
  },
  {
    title: "Mastering Your atheletics",
    description: "Advanced techniques to master your sport of choice.",
    slug: "mastering-your-instrument",
    isFeatured: true,
    link: "/",
  },
  {
    title: "Music Production Essentials",
    description:
      "Get started with music production with this comprehensive overview.",
    slug: "music-production-essentials",
    isFeatured: true,
    link: "/",
  },

  {
    title: "Live Performance Techniques",
    description:
      "Enhance your live performance skills with expert tips and strategies.",
    slug: "live-performance-techniques",
    isFeatured: true,
    link: "/",
  },
  {
    title: "Digital Music Marketing",
    description:
      "Learn how to promote your music effectively in the digital age.",
    slug: "digital-music-marketing",
    isFeatured: true,
    link: "/",
  },
];

function UpcomingWeb() {
  return (
    <div>
      <div className="  py-12 bg-zinc dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center ">
            <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
              FEATURED WEBINARS
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Enhance Your Creative Journey
            </p>
          </div>
          <div className="mt-10">
            {/* <HoverEffect items={featuredWebinars} /> -> this also works */}
            <HoverEffect
              items={featuredWebinars.map((webinar) => ({
                title: webinar.title,
                description: webinar.description,
                link: "/",
              }))}
            />
          </div>
          <div className="mt-10 text-center ">
            <Link
              href={"/"}
              className="px-4 py-2  border border-neutral-600  bg-zinc hover:bg-gray-900 transition duration-200 rounded-lg font-semibold text-white"
            >
              View All webinars
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpcomingWeb;
