import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, BarChart3, ShieldCheck, Globe, Clock } from 'lucide-react';

const featuresData = [
  {
    icon: <Star className="h-6 w-6" />,
    title: 'Verified Reviews',
    description: 'Transparent feedback from real clients and candidates to help you make informed decisions.',
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: 'Industry Analytics',
    description: 'Gain insights into recruitment trends, salary benchmarks, and hiring metrics.',
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: 'Quality Assurance',
    description: 'All agencies undergo a thorough vetting process to ensure the highest standards.',
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: 'Global Network',
    description: 'Access to international recruitment expertise spanning six continents and countless industries.',
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: 'Time-Saving Tools',
    description: 'Streamlined processes for faster, more efficient recruitment and hiring.',
  },
  {
    icon: <Check className="h-6 w-6" />,
    title: 'Perfect Match',
    description: 'Advanced matching algorithms help find the ideal agency for your specific requirements.',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 300 } },
};

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Choose AgencyLink
          </motion.h2>
          <motion.p
            className="text-neutral-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Discover the advantages that make us the leading platform for recruitment agency connections
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              className="glass p-6 rounded-xl hover:shadow-lg transition-all duration-300"
              variants={item}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="rounded-full bg-primary-100 p-3 w-12 h-12 flex items-center justify-center text-primary-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-neutral-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;