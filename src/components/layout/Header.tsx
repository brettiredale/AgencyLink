import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { BriefcaseIcon, MenuIcon, SearchIcon, UserIcon, X } from 'lucide-react';

const navLinks = [
  { name: 'Agencies', href: '/agencies' },
  { name: 'Jobs', href: '/jobs' },
  { name: 'For Agencies', href: '/for-agencies' },
  { name: 'For Job Seekers', href: '/for-job-seekers' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const headerVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, x: '100%' },
    open: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 300, damping: 30 } },
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass shadow-sm' : 'bg-transparent'
      }`}
      initial="initial"
      animate="animate"
      variants={headerVariants}
    >
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <BriefcaseIcon className="h-8 w-8 text-primary-500" />
            <span className="ml-2 text-2xl font-semibold tracking-tight">AgencyLink</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors hover:bg-neutral-100 ${
                  location.pathname === link.href ? 'text-primary-600' : 'text-neutral-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/search">
              <Button variant="ghost" size="sm" icon={<SearchIcon size={18} />}>
                Search
              </Button>
            </Link>
            
            {user ? (
              <div className="flex items-center space-x-4">
                <Link to="/dashboard">
                  <Button variant="outline" size="sm">
                    Dashboard
                  </Button>
                </Link>
                <Button variant="ghost" size="sm" onClick={() => signOut()}>
                  Sign Out
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/sign-in">
                  <Button variant="outline" size="sm">
                    Sign In
                  </Button>
                </Link>
                <Link to="/sign-up">
                  <Button variant="primary" size="sm">
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden rounded-full p-2 text-neutral-700 hover:bg-neutral-100"
            onClick={() => setMobileMenuOpen(true)}
          >
            <MenuIcon className="h-6 w-6" />
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-neutral-950/80 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-white p-6"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="flex items-center justify-between mb-8">
                <Link to="/" className="flex items-center">
                  <BriefcaseIcon className="h-8 w-8 text-primary-500" />
                  <span className="ml-2 text-2xl font-semibold tracking-tight">AgencyLink</span>
                </Link>
                <button
                  type="button"
                  className="rounded-full p-2 text-neutral-700 hover:bg-neutral-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`px-4 py-2 rounded-full text-base font-medium transition-colors ${
                      location.pathname === link.href
                        ? 'bg-primary-50 text-primary-600'
                        : 'text-neutral-700 hover:bg-neutral-100'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}

                <div className="pt-6 border-t border-neutral-200">
                  <Link to="/search" className="flex items-center px-4 py-2 rounded-full text-base font-medium text-neutral-700 hover:bg-neutral-100">
                    <SearchIcon size={16} className="mr-2" />
                    Search
                  </Link>
                </div>

                <div className="pt-6 border-t border-neutral-200">
                  {user ? (
                    <>
                      <Link
                        to="/dashboard"
                        className="flex items-center px-4 py-2 rounded-full text-base font-medium text-neutral-700 hover:bg-neutral-100"
                      >
                        <UserIcon size={16} className="mr-2" />
                        Dashboard
                      </Link>
                      <button
                        onClick={() => signOut()}
                        className="mt-4 w-full px-4 py-2 rounded-full text-base font-medium text-neutral-700 hover:bg-neutral-100"
                      >
                        Sign Out
                      </button>
                    </>
                  ) : (
                    <>
                      <Link to="/sign-in">
                        <Button variant="outline" fullWidth className="mb-3">
                          Sign In
                        </Button>
                      </Link>
                      <Link to="/sign-up">
                        <Button variant="primary" fullWidth>
                          Sign Up
                        </Button>
                      </Link>
                    </>
                  )}
                </div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};