import React, { useState } from "react";
import { motion } from "framer-motion";
import ygLogo from "../../assets/YG pics/YG logo.jpeg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Why Gymnastics", href: "#why-gymnastics" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  // Handle smooth scroll with offset for sticky header
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Get actual header height dynamically
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 80;
      
      // Add extra offset for mobile devices
      const isMobile = window.innerWidth < 768;
      const extraOffset = isMobile ? 20 : 0;
      
      const elementPosition = targetElement.offsetTop;
      const offsetPosition = elementPosition - headerHeight - extraOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={ygLogo}
              alt="Young Gymnast 101 Logo"
              className="h-20 w-auto object-contain hover:scale-105 transition-transform duration-300"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-ygm-dark-gray hover:text-ygm-blue transition-colors duration-200 font-medium"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.button
            className="hidden md:block btn-primary animate-bounce-slow"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Invite Us! 🌟
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-ygm-blue"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden py-4 border-t border-gray-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    handleNavClick(e, item.href);
                    setIsMenuOpen(false);
                  }}
                  className="text-ygm-dark-gray hover:text-ygm-blue transition-colors duration-200 font-medium"
                >
                  {item.name}
                </a>
              ))}
              <button className="btn-primary mt-4 self-start">
                Invite Us! 🌟
              </button>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;
