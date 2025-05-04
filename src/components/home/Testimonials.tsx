import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "AgencyLink transformed how we approach recruitment. We found a specialized agency that understood our industry and delivered exceptional candidates.",
    author: "Sarah Johnson",
    role: "HR Director",
    company: "TechVision",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=120",
    rating: 5,
  },
  {
    id: 2,
    quote: "As a boutique recruitment agency, AgencyLink has significantly expanded our client base and visibility. The platform is intuitive and the support team is always responsive.",
    author: "Michael Chen",
    role: "Founder",
    company: "Elite Talent Solutions",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=120",
    rating: 5,
  },
  {
    id: 3,
    quote: "I was skeptical at first, but AgencyLink connected me with a recruitment agency that specialized in my field. Within weeks, I secured my dream job.",
    author: "Emily Rodriguez",
    role: "Senior Engineer",
    company: "InnovateX",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=120",
    rating: 4,
  },
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 500 : -500,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 500 : -500,
    opacity: 0,
  }),
};

const Testimonials: React.FC = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    const newPage = (page + newDirection + testimonials.length) % testimonials.length;
    setPage([newPage, newDirection]);
  };

  const testimonial = testimonials[page];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Success Stories
          </motion.h2>
          <motion.p
            className="text-neutral-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Hear from employers, agencies, and job seekers who've experienced results with AgencyLink
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative glass rounded-2xl p-8 sm:p-12 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 h-64 w-64 rounded-full bg-primary-100 opacity-50 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 h-64 w-64 rounded-full bg-secondary-100 opacity-50 blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex justify-center mb-8">
                <div className="flex space-x-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon
                      key={i}
                      size={20}
                      className={i < testimonial.rating ? "text-accent-500 fill-accent-500" : "text-neutral-300"}
                    />
                  ))}
                </div>
              </div>

              <div className="h-48 flex items-center justify-center">
                <AnimatePresence custom={direction} initial={false} mode="wait">
                  <motion.blockquote
                    key={page}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="text-center"
                  >
                    <p className="text-xl italic mb-6">"{testimonial.quote}"</p>
                    <footer className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden mb-3">
                        <img src={testimonial.avatar} alt={testimonial.author} className="w-full h-full object-cover" />
                      </div>
                      <div className="text-center">
                        <p className="font-semibold">{testimonial.author}</p>
                        <p className="text-sm text-neutral-600">{testimonial.role}, {testimonial.company}</p>
                      </div>
                    </footer>
                  </motion.blockquote>
                </AnimatePresence>
              </div>

              <div className="flex justify-center mt-8">
                <div className="flex items-center space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setPage([index, index > page ? 1 : -1])}
                      className={`h-2 w-2 rounded-full transition-all ${
                        index === page ? "bg-primary-500 w-6" : "bg-neutral-300"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={() => paginate(-1)}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 text-neutral-700 hover:bg-white hover:text-primary-600 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeftIcon size={20} />
            </button>
            <button
              onClick={() => paginate(1)}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 text-neutral-700 hover:bg-white hover:text-primary-600 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRightIcon size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;