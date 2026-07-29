import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";


const testimonials = [
  {
    quote:
      "Pedro is one of the most talented engineers I've worked with. His attention to detail and ability to translate complex requirements into elegant solutions is remarkable.",
    author: "Sarah Chen",
    role: "CTO, Tech Innovators Inc.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    quote:
      "Working with Pedro was a game-changer for our project. He delivered ahead of schedule with code quality that set a new standard for our team.",
    author: "Michael Rodriguez",
    role: "Product Manager, Digital Solutions",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
  {
    quote:
      "Pedro's expertise in React and TypeScript helped us rebuild our entire frontend in record time. His architectural decisions continue to pay dividends.",
    author: "Emily Watson",
    role: "Engineering Lead, StartUp Labs",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
  {
    quote:
      "Not only is Pedro technically brilliant, but he's also a fantastic communicator and team player. He elevated everyone around him.",
    author: "David Kim",
    role: "CEO, Innovation Hub",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
];

/* =========================
   Main Component
========================= */
export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setActiveIdx(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const getIndex = (index: number) => {
    if (index < 0) return testimonials.length - 1;
    if (index >= testimonials.length) return 0;
    return index;
  };

  const prevIdx = getIndex(activeIdx - 1);
  const nextIdx = getIndex(activeIdx + 1);

  return (
    <section
      id="testimonials"
      className="py-32 bg-linear-to-b from-black to-gray-900 overflow-hidden"
    >
      <div className="container mx-auto px-6 text-center">
        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-bold mb-16">
          Client <span className="text-primary">Testimonials</span>
        </h2>

        {/* Stacked Layout */}
        <div className="relative flex items-center justify-center">

          {/* Left Preview */}
          <div className="hidden md:block absolute left-0 w-72 opacity-40 scale-90 blur-sm transition-all">
            <TestimonialCard testimonial={testimonials[prevIdx]} />
          </div>

          {/* Active */}
          <div className="relative z-10 w-full md:w-150 transition-all duration-500">
            <TestimonialCard
              testimonial={testimonials[activeIdx]}
              active
            />
          </div>

          {/* Right Preview */}
          <div className="hidden md:block absolute right-0 w-72 opacity-40 scale-90 blur-sm transition-all">
            <TestimonialCard testimonial={testimonials[nextIdx]} />
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-6 mt-12">
          <button
            onClick={previous}
            className="p-3 rounded-full bg-gray-800 hover:bg-primary transition"
          >
            <ChevronLeft className="text-white" />
          </button>

          <button
            onClick={next}
            className="p-3 rounded-full bg-gray-800 hover:bg-primary transition"
          >
            <ChevronRight className="text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

/* =========================
   Card Component
========================= */
interface Props {
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    avatar: string;
  };
  active?: boolean;
}

const TestimonialCard = ({ testimonial, active }: Props) => {
  if (!testimonial) return null; // Safety check

  return (
    <div
      className={`bg-gray-800 rounded-3xl p-8 shadow-xl transition-all duration-500 ${
        active ? "scale-100 opacity-100" : "scale-95 opacity-70"
      }`}
    >
      <Quote className="w-8 h-8 text-primary mb-6" />

      <p className="text-lg text-gray-300 mb-8 leading-relaxed">
        "{testimonial.quote}"
      </p>

      <div className="flex items-center gap-4 justify-center">
        <img
          src={testimonial.avatar}
          alt={testimonial.author}
          className="w-14 h-14 rounded-full object-cover"
        />
        <div className="text-left">
          <div className="font-semibold text-white">
            {testimonial.author}
          </div>
          <div className="text-sm text-gray-400">
            {testimonial.role}
          </div>
        </div>
      </div>
    </div>
  );
};