'use client'
import { ThreeDMarquee } from "./ui/wavy-background"
import { AnimatedTooltip } from "./ui/animated-tooltip";

const instructors = [
    {
      id: 1,
      name: 'Dhruv Raheja',
      designation: 'Technical Director',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 2,
      name: 'Parth Azad',
      designation: 'Ceo',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
    },
    {
      id: 3,
      name: 'Yashvi Sharma',
      designation: 'Painter',
      image:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 4,
      name: 'rajesh Kumar',
      designation: 'Helper',
      image:
        'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    },
  ];

function Instructors() {
  return (
    <div className="relative h-[40rem] p-12 bg-gray-900 overflow-hidden flex flex-col items-center justify-center text-white">
      <div className="absolute inset-0 z-0 opacity-20">
        <ThreeDMarquee
          className="w-full max-w-7xl mx-auto h-full"
          images={instructors.map((instructor) => instructor.image)}
        />
      </div>

      <div className="relative z-10 text-center max-w-3xl">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-xl">
          Meet Our Artists
        </h2>
        <p className="text-base md:text-lg text-gray-300 mb-8">
          Discover the talented professionals who will guide your artistic journey.
        </p>
      </div>

      <div className="relative z-10 flex flex-row flex-wrap items-center justify-center w-full max-w-5xl">
        <AnimatedTooltip items={instructors} />
      </div>
    </div>
  );
}


export default Instructors