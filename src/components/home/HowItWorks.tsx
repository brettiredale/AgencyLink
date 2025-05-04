import React from 'react';
import { motion } from 'framer-motion';
import { Building2Icon, Users2Icon, SearchIcon } from 'lucide-react';

const steps = [
  {
    icon: <SearchIcon size={24} />,
    title: 'Find the Right Agency',
    description: 'Search through hundreds of specialized recruitment agencies filtered by industry, location, and expertise.',
    color: 'bg-primary-100 text-primary-600',
  },
  {
    icon: <Building2Icon size={24} />,
    title: 'Connect and Collaborate',
    description: 'Contact agencies directly, discuss your requirements, and choose the perfect partner for your recruitment needs.',
    color: 'bg-secondary-100 text-secondary-600',
  },
  {
    icon: <Users2Icon size={24} />,
    title: 'Hire the Best Talent',
    description: 'Work with your chosen agency to find, interview, and hire exceptional candidates for your open positions.',
    color: 'bg-accent-100 text-accent-600',
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            How It Works
          </motion.h2>
          <motion.p
            className="text-neutral-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Your seamless journey to finding the perfect recruitment partner
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="glass p-8 rounded-2xl relative overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex flex-col items-center text-center">
                <div className={`${step.color} rounded-full p-4 mb-6`}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-neutral-600">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-primary-300">
                    <path d="M5 12h14m-4 -4l4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
              
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;