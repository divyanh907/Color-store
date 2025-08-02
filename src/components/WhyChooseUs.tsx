
"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const paintColorContent = [
  {
    title: 'Discover Your Perfect Hue: A Personalized Journey in Color Mastery',
    description:
      'Explore a world of colors tailored uniquely for your space. Our expert guidance adapts to your style and preferences, laying the groundwork for stunning transformations. With our paint color solutions, your vision blends perfectly with our dedication to quality and creativity.',
  },
  {
    title: 'Endless Color Inspiration for Every Room',
    description:
      'Find inspiration in a diverse palette of colors curated to fit every mood and environment. From bold accents to soothing neutrals, our collection allows you to experiment and express your personal style confidently.',
  },
  {
    title: 'Innovative Tools for Color Selection',
    description:
      'Use our cutting-edge digital tools to visualize colors in your own space before you paint. Real-time previews and expert recommendations simplify your decision-making, ensuring your chosen colors harmonize beautifully.',
  },
  {
    title: 'Live Expert Advice & Support',
    description:
      'Connect with our color consultants for immediate feedback and guidance, helping you choose the perfect palette and achieve professional results. Our interactive support makes your painting project smooth and enjoyable.',
  },
  {
    title: 'Sustainable, High-Quality Paints',
    description:
      'Our products are eco-friendly and formulated to provide vibrant colors with durable finishes. Enjoy beautiful walls that are safe for your family and good for the environment.',
  },
  {
    title: 'Inspiration That Never Ends',
    description:
      'Discover new trends, tips, and techniques with our regularly updated color stories and DIY guides. Keep your creativity alive and your spaces fresh with endless paint possibilities.',
  },
];

function WhyChooseUs() {
  return (
    <div>
        <StickyScroll content={paintColorContent} />
    </div>
  )
}

export default WhyChooseUs