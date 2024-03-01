"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Creative Minds Studio",
    description:
      "At Creative Minds Studio, we specialize in crafting unique visual experiences through a blend of creativity and technical expertise. Our team of artists, designers, and developers work collaboratively to bring your ideas to life, whether it's through stunning graphics, immersive animations, or engaging multimedia content.",
  },
  {
    title: "Innovative Design Hub",
    description:
      "Innovative Design Hub is your go-to destination for cutting-edge design solutions. We pride ourselves on pushing the boundaries of creativity to deliver visually captivating and conceptually rich designs. From branding and packaging to digital interfaces and spatial experiences, we are committed to elevating your brand presence in the market.",
  },
  {
    title: "Visionary Studios",
    description:
      "Visionary Studios is where imagination meets reality. With a focus on innovative storytelling and advanced technologies, we create immersive experiences that leave a lasting impression. From virtual reality experiences to interactive installations, we harness the power of creativity to transport audiences to new realms of possibility.",
  },
  {
    title: "Artistry Collective",
    description:
      "Artistry Collective is a haven for creative expression and collaboration. Our diverse team of artists, photographers, writers, and filmmakers come together to produce compelling visual narratives that resonate with audiences across various mediums. We believe in the transformative power of art to inspire, provoke thought, and evoke emotions.",
  },
  {
    title: "Studio Xpression",
    description:
      "Studio Xpression is dedicated to turning ideas into impactful visual experiences. With a focus on innovation and attention to detail, we bring a fresh perspective to every project we undertake. Whether it's graphic design, animation, or multimedia production, our goal is to captivate audiences and leave a lasting impression.",
  },
];

function ChooseScroll() {
  return (
    <div>
      <StickyScroll content={content} />
    </div>
  );
}

export default ChooseScroll;
