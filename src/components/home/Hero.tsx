import React from 'react';
import { motion } from 'framer-motion';
import { SearchIcon } from 'lucide-react';
import { Button } from '../ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-primary-100/40 to-secondary-100/40 rounded-bl-[100px] blur-xl" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-accent-100/30 to-primary-100/30 rounded-tr-[100px] blur-xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Content */}
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="relative">
                Your Gateway To
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary-300 opacity-50" viewBox="0 0 200 8" preserveAspectRatio="none">
                  <path d="M0,5 C50,2 150,2 200,5 L200,8 L0,8 Z" fill="currentColor"></path>
                </svg>
              </span>
              <br />
              <span className="text-primary-600">Premium</span> Recruitment
            </motion.h1>
            <motion.p 
              className="text-lg text-neutral-600 mb-8 max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Connect with top recruitment agencies specializing in your industry. AgencyLink helps you find the perfect recruitment partner tailored to your needs.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button variant="primary" size="lg" icon={<SearchIcon size={18} />}>
                Find an Agency
              </Button>
              <Button variant="outline" size="lg">
                Post a Job
              </Button>
            </motion.div>
            
            <motion.div 
              className="mt-10 grid grid-cols-3 gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div>
                <p className="text-3xl font-bold text-primary-600">500+</p>
                <p className="text-sm text-neutral-600">Premium Agencies</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary-600">10k+</p>
                <p className="text-sm text-neutral-600">Monthly Jobs</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary-600">98%</p>
                <p className="text-sm text-neutral-600">Satisfaction Rate</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Image/Animation */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-2xl blur-lg opacity-70"></div>
              <div className="card-glass bg-white/90 relative overflow-hidden rounded-2xl">
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                  alt="Recruitment professionals" 
                  className="w-full h-auto rounded-xl"
                />
                
                {/* Floating stats card 1 */}
                <motion.div 
                  className="absolute top-4 left-4 glass rounded-xl p-3 bg-white/90"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-success-100 flex items-center justify-center">
                      <svg className="h-4 w-4 text-success-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-neutral-600">Placements</p>
                      <p className="text-sm font-semibold">+27% this month</p>
                    </div>
                  </div>
                </motion.div>
                
                {/* Floating stats card 2 */}
                <motion.div 
                  className="absolute bottom-4 right-4 glass rounded-xl p-3 bg-white/90"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                >
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center">
                      <svg className="h-4 w-4 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-neutral-600">New Agencies</p>
                      <p className="text-sm font-semibold">12 this week</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;