'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {

const featuredWebinars = [
  {
    title: 'Understanding Color Theory',
    description: 'Dive deep into the fundamentals of color theory and enhance your painting skills.',
    slug: 'understanding-color-theory',
    isFeatured: true,
  },
  {
    title: 'The Art of Color Mixing',
    description: 'Learn the craft of mixing colors from expert painters and artists.',
    slug: 'the-art-of-color-mixing',
    isFeatured: true,
  },
  {
    title: 'Mastering Painting Techniques',
    description: 'Advanced techniques to master your painting style and brushwork.',
    slug: 'mastering-painting-techniques',
    isFeatured: true,
  },
  {
    title: 'Painting Surface Preparation Essentials',
    description: 'Get started with prepping your walls and surfaces for the perfect paint job.',
    slug: 'painting-surface-preparation-essentials',
    isFeatured: true,
  },
  {
    title: 'Creative Wall Art & Murals',
    description: 'Enhance your space with expert tips on creating stunning murals and wall art.',
    slug: 'creative-wall-art-murals',
    isFeatured: true,
  },
  {
    title: 'Digital Marketing for Painters',
    description: 'Learn how to promote your painting business effectively in the digital age.',
    slug: 'digital-marketing-for-painters',
    isFeatured: true,
  },
];

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED Colors</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Color Journey</p>
        </div>

        <div className="mt-10">
          <HoverEffect
          items={featuredWebinars.map(webinar => (
            {
              title: webinar.title,
              description: webinar.description,
              link: '/'
            }
          ))}
          />
        </div>

        <div className="mt-10 text-center">
          <Link href={"/"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All webinars
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UpcomingWebinars
