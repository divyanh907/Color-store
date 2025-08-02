'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
    {
quote:
      'Joining this paint community transformed my approach to color and helped me truly discover my own style. The experts are world-class!',
    name: 'Alex Johnson',
    title: 'Home Decor Enthusiast',
  },
  {
    quote:
      "The community and support here are unmatched. I've grown not just as a painter, but also as a designer, thanks to their comprehensive approach.",
    name: 'Samantha Lee',
    title: 'Interior Designer',
  },
  {
    quote:
      "This platform gave me the tools and confidence to take my painting skills to the next level. I'm endlessly grateful for the personalized coaching.",
    name: 'Michael Chen',
    title: 'Amateur Artist',
  },
  {
    quote:
      'As a mural artist, finding the right guidance can be challenging, but this platform matched me with mentors who truly understand my creative goals.',
    name: 'Emily Taylor',
    title: 'Mural Artist',
  },
  {
    quote:
      'The color consultation sessions here opened my eyes to the subtleties of color theory and application. Highly recommend for any aspiring painters!',
    name: 'Chris Morales',
    title: 'Professional Painter',
  },
];
function MusicSchoolTestimonials() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our Harmony: Voices of success</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={musicSchoolTestimonials}
                direction="right"
                speed="slow"
      />
            </div>
        </div>
    </div>
  )
}

export default MusicSchoolTestimonials