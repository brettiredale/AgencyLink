import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { Button } from '../ui/Button';

const CTASection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-600 to-primary-800">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 h-64 w-64 translate-x-1/3 -translate-y-1/3 rounded-full bg-white opacity-10"></div>
          <div className="absolute bottom-0 left-0 h-64 w-64 -translate-x-1/3 translate-y-1/3 rounded-full bg-white opacity-10"></div>
          
          <div className="relative z-10 px-6 py-16 sm:px-12 md:py-20 text-center">
            <motion.h2 
              className="mb-6 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Ready to Transform Your Recruitment?
            </motion.h2>
            <motion.p 
              className="mx-auto mb-8 max-w-2xl text-lg text-white/90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Join thousands of companies and job seekers who have found their perfect recruitment partners through AgencyLink.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button 
                variant="accent" 
                size="lg"
                className="w-full sm:w-auto"
                icon={<ArrowRightIcon size={18} />}
                iconPosition="right"
              >
                Get Started
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                Learn More
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;